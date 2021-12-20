import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      {isOnline ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}
      <img
        className={s.avatar}
        src={avatar}
        alt={name}
        width="48"
        height="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  key: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
