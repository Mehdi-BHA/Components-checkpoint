import './App.css';
import Adress from './components/profile/Adress';
import FullName from './components/profile/FullName';
import ProfilPhoto from './components/profile/ProfilPhoto';


function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <div>
      <FullName/>
      <Adress/>
      </div>
    </div>
  );
}

export default App;
