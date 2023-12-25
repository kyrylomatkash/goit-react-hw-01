// Імпорт
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  const Friends = friends.map(({ id, avatar, name, isOnline }) => (
    <ul className="friend-list" key={id}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
    </ul>
  ));

  return <section className="friends">{Friends}</section>;
};
// Експорт
export default FriendList;
