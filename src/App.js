import React from 'react'
import Wall from './components/Wall/Wall'

export default function App() {
  return (
    <div className='main' >
      <header>
       
         <div className="logo">
         <img className='facebook' src="https://www.facebook.com/images/fb_icon_325x325.png" alt=""/>
         </div>
         <div className='find'>
         <input className='search' type="text" placeholder='Поиск'/>
         </div>
         <nav>
         <ul>
           <li><a className='navLink' href="#">Главная</a></li>
           <li><a className='navLink' href="#">Найти друзей</a></li>
           <li><a className='navLink' href="#">Создать</a></li>
         </ul>
         </nav>
                
      </header>
      <Wall/>
    </div>
  )
}
