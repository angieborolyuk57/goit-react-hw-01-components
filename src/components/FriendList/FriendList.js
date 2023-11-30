// FriendList.js
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import Friend from '../Friend/Friend';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming you have an 'id' property for each friend
      ...Friend.propTypes, // Include the Friend propTypes
    })
  ).isRequired,
};
