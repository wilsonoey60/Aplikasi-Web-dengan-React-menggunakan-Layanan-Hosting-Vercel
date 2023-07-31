import React from 'react';
import autoBind from 'auto-bind';
     
class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      limit: 50
    }
    
    autoBind(this, this.onTitleChangeEventHandler, this.onBodyChangeEventHandler, this.onSubmitEventHandler);
  }
  
  onTitleChangeEventHandler(event) {
    if(event.target.value.length <= 50){
      this.setState(() => {
        return {
            title: event.target.value.slice(0, this.state.maxLength)
        }
    })
    } else {
      window.alert("Title shouldn't exceed 50 characters")
    }

  }
  
  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
   });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title !== '' && this.state.body !== '') {
      this.props.addNote(this.state);
      this.setState(() => {
        return {
          title : '',
          body : '',
          limit: 50
        }
      });
    } else {
      window.alert("Title or description is empty");
    }
  }
  
  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <p className='note-input__title__char-limit'>Sisa karakter: {this.state.limit - this.state.title.length}</p>
        <input class="note-input__title" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea class="note-input__body" type="text" placeholder="Description" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Buat</button>
      </form>
    )
  }
}
 
export default NoteInput;