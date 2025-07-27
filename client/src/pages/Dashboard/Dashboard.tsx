import styles from "./Dashboard.module.scss";
import Header from "../../components/Header/Header";
import { useCheckToken } from "../../store/useCheckToken";

const Dashboard = () => {
  useCheckToken();
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default Dashboard;
