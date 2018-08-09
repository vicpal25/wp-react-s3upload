import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import S3Upload from './S3';

class App extends Component {

  addToS3() {
    console.log('added to s3');
  }

  render() {
    return (
      <div className="App">
    
    <div className="file-upload">
        
        <button className="file-upload-btn" type="button" onClick={() => this.addToS3() }>Add Image</button>

        <div className="image-upload-wrap">
          <input className="file-upload-input" type='file' accept="image/*" />
          <div className="drag-text">
            <h3>Drag and drop a file or select add Image</h3>
          </div>
        </div>
        <div className="file-upload-content">
          <img className="file-upload-image" src="#" alt="your image" />
          <div className="image-title-wrap">
            <button type="button" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
