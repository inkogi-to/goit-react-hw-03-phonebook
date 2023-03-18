import {Component} from "react";
import PropTypes from "prop-types";

import {Button, FormStyle, Input, LabelForm} from "./PhonebookEditor.styled";


class PhonebookEditor extends Component {
  state = {
    name: "",
    number: "",
  }
  handelChange = (e) => {
    const {name, number, value} = e.currentTarget;
    this.setState({
      [name]: value,
      [number]: value
    });
  }
  handelSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({name: "", number: ""});
  }

  render() {
    return (
      <FormStyle onSubmit={this.handelSubmit}>
        <LabelForm htmlFor='nm'>Name</LabelForm>
        <Input
          type="text"
          name="name"
          id="nm"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete='off'
          required
          onChange={this.handelChange}
          value={this.state.name}
        />
        <LabelForm htmlFor='tl'>Number</LabelForm>
        <Input
          type="tel"
          name="number"
          id="tl"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete='off'
          required
          onChange={this.handelChange}
          value={this.state.number}
        />
        <Button type='submit'>Add contact</Button>
      </FormStyle>
    )
  }

}

PhonebookEditor.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}
export default PhonebookEditor
