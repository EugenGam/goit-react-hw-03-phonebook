import React, { Component } from 'react';
import './sass/main.scss';
import Contact from './Components/Contact';
import Filter from './Components/Filter';
import InputForm from './Components/InputForm';
import { v1 as uuidv1 } from 'uuid';
let key = '';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  handleDelete = key => {
    const newContacts = this.state.contacts.filter(el => el.id !== key);
    this.setState({ contacts: newContacts });
  };

  getKey = () => {
    return (key = uuidv1());
  };

  checkContact = (array, name) => {
    return array.find(element => element.nam === name);
  };

  handleFilter = valueToFind => {
    this.setState({ filter: valueToFind });
  };
  handleSubmit = (event, name, number) => {
    this.getKey();
    event.preventDefault();
    if (this.checkContact(this.state.contacts, name) === undefined) {
      if (name !== '' && number !== '') {
        this.setState({
          contacts: [
            ...this.state.contacts,
            { nam: name, id: key, number: number },
          ],
        });
      }
    } else return alert(name + ' is already exist!');
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: localContacts });
  }

  componentDidUpdate() {
    localStorage.clear();
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <InputForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <Contact
          deleteCon={this.handleDelete}
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
