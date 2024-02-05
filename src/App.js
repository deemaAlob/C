import React, { useState } from 'react';
import Dropzone from 'react-dropzone';



const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Define email regex

const App = () => {
  const [fileName, setFileName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleFileUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFileName(file.name);
  };

  const handleEmailChange = (e) => {
    const newText = e.target.value;
    setEmail(newText);
    setError('');
  };

  const handleSubmit = async () => {
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Placeholder for server-side logic:
    try {
      console.log('File:', fileName);
      console.log('Email:', email);

      // Send file and email to server here
      setError('Submission successful!');
    } catch (error) {
      console.error(error);
      setError('An error occurred during submission. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      {/* <img src={require('./assets/BG.gif')} alt="Background" /> */}

      <div style={styles.content}>
        <img src={require('./assets/Center3.png')} style={styles.centerImage} />
        <h1 style={styles.CenterText}>
          Let's work together to make your <span style={styles.CenterText2}>CV</span> stand out!
        </h1>
        <img src={require('./assets/CV-LOGO.png')} style={styles.logoImage} />

        <label htmlFor="email" style={styles.EmailText}>Email: </label>
        <input
          type="email"
          id="email"
          style={styles.emailInput}
          placeholder="Enter your email"
          onChange={handleEmailChange}
          value={email}
        />
        {error && <p style={styles.error}>{error}</p>}

        <Dropzone onDrop={handleFileUpload}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p style={styles.uploadText}>
                Drag 'n' drop your CV here, or click <u style={styles.underline}><span style={{color: '#1cb43c'}}>Select</span></u>
              </p>
              </div>
            </section>
          )}
        </Dropzone>

        {fileName && <p style={styles.fileNameText}>{fileName}</p>}

        <button style={styles.SubmitButton} onClick={handleSubmit}>
          <span style={styles.SubmitButtonText}>Submit</span>
        </button>
        
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1, /* Ensure background is behind everything */
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  content: {
    width: '500px',
    padding: '20px',
    textAlign: 'center',
  },
  centerImage: {
    width: '350px',
    marginBottom: '20px',
  },
  logoImage: {
    position: 'absolute', // Fix logo at top-left corner
    top: 0,
    left: 0,
    width: '100px', // Adjust width as needed
    height: '100px',
  },
  SubmitButton: {
    width: '100px',
    height: '50px',
    borderRadius: '10%', // Make the button round
    backgroundColor: 'green', // Set the background color to green
    border: 'none', // Remove default border
    color: 'white', // Set text color to white
    fontSize: '16px', // Adjust font size if desired
    fontWeight: 'bold', // Make the text bold
    cursor: 'pointer', // Set cursor to pointer on hover
    transition: 'all 0.2s ease-in-out', // Add smooth hover effect
    '&:hover': {
      opacity: 0.8, // Change opacity on hover
  },
  uploadText: {
    color: 'green', // Customize text color (e.g., 'blue', '#ff00ff')
    textAlign: 'center', // Optionally center align if desired
    marginBottom: '10px', // Optional spacing adjustment
  },
  underline: {
    textDecoration: 'underline', // Set underline style
    cursor: 'pointer', // Add pointer cursor for interactivity
    color: 'inherit', // Inherit text color from parent
  },
},
};
export default App;