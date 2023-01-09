import React, { memo,useState } from 'react';
import { NavLink,useHistory,withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { headerLinks } from '@/common/local-data';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { 
  login, 
  sendVerifyCode 
} from '@/services/login';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  Login,
  LoginWindow
} from './style';
import { getSearchContentAction } from '../../pages/search/store/actionCreators';
import { setToken } from '../../utils/handle-data';

const ZXYAppHeader = (props) => {
  // console.log(props);
  const [inputValue, setinputValue] = useState();
  const [show, setShow] = useState(false);
  const [phoneNumber, setphoneNumber] = useState();
  const [verifyCode, setverifyCode] = useState();
  const [loginText, setLoginText] = useState('登录');
  
  //业务代码
  const showSelectItem = (item,index) => {
    if(index<3){
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='icon sprite_01'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  const onChange = (e) => {
    setinputValue(e.target.value);
  }

  const dispatch = useDispatch();
  let history = useHistory();
  const handleKeyUp = (e) => {
    if(e.keyCode === 13){
      history.push({
        pathname:'/search',
        state:{ keywords:inputValue }
      });
      dispatch(getSearchContentAction(inputValue));
    }
  }

  const clickVerifyCode = () => {
    if(!phoneNumber){
      alert('请先输入手机号');
    }
    sendVerifyCode(phoneNumber);
  }

  const clickLogin = () => {
    login(phoneNumber, verifyCode).then(res => {
      console.log(res);
      setShow(false);
      setLoginText(res.profile.nickname);
      setToken('userToken', res.token);
      localStorage.setItem('userData', JSON.stringify(res));
    }).catch(err => {
      console.log(err);
    })
  }

  const judgeLogin = () => {
    if(loginText === '登录'){
      // if(localStorage.getItem("userData")){
      //   const a = JSON.parse(localStorage.getItem("userData"));
      //   setLoginText(a.nickname);
      // } else {
        setShow(true);
    //   }
    // } else {
    //   const a = JSON.parse(localStorage.getItem("userData"));
    //   console.log(a);
    }
  }

  //返回的JSX
  return (
    <HeaderWrapper>
      <CSSTransition in={show}
                     timeout={0}
                     unmountOnExit={true}
                     appear>
        <LoginWindow>
          <div className='wrapper'>
            <div className='top'>
              <span>手机号登录</span>
              <span className='cancel' onClick={e => setShow(false)}> X </span>
            </div>
            <div className='content'>
              <div className='middle'>
                <div className=''><input onChange={e => setphoneNumber(e.target.value)} type="text" name="" id="" placeholder='请输入手机号'/></div>
                <div className='verify'>
                  <input onChange={e => setverifyCode(e.target.value)} type="text" className='verifycode' id="" placeholder='请输入验证码'/>
                  <button onClick={e => clickVerifyCode()}>获取验证码</button>
                </div>
                <div className='login' onClick={e => clickLogin()}>登录</div>
              </div>
            </div>
          </div>
        </LoginWindow>
      </CSSTransition>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <span className="logo sprite_01">网易云音乐</span>
          <div className='select-list'>
            {
              headerLinks.map((item,index) => {
                return (
                  <div key={item.title} className='select-item'>
                    {showSelectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input onChange={onChange} 
                 className='search' 
                 placeholder='音乐/视频/电台/用户' 
                 prefix={<SearchOutlined/>}
                 onKeyUp={e => handleKeyUp(e)} />
          <div className='center'>创作者中心</div>
          <Login onClick={e => judgeLogin()}>{loginText}</Login>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  );
};

export default withRouter(memo(ZXYAppHeader));