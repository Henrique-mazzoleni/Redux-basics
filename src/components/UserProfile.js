import React from "react";
import { useSelector } from "react-redux";

import styles from './UserProfile.module.css';

const UserProfile = () => {
    const {username} = useSelector(state => state.auth)

    return <div className={styles.profile}>
        <h2>Welcome, {username}</h2>
        <p>This is your profile</p>
    </div>
}

export default UserProfile;