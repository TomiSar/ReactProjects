import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;