import React from 'react';
import { FaPlus } from 'react-icons/fa';

function AddListButton() {
  return (
    <div className="add-new-page__action">
      <button className="action" type="submit" title="Simpan">
        <FaPlus />
      </button>
    </div>
  );
}

export default AddListButton;
