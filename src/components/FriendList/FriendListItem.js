import './FriendList.scss';
export function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
