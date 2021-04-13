
import './App.css';
import { ChatEngine} from "react-chat-engine";
import ChatFeed from  './components/ChatFeed';
import LoginForm from  './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
    <ChatEngine
        height ="100vh"
        projectID="eec1a067-ce6f-41de-bf2b-f09b44a68884"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
    />
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
