// import logo from './logo.svg';
import './App.css';
import React,{Comment} from 'react'

const App = () => {
  return (
    <div className="app-wrapper">

          <header className = "header">
          <img src = "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" />
          </header> 
          <nav className="nav">
            <div> <a> Profile </a> </div>
            <div> <a> Messsages </a> </div>
            <div> <a> News </a> </div>
            <div> <a> Musik </a> </div>
            <div> <a> Settings </a> </div>
          </nav>
          <div className = "content">
            <img src = "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
            <div>
            ava + descroition
          </div>
          <div>
            My post
              <div>
                New post
              </div>
          </div>
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>

          </div>
         
  

    </div>
  );
}

export default App;
