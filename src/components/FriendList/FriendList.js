import { FriendListItem } from './FriendListItem';
import s from './FriendList.module.css';
export function FriendList({ friends, children }) {
  return (
    <ul className={s.friendList}>
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
