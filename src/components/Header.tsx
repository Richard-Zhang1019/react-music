import { useNavigate, useLocation } from 'react-router-dom'

import { headerLinks, HeaderLinksItem } from '@/common/local'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const showSelectItem = (item: HeaderLinksItem, index: number) => {
    if (index < 3) {
      return (
        <div
          className={`px-5 ${
            location.pathname.includes(item.link) && 'bg-[black] text-[#fff]'
          }`}
          onClick={() => navigate(item.link)}
        >
          {item.title}
        </div>
      )
    } else {
      return (
        <a className="px-5" href={item.link} target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <div className="h-[70px] bg-[#242424] text-[white] text-[14px]">
      <div className="h-[70px] flex justify-between wrap-v1">
        <div className="flex">
          <div
            className="sprite_01 w-[176px] h-[70px] cp"
            style={{ backgroundPosition: '0 0' }}
            onClick={() => navigate('/')}
          />
          <div className="flex text-center leading-[70px]">
            {headerLinks.map((item, index) => {
              return (
                <div
                  className="cp h-[70px] text-[#ccc] hover:text-[white] hover:bg-[black]"
                  key={item.link}
                >
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
