import React from 'react';
import Header from './Header.png';
import Experience from './Experience.png';
import MyFriends from './MyFriends.png';
import Wallet from './Wallet.png';
import ProfileStyles from './Profile.module.scss';
const styles = {...ProfileStyles};

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img src={Header} alt="Header" />
      </div>
      <div className={styles.experience}>
        <img src={Experience} alt="Experience" />
      </div>
      <div className={styles.myFriends}>
        <img src={MyFriends} alt="MyFriends" />
      </div>
      <div className={styles.wallet}>
        <img src={Wallet} alt="Wallet" />
      </div>
    </div>
  )
}

export default Profile
