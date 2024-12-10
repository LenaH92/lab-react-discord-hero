
import './App.css'
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
      <div className="App">
        <nav>
        <img src= {discordLogo} alt="discord logo" />
          <img src={menuIcon} alt="menu icon" />
        </nav>
        <div>
          <div id="mainArea">
            <h1 id='title'>IMAGINE A PLACE...</h1>
            <p className='text'>
              ...where you can belong to a school club, a gaming group, or a worldwide art 
              community. 
              Where just you and a handful of friends can spend time together. 
              A place that makes it easy to talk every day and hang out more often.
            </p>
            <div id='buttonsDiv'>
              <button id='macBTN' className='text'>Download for Mac</button>
              <button id='openBrowserBTN' className='text'>Open Discord in your browser</button>
            </div>
          </div>
          <div id='imgDiv'><img src={discordBackground} alt="monsters hanging out" id='backgroundIMG' /></div>
          
        </div>
      </div>  
  );
}

export default App
