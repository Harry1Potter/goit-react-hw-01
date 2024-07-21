import './App.css'
import userData from './data/userData.json';
import friends from './data/friends.json';
import transaction from './data/transaction.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import FriendList from './FriendList/FriendList';
import Profile from './profile/Profile';

const App = () => {
  return (
    <>
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory transactions={transaction} />
      </div>
    </>
  );
};

export default App;