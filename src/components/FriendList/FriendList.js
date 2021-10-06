import { FriendListItem } from './FriendListItem';
import './FriendList.scss';
export function FriendList({ friends, children }) {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
      {children}
    </ul>
  );
}
