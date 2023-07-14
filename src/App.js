// import logo from './logo.svg';
import './App.css';
import Mybutton from './components/Mybutton';
import Avatar from './components/Avatar';

function App() {

   const user = {
     name: "Christopher Robin",
     imageUrl:
       "https://media.npr.org/assets/img/2011/07/13/christopherrobin_sq-0abc46b834e5e6816d208afed30befdb5fcb6dd2-s800-c85.jpg",
     imageSize: 90,
   }; 

  return (
    <>
    <Mybutton title={"Add to cart"} />
    <Mybutton title={"Find out more"} />

    <Avatar user={user}/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;


