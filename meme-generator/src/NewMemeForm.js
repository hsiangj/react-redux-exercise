import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewMemeForm({addMeme}) {
  console.debug('NewMemeForm')

  const DEFAULT_FORM = {
    topText: '',
    imgUrl: '',
    bottomText: ''
  }

  const [formData, setFormData] = useState(DEFAULT_FORM);

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(data => ({...data, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
    addMeme({...formData, id: uuid()});
    setFormData(DEFAULT_FORM);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor="topText">Top text: </Form.Label>
          <Form.Control
            id="topText"
            type="text"
            size="sm"
            name="topText"
            value={formData.topText}
            onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor="bottomText">Bottom text: </Form.Label>
          <Form.Control
            id="bottomText"
            type="text"
            size="sm"
            name="bottomText"
            value={formData.bottomText}
            onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-1'>
          <Form.Label htmlFor="imgUrl">Image URL: </Form.Label>
          <Form.Control
            id="imgUrl"
            type="text"
            size="sm"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}/>
        </Form.Group>
        <Button variant='outline-primary' size="sm" type='submit'>Generate</Button>
      </form>
    </div>
  )
}

export default NewMemeForm;