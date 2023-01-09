import styled from 'styled-components';

export const LyricWrapper = styled.div`
  height:${props => props.isSpread ? props.length*28+"px": "310px"};
  overflow:hidden;
  line-height:23px;
  margin-top:40px;

  .lineLyric{
    margin-top:5px;
  }
`