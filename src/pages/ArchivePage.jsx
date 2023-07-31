import React from 'react';
import List from '../component/item/List';
import { getArchivedNotes } from '../utils/network-data';
import SearchInput from '../component/input/SearchInput';
import { LocaleConsumer } from '../contexts/LocaleContext';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: '',
    };
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => ({
      notes: data,
    }));
  }

  onSearch = (title) => {
    this.setState(() => ({
      keyword: title,
    }));
  };

  render() {
    const notes = this.state.notes.filter(
      (note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()),
    );
    const archivedNote = notes.filter((note) => note.archived === true);
    return (
      <LocaleConsumer>
        {
          ({ locale }) => (
            <main>
              <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
              <div className="search-bar">
                <SearchInput keywordChange={this.onSearch} />
              </div>
              {
                archivedNote.length > 0
                  ? <List notes={archivedNote} />
                  : (
                    <section className="notes-list-empty">
                      <p>{locale === 'id' ? 'Tidak ada catatan arsip' : 'Archive note is empty'}</p>
                    </section>
                  )
              }
            </main>
          )
        }
      </LocaleConsumer>

    );
  }
}

export default ArchivePage;
