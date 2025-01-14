import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <div className="inner">
          <h1 className="logo"><Link to="/">MyP</Link></h1>
          <div className="gnb">
            <ul className="depth1">
              <li><button className="btn-depth1">Home</button></li>
              <li><button className="btn-depth1">Elements</button></li>
              <li><button className="btn-depth1">Templates</button></li>
              <li><button className="btn-depth1">Chatbot</button></li>
              <li><button className="btn-depth1">DiceBoard</button></li>
            </ul>
          </div>

          <div className="allmenu-wrap">
            <button className="btn-menu"><span className="blind">전체메뉴 열기</span></button>
            <div className="dimmed"></div>
            <div className="allmenu-area">
              <ul className="allmenu depth1Box">
                <li className="depth1"><button className="btn-depth1">Home</button></li>
                <li className="depth1"><button className="btn-depth1">Elements</button></li>
                <li className="depth1"><button className="btn-depth1">Templates</button></li>
                <li className="depth1"><button className="btn-depth1">Chatbot</button></li>
                <li className="depth1"><button className="btn-depth1">DiceBoard</button></li>
              </ul>
              <button className="btn-allmenu-close"><span className="blind">전체메뉴 닫기</span></button>
            </div>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header
