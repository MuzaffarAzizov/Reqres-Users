import c from "./style.module.scss";
import { instance } from "../../utils/axios";
import { useMutation } from "@tanstack/react-query";

export const CreateUser = () => {
  const { mutate } = useMutation(
    (userData) => instance.post("/users", userData),
    {
      onSuccess: (data) => {
        console.log("New user created!", data);
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    mutate(userData);
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">
          {mutate.isLoading ? "Creating..." : "Create User"}
        </button>
        {/* {error && <div>Error: {error.message}</div>} */}
      </form>
    </div>
  );
};
