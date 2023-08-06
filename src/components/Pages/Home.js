import * as React from 'react';
import Box from '@mui/material/Box';
import {useState} from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';


//  export const Home = () =>  {
//   const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
// 	};
//   const handleButtonClicked =() =>{

//   }


//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//     <div className="App">
//       <form>
//         <div className="input-group">
//           <label htmlFor="name">City</label>
//           <input className="rounded-input"type="text" id="name" value={inputValue} onChange={handleChange}/>
//         </div>
       
//         <button type="submit" onClick={this.handleButtonClicked.bind(this)} activeClassName="active"className="submit-btn rounded-input">
//           Submit
//         </button>
//       </form>
//     </div>
//     </Box>
//   );
// }

export const Home =()=> {
  
  const  [searchQ, setSQ] =  useState('');
  const [click, setClick] = useState(false);
  const  handleChange = (event) => {
    setSQ(event.target.value);
  	};

  const handleButtonClicked = () => setClick(!click);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    navigate(`/${searchQ}`);
  }

  
    return  (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
      <form>
        <h5>City</h5>
        <input className="rounded-input" id="name"type="text" value={searchQ} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit} className="submit-btn rounded-input">
          Submit
        </button>
      </form>
      </div>
    </Box>
    );
  }

