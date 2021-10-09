// import PropTypes from 'prop-types';
import './FriendList.scss';
export function FriendListItem({ id, status, avatar, name }) {
  return (
    <li class="item" key={id}>
      {status ? (
        <span className="statusOnline"></span>
      ) : (
        <span className="statusOffline"></span>
      )}{' '}
      <img class="friend-avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
// FriendListItem.propTypes = {
//   // key: PropTypes.number.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   status: PropTypes.bool.isRequired,
// };
