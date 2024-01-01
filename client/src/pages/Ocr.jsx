import { useState, useRef } from 'react';
import axios from 'axios';
import { Header, Grid, Button, Icon, Message, Loader } from 'semantic-ui-react';

const Ocr = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [textOcr, setTextOcr] = useState(null);
  const [load, setLoad] = useState(false);
  const [ setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setLoad(true);

    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);

    axios.post('/api/ocr', formData)
      .then((res) => {
        setTextOcr(res.data.text);
        setImgSrc(URL.createObjectURL(fileInputRef.current.files[0]));
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  return (
    <>
      <center>
        <Header style={{ margin: 40, fontSize: 50, fontFamily: 'roboto' }} size='huge'>
          OCR Upload Page
        </Header>
      </center>

      <Grid divided>
        <Grid.Column style={{ width: '50%' }} key={0}>
          <center>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ margin: 20, display: 'none' }}
              ref={fileInputRef}
            />
            <Button
              size='big'
              onClick={() => fileInputRef.current.click()}
              style={{ margin: 20 }}
              icon
              labelPosition='left'
              inverted color='blue'
            >
              <Icon name='upload' />
              Choose Image
            </Button>

            <Button
              size='big'
              onClick={handleUpload}
              style={{ margin: 20 }}
              icon
              labelPosition='left'
              inverted color='green'
            >
              <Icon name='cloud upload' />
              Upload and Extract Text
            </Button>
          </center>
        </Grid.Column>

        <Grid.Column style={{ width: '50%' }} key={1}>
          {load ? (
            <Loader style={{ marginTop: 120 }} active inline='centered' size='big'>
              Loading...
            </Loader>
          ) : imgSrc ? (
            <>
              <Header style={{ margin: 10, fontFamily: 'roboto' }} size='large'>
                Result
              </Header>
              <img style={{ marginLeft: 10, height: '50%' }} alt="captured" src={imgSrc} />
              <Message
                size='massive'
                color='orange'
                header={textOcr}
                content=""
                style={{ margin: 15 }}
              />
            </>
          ) : (
            <Header style={{ margin: 10, fontFamily: 'roboto' }} size='large'>
              No data preview
            </Header>
          )}
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Ocr;
