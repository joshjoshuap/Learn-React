import Card from "../UI/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={style.user_list}>
      <ul>
        {/* loop user list */}
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age}) 
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
