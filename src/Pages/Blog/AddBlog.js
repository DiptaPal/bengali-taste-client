import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import TextEditor from './TextEditor';

const AddBlog = () => {
  const [value, setValue] = useState("");

  const getValue = (value) => {
    setValue(value);
  };

  const handleBlogPost = (text) =>{
    if(text.length === 0){
      console.log('No');
    }
  }

  return (
    // <div>
    //   <TextEditor initialValue="" getValue={getValue}></TextEditor>
      
    //   <button onClick={() => handleBlogPost(value)} className='mt-10 flex items-center gap-4 px-12 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl'>Post Blog</button>
    // </div>
    <div>
      
    </div>
  );
};

export default AddBlog;