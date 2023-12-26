import './friend-list.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span
        className={isOnline ? 'status-on' : 'status-off'}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
