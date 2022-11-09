import Card from "../UI/Card/Card";
import NewUserForm from "./NewUserForm/NewUserForm";

const NewUser = function ({ addNewUser, users }) {
  const collectUserHandler = (newUser) => {
    const addedUser = {
      ...newUser,
      id: `u${users.length}`,
    };

    addNewUser(addedUser);
  };

  return (
    <div>
      <Card>
        <NewUserForm onCollectUser={collectUserHandler} />
      </Card>
    </div>
  );
};

export default NewUser;
