import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { instance } from "../../utils/axios";
import { Button } from "antd";
import u from "./style.module.scss";

const getUsers = () => instance.get("/users?page=1");

export const Users = () => {
  const { data } = useQuery(["users"], getUsers);

  return (
    <div className={u.users}>
      {data?.data?.data?.map((user) => (
        <div className={u.user} key={user.id}>
          <h3>{user?.id}</h3>
          <p>{user?.email}</p>
          <h2>{user?.first_name}</h2>
          <h2>{user?.last_name}</h2>
          <img src={user?.avatar} alt="" />
          <br />
          <Link to={`/users/${user?.id}`} key={user?.id}>
            <Button type="primary">Detail</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
