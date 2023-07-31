import React from 'react';
import NoteList from '../components/Item/NoteList';
import NoteInput from './Input/NoteInput.js';
import { getInitialData } from '../utils/index';
import autoBind from 'auto-bind';
import NoteSearch from './Search/NoteSearch';
 
class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: ''
    }
    autoBind(this, this.onAddNoteHandler, this.onArchiveHandler, this.onDeleteHandler, this.onSearchHandler);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
  
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date()
          }
        ]
      }
    });
  }
  
  onArchiveHandler(id){
    const notes = this.state.notes.map((note) => note.id === id ? {...note, archived : !note.archived} : note)
    this.setState({ notes });
  }

  onSearchHandler(title) {
    this.setState(() => {
      return {
        keyword : title
      }
    })
  }

  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()))
    const activeNotes = notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    });
    return (
    <React.Fragment>
      <div className="note-app__header">
        <h1>Aplikasi Catatan</h1>
        <div className="note-search">
          <NoteSearch onSearch={this.onSearchHandler} />
        </div>
      </div>
      <div className="note-app__body">
        <div className='note-input'>
          <h2>Tambah Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <div className='note-app__body'>
          <h2>Daftar Catatan</h2>
          <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} archiveClick={this.onArchiveHandler}/>
        </div>
        <div className='note-app__body'>
          <h2>Daftar Arsip</h2>
          <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} archiveClick={this.onArchiveHandler} />
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default NoteApp;