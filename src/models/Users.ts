import m from "mithril";

type UserType = {
  id: 1;
  firstName: "Peter";
  lastName: "Mackenzie";
};

const User = {
  list: [] as UserType[],
  loadList: async function () {
    return m
      .request<{ data: UserType[] }>({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true,
      })
      .then((results) => {
        User.list = results.data;
      });
    // TODO: make XHR call
  },
};

export default User;
