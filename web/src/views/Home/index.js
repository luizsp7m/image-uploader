import React from 'react';

import { Container, Wrapper } from './styles';

import Dropzone from '../../components/Dropzone';

function Home() {
  return (
    <Container>
      <Wrapper>
        <h3>Upload your image</h3>
        <span>File should be JPEG, PNG, SVG...</span>
        <Dropzone />
      </Wrapper>
    </Container>
  );
}

export default Home;