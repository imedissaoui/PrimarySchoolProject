import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      URL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:3000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div align="centre">
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" placeholder="اسم الملف"   />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="اسم الملف" />
        </div>
        <br />
        <div>
          <button>رفع ملف</button>
        </div>
     
      </form>
    );
  }
}

export default Main;