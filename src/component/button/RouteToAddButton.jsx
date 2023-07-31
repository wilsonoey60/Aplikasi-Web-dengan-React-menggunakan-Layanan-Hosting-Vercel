import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function RouteToAddButton() {
  return (
    <div className="homepage__action">
      <Link to="/notes/new">
        <button className="action" type="button" title="Tambah">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

export default RouteToAddButton;
