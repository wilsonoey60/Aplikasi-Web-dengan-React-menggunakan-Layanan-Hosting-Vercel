import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List({ notes }) {
  if (notes.length >= 0) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
            <ListItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
            />
          ))
        }
      </div>
    );
  }
}

List.propType = {
  notes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default List;
