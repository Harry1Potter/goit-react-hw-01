import './App.css'
import userData from './components/data/userData.json';
import friends from './components/data/friends.json';
import transaction from './components/data/transaction.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/profile/Profile';

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