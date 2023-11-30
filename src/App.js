// App.js

import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import { user, stats, friends, transactions } from './data';


export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics 
        title="Upload stats" 
        stats={stats} 
      />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}

