import React from 'react';
import PropTypes from 'prop-types';
import AddList from '../button/AddListButton';

class AddInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: '',
      createdAt: '',
      archived: false,
    };
  }

  onTitleChangeHandler = (event) => {
    this.setState(() => ({
      title: event.target.value,
    }));
  };

  onBodyChangeHandler = (event) => {
    this.setState(() => ({
      body: event.target.value,
    }));
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <main>
        <form className="add-new-page__input" onSubmit={this.onSubmitHandler}>
          <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeHandler} />
          <textarea className="add-new-page__input__body" placeholder="Sebenarnya saya adalah ..." value={this.state.body} onChange={this.onBodyChangeHandler} />
          <AddList />
        </form>
      </main>

    );
  }
}

AddInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddInput;
