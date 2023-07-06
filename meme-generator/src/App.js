import {useSelector, useDispatch} from 'react-redux';
import NewMemeForm from './NewMemeForm';
import Meme from './Meme';

function App() {
  const memes = useSelector(store => store.memes);
  console.debug('memes are:' ,memes)
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({type: 'ADD_MEME', meme: newMeme});
 }

  function deleteMeme(id) {
    dispatch({type: 'DELETE_MEME', id})
  }

 const memesComponent = memes.map(meme => (
    <Meme 
      key={meme.id}
      id={meme.id}
      topText={meme.topText}
      url={meme.imgUrl}
      bottomText={meme.bottomText} 
      deleteMeme={() => deleteMeme(meme.id)}
    />
 ))

  return (
    <div className="App">
      
      <h1>Meme Generator</h1>
      <NewMemeForm addMeme={addMeme}/>
      <div>
      {memesComponent}
      </div>
    </div>
  );
}

export default App;
