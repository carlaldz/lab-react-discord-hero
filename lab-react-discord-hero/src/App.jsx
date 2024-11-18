import './App.css';
import Button from './components/Button/Button';
import Background from "./assets/discord-background.png";
import Logo from "./assets/discord-logo-white.png";
import Menu from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={Logo} alt="Discord Logo" />
        <img className="menu" src={Menu} alt="Menu" />
      </div>
      <div className = "middle-part">
        <h1> IMAGINE A PLACE...</h1> 
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </p>
        <Button  
          type='download'
          text='Download for Mac' />
        <Button  
          type='browser'
          text='Open Discord in your browser' />
        <img className="background" src={Background} alt="Background" />
      </div>
    </div>
  );
}

export default App;
