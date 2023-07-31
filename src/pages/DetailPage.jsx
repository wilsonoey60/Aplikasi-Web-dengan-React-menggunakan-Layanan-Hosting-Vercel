import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailItem from '../component/item/DetailItem';
import {
  archiveNote, deleteNote, getNote, unarchiveNote,
} from '../utils/network-data';
import NotFoundPage from './NotFoundPage';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setIsLoading(false);
    });
  }, [id]);

  async function onDeleteHandler() {
    await deleteNote(id);
    navigate('/');
  }

  async function onArchiveHandler() {
    await archiveNote(id);
    navigate('/');
  }

  async function onUnarchiveHandler() {
    await unarchiveNote(id);
    navigate('/archives');
  }

  function switchState() {
    if (note.archived) {
      return onUnarchiveHandler;
    }
    return onArchiveHandler;
  }

  if (note === null) {
    return (<NotFoundPage />);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <DetailItem
      ArchiveClick={switchState}
      DeleteClick={onDeleteHandler}
      {...note}
    />
  );
}

export default DetailPage;
