import React from 'react';
import List from '../component/item/List';
import SearchInput from '../component/input/SearchInput';
import RouteToAddButton from '../component/button/RouteToAddButton';
import { getActiveNotes } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: '',
    };
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

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
    const activeNote = notes.filter((note) => note.archived === false);
    return (
      <LocaleConsumer>
        {
          ({ locale }) => (
            <main>
              <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
              <div className="search-bar">
                <SearchInput keywordChange={this.onSearch} />
              </div>
              {
                activeNote.length > 0
                  ? <List notes={activeNote} />
                  : (
                    <section className="notes-list-empty">
                      <p>{locale === 'id' ? 'Tidak ada catatan aktif' : 'Active note is empty'}</p>
                    </section>
                  )
              }
              <div className="homepage__action">
                <RouteToAddButton />
              </div>
            </main>
          )
        }
      </LocaleConsumer>
    );
  }
}

export default HomePage;
