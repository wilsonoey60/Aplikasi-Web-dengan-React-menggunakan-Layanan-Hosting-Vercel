import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="action" type="button" title="Hapus" onClick={() => onDelete(id)}>
      <FaTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
