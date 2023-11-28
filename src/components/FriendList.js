import react from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList ({friends}) {

    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
  <li key={friend.id} className={css.item}> 
    <span className={css.status}
    style={{backgroundColor: friend.isOnline ? 'green' : 'red'}}
    ></span>
    <img
     src={friend.avatar}
     alt="User avatar"
     width="48"
     className={css.avatar}
     />
     <p className={css.name}>{friend.name}</p>
  </li>
 ))}
</ul>
    )
}

FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        }))
 
};