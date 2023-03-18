import {Component} from 'react';
import {nanoid} from 'nanoid';
import PropTypes from "prop-types"


import {Container, GlobalStyle, TitleContacts, TitlePhonebook} from "./GlobalStyle.styled";

import PhonebookEditor from "./PhonebookEditor"
import Contacts from "./Contacts"
import Filter from "./Filter";

import data from "./data/contacts.json";


class App extends Component {
  state = {
    contacts: data, filter: '',
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(), name, number
    };
    !this.existName(name, number) ? this.setState({
      contacts: [contact, ...this.state.contacts]
    }) : alert('This contact already exists');
  }
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }
  changeFilter = e => {
    this.setState({filter: e.target.value})
  }
  existName = (name, number) => {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState, prevProp) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const {contacts, filter} = this.state

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (<Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <PhonebookEditor onSubmit={this.addContact}/>
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChange={this.changeFilter}/>
      <Contacts contact={filteredContacts} onDeleteContact={this.deleteContact}/>
      <GlobalStyle/>
    </Container>)
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired,
  })),
  filter: PropTypes.string,
  addContact: PropTypes.func,
  deleteContact: PropTypes.func,
  existName: PropTypes.func,
  changeFilter: PropTypes.func

}

export default App;
