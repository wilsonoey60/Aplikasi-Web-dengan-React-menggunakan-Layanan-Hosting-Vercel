import React from 'react';
import PropTypes from 'prop-types';
import ArchivedButton from './DetailGroup/ArchivedButton';
import DeleteButton from './DetailGroup/DeleteButton';

function DetailGroup({ id, onDelete, onArchived }) {
  return (
    <div className="detail-page__action">
      <ArchivedButton id={id} onArchive={onArchived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

DetailGroup.propTypes = {
  id: PropTypes.string.isRequired,
  onArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailGroup;
