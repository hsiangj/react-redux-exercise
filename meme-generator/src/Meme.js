import './Meme.css';
import PropTypes from "prop-types";

function Meme({topText, url, bottomText, id, deleteMeme}) {
  console.debug('Meme')

  function handleDelete() {
    deleteMeme(id)
  }

  return (
    <div className='Meme'>
      <div className='container'>
        <span className='topText'>{topText}</span>
        <img src={url} alt="a meme"/>
        <span className='bottomText'>{bottomText}</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>

    
  )
}

Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};


export default Meme;