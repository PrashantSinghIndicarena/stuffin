// BlogForm.js

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    heading: '',
    date: '',
    author: '',
    subheading: '',
    description: '', // Description will be in HTML format
    author_image: '',
    author_bio: '',
    category: '',
  });

  const handleRichTextChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleImageUpload = (acceptedFiles) => {
    // Handle image upload here and set the image URL in the formData
    const uploadedImage = acceptedFiles[0];
    // Use FileReader to read the uploaded image and get its URL
    const reader = new FileReader();
    reader.onload = () => {
      const imageURL = reader.result;
      setFormData({ ...formData, image: imageURL });
    };
    reader.readAsDataURL(uploadedImage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the action parameter to indicate adding a blog
    formData.action = 'addBlog';

    // Send a POST request to your API to post the data to the database.
    fetch('https://stuffin.in/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // Use x-www-form-urlencoded for PHP
      },
      body: new URLSearchParams(formData).toString(), // Convert data to x-www-form-urlencoded format
    })
      .then((response) => {
        if (response.status === 201) {
          console.log('Blog posted successfully');
          // You can add a success message or redirect the user as needed.
        } else if (response.status === 500) {
          console.log('Internal Server Error');
          // Handle errors or display an error message to the user.
        } else {
          console.log('Unknown error');
          // Handle other error cases
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle fetch errors
      });
  };

  return (
    <div>
      <h2>Add a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <Dropzone onDrop={handleImageUpload}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop an image here, or click to select an image</p>
            </div>
          )}
        </Dropzone>
        <label>Heading:</label>
        <input
          type="text"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
        />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label>Subheading:</label>
        <input
          type="text"
          name="subheading"
          value={formData.subheading}
          onChange={handleChange}
        />
        <label>Description:</label>
        <ReactQuill value={formData.description} onChange={handleRichTextChange} />
        <label>Author Image URL:</label>
        <input
          type="text"
          name="author_image"
          value={formData.author_image}
          onChange={handleChange}
        />
        <label>Author Bio:</label>
        <textarea
          name="author_bio"
          value={formData.author_bio}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;


// import React, { useState } from 'react';

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     image: '',
//     heading: '',
//     date: '',
//     author: '',
//     subheading: '',
//     description: '',
//     author_image: '',
//     author_bio: '',
//     category: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Add the action parameter to indicate adding a blog
//     formData.action = 'addBlog';
  
//     // Send a POST request to your API to post the data to the database.
//     fetch('https://stuffin.in/api.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded', // Use x-www-form-urlencoded for PHP
//       },
//       body: new URLSearchParams(formData).toString(), // Convert data to x-www-form-urlencoded format
//     })
//       .then((response) => {
//         if (response.status === 201) {
//           console.log('Blog posted successfully');
//           // You can add a success message or redirect the user as needed.
//         } else if (response.status === 500) {
//           console.log('Internal Server Error');
//           // Handle errors or display an error message to the user.
//         } else {
//           console.log('Unknown error');
//           // Handle other error cases
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle fetch errors
//       });
//   };
  

//   return (
//     <div>
//       <h2>Add a New Blog Post</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Image URL:</label>
//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <label>Heading:</label>
//         <input
//           type="text"
//           name="heading"
//           value={formData.heading}
//           onChange={handleChange}
//         />
//         <label>Date:</label>
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//         />
//         <label>Author:</label>
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//         />

//         <label>Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//         />
//         <label>Subheading:</label>
//         <input
//           type="text"
//           name="subheading"
//           value={formData.subheading}
//           onChange={handleChange}
//         />
//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//         <label>Author Image URL:</label>
//         <input
//           type="text"
//           name="author_image"
//           value={formData.author_image}
//           onChange={handleChange}
//         />
//         <label>Author Bio:</label>
//         <textarea
//           name="author_bio"
//           value={formData.author_bio}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BlogForm;
