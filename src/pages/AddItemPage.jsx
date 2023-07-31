import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddInput from '../component/input/AddInput';
import { addNote } from '../utils/network-data';

function AddItemPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(Note) {
    addNote(Note);
    navigate('/');
  }

  return (
    <AddInput addNote={onAddNoteHandler} />
  );
}

export default AddItemPage;
