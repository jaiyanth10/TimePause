import { Challenge } from './components/Challange.jsx';
import Player from './components/Player.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge difficulty="easy" time={1}/>
        <Challenge difficulty="medium" time={4}/>
      </div>
    </>
  );
}

export default App;
