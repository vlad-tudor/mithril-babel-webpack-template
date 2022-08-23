import m, { Component } from "mithril";
import User from "../models/Users";

const UsertList: Component = {
  oninit: User.loadList,
  view: function () {
    return m(
      ".user-list",
      User.list.map(function (user: any) {
        return m(".user-list-item", user.firstName + " " + user.lastName);
      })
    );
  },
};

export function NewUserList(): Component {
  return {
    oninit: User.loadList,
    view: () => (
      <div>
        {User.list.map((usr) => {
          return <div class="user">{usr.firstName}</div>;
        })}
      </div>
    ),
  };
}

export default UsertList;
