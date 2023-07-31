import React from 'react';
import PropTypes from 'prop-types';
import DetailAction from '../button/DetailGroup';
import { showFormattedDate } from '../../utils';

function DetailItem({
  id, title, body, createdAt, ArchiveClick, DeleteClick,
}) {
  return (
    <main>
      <div className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="detail-page__body">{body}</p>
        <DetailAction id={id} onArchived={ArchiveClick} onDelete={DeleteClick} />
      </div>
    </main>
  );
}

DetailItem.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ArchiveClick: PropTypes.func.isRequired,
  DeleteClick: PropTypes.func.isRequired,
};

export default DetailItem;
