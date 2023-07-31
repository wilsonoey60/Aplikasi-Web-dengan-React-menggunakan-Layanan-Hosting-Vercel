import React from 'react';
import PropTypes from 'prop-types';
import { FaArchive } from 'react-icons/fa';

function ArchivedButton({ id, archived, onArchive }) {
  if (archived) {
    return (
      <button className="action" type="button" title="Arsipkan" onClick={() => onArchive(id)}>
        <FaArchive />
      </button>
    );
  }
  return (
    <button className="action" type="button" title="Arsipkan" onClick={() => onArchive(id)}>
      <FaArchive />
    </button>
  );
}

ArchivedButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchivedButton;
