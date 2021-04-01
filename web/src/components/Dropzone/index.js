import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// import { Container } from './styles';

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {

  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag & Drop your image here</p>
      }
    </div>
  );
}

export default Dropzone;