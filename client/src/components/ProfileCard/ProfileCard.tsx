import { useEffect, useState } from "react";
import styles from "./ProfileCard.module.scss";
import type { AxiosResponse } from "axios";
import axiosInstance from "../../axios/axiosInstance";
import { Link } from "react-router-dom";

interface User {
  id: string;
  username: string;
  email: string;
  profileImg: string;
}
const ProfileCard = () => {
  const [User, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const user: AxiosResponse<User> = await axiosInstance.get(
      "/api/user/getuser"
    );

    if (user) {
      setUser(user.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Link to="/profile" className={styles.profileCard}>
      <div className={styles.cardImage}>
        <img src="#" alt="" className={styles.image} />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardUsername}>{User?.username}</p>
        <p className={styles.cardEmail}>{User?.email}</p>
      </div>
    </Link>
  );
};

export default ProfileCard;
