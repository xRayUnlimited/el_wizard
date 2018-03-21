import React from 'react';
import {
  Form,
  Grid,
  Image,
  Container,
  Divider,
  Header,
  Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = { 
    editing: false, 
    formValues: { name: '', email: '', gamertag: '' },
  }

  componentDidMount() {
    const { user: { name, email, gamertag }} = this.props
    this.setState({ formValues: { name, email, gamertag } })
  }

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing }
    })
  }

  handleChange = (e) => {
  }

  handleSubmit = (e) => {
  }

  profileView = () => {
  }

  editView = () => {
  }

  render() {
  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Profile)