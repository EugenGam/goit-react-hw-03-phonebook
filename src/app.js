import React, { Component } from 'react';
import Contact from './Components/Contact';
import Filter from './Components/Filter';
import InputForm from './Components/InputForm';
import Wrapper from './Components/Wrapper';
import { v1 as uuidv1 } from 'uuid';
import './sass/main.scss';

let key = '';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

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
    if (localContacts != null) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate() {
    localStorage.clear();
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <InputForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <Contact
          deleteCon={this.handleDelete}
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </Wrapper>
    );
  }
}

export default App;
