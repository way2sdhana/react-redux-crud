import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line
import { setData, addData, updateData, deleteData } from './redux/dataSlice';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const datas = useSelector((state) => state.datas);
  const dispatch = useDispatch();

  // const fetchItems = async () => {
  //   try {
  //     dispatch(setData(data));
  //   } catch (err) {
  //     setMessage('Error fetching items..!');
  //   }
  // };

  // useEffect(() => {
  //   fetchItems();
  // }, [dispatch]);

  const handleAdd = async () => {
    if (name.trim() === '' || description.trim() === '') {
      setMessage('Name and description are required!');
    } else {
      dispatch(addData({name, description}));
      setMessage('Item created successfully..!');
      // fetchItems();
      setName('');setDescription('');
    }
  };

  const handleUpdate = async (name) => {
    if (name.trim() === '' || description.trim() === '') {
      setMessage('Name and description are required!');
    } else {
      setMessage('Item updated successfully..!');
      dispatch(updateData({name, description}));
      // fetchItems();
      setName('');setDescription('');
    }
  };

  const handleDelete = async (name) => {
    dispatch(deleteData(name));
    setMessage('Item deleted successfully..!');
    // fetchItems();
  };

  /*
[
  { id : 1, name : "HTML5", description : "HyperText Markup Language v5" },
  { id : 2, name : "CSS3", description : "Cascading Style Sheet v3" },
  { id : 3, name : "JS", description : "Javascript" },
  { id : 4, name : "SQL", description : "Structured Query Language" },
  { id : 5, name : "VB6.0", description : "Visual Basics v6.0" }
]
  */

  return (
    <div style={{margin:'20px'}}>
      <div>
        <h1>CRUD App</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{marginLeft:'10px', marginRight:'10px'}}
        />
        <button onClick={handleAdd}>Create</button>
      </div>
      <div>
        {message && <h4 style={{color:'brown', margin:'0px'}}>('{message}')</h4>}
        <ol style={{listStyleType:'none', display:'inline-block', padding:'0px'}}>
          {datas.map((item, index) => (
            <li key={index} style={{marginBottom:'10px'}}>
              {index + 1}. <strong>{item.name}</strong>: {item.description}
              <br />
              <button style={{marginLeft:'15px', marginTop:'3px'}} onClick={() => handleUpdate(item.name)}>Update</button>
              <button style={{marginLeft:'10px'}} onClick={() => handleDelete(item.name)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
      <hr style={{width:'90%'}} />
    </div>
  );
};

export default App;
