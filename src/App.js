import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
    <div className="sidebar">
      <div className="upperSide">
        <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
        <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
        <div className="upperSideBottom">
          <button className="query"><img src={msgIcon} alt="query" />What is Programming ?</button>
          <button className="query"><img src={msgIcon} alt="query" />How to use an API  ?</button>
        </div>
      </div>
      <div className="lowerSide">
        <div className="listItems"><img src={home} alt="home" className="listitemsImg" />Home</div>
        <div className="listItems"><img src={saved} alt="saved" className="listitemsImg" />Saved</div>
        <div className="listItems"><img src={rocket} alt="upgrade" className="listitemsImg" />Upgrade to Pro</div>
      </div>
    </div>
    <div className="main">
      <div className="chats">
        <div className="chat">
          <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam similique impedit deleniti voluptate ducimus exercitationem culpa quaerat sequi accusamus explicabo.</p>
        </div>
        <div className="chat bot">
          <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo amet facere eum optio esse, magni quidem aperiam sequi! Veritatis ab quod, fugit itaque repudiandae deserunt officiis eligendi deleniti, ipsa sint tempore reiciendis perspiciatis velit molestias, nulla laudantium ipsum nisi? Excepturi quibusdam doloribus voluptatibus tenetur inventore totam reprehenderit nisi sint, error harum at velit eos iure fugit nihil rem porro consequatur rerum quam nesciunt vitae! Eum provident cupiditate maxime enim animi assumenda ad mollitia architecto sunt distinctio, nulla necessitatibus laudantium, neque officiis earum. Animi mollitia ratione officia sapiente quae, error necessitatibus voluptate at dolorem repellat alias voluptatibus maiores distinctio vero.</p>
        </div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder='Send a message' /><button className="Send"><img src={sendBtn} alt="Send" /></button>
        </div>
        <p>ChatGPT may produce inaccurate information about people,places, or facts. ChatGPT november 25 Version</p>
      </div>
    </div>
    </div>
  );
}

export default App;

//55