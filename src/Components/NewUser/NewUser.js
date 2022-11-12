import React from "react";
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
    <React.Fragment>
      <Card>
        <NewUserForm onCollectUser={collectUserHandler} />
      </Card>
    </React.Fragment>
  );
};

export default NewUser;
