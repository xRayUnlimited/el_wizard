import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getUsersByTag } from '../actions/likeUsers';
import UserCard from './UserCard';

class TagList extends React.Component {
  componentDidMount() {
    //const dispatch = this.props;
    //const tag = this.props.match.params.tag
    const { dispatch, match: { params: { tag } }} = this.props;
    dispatch(getUsersByTag(tag))
  }

  render() {
    const { users } = this.props;
    return (
      <Card.Group itemsPerRow={3}>
        { users.map( user => 
            <UserCard key={user.id} user={user} />
          )
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.likedUsers }
}

export default connect(mapStateToProps)(TagList)