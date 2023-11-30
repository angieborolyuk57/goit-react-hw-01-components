// Friend.js
import PropTypes from 'prop-types';
import css from './Friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
      <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
