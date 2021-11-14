import actionTypes from "../actions/actionTypes";
import allUsersReducer from "./allUsersReducer"


describe("Given an allUsersReducer", () => {
  describe("When it receives an empty list of users and a lod action with a number of users", () => {
    test("Then it should return a new list with the users received", () => {
      const initialList = [];
      const allUsersList = [
        { name: "Rodi",
          username: "Rodipet",
          password: "holalapa",
          friends: [],
          enemies: [],
          photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.vogue.es%2Fphotos%2F5cc75252a6e117c22654cd9b%2Fmaster%2Fw_1600%252Cc_limit%2Fmulan_remake_2531.jpg&imgrefurl=https%3A%2F%2Fwww.vogue.es%2Fliving%2Farticulos%2Fliu-yifei-actriz-mulan-remake%2F32096&tbnid=xvbFTKhd5XJPlM&vet=12ahUKEwjD_MP225j0AhUrDWMBHXg3A0UQMygJegUIARDgAQ..i&docid=R5Kkvwzr950ZWM&w=1600&h=1067&q=mulan%20images&ved=2ahUKEwjD_MP225j0AhUrDWMBHXg3A0UQMygJegUIARDgAQ", 
          bio: "I have a mission",
        },
        {
          name: "Mari",
          username: "Sandi",
          password: "Bambi",
          friends: [],
          enemies: [],
          photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplayfm.cl%2Fplayfm%2Fsite%2Fartic%2F20181001%2Fimag%2Ffoto_0000000220181001120610.jpg&imgrefurl=https%3A%2F%2Fplayfm.cl%2Ftendencias%2Fno-lo-esperabamos-la-verdadera-y-macabra-historia-de-mulan-que-te&tbnid=jj2UT_vls7RTIM&vet=12ahUKEwj1v9iJ3Jj0AhUIuxQKHfgjDVkQxiAoAnoECAAQHQ..i&docid=lf64RKSuk5cbgM&w=580&h=360&itg=1&q=mulan%20images&ved=2ahUKEwj1v9iJ3Jj0AhUIuxQKHfgjDVkQxiAoAnoECAAQHQ",
          bio: "I have a plan",
        },
      ];
      const action = {
        type: actionTypes.loadUsers,
        allUsers: allUsersList,
      };

      const newList = allUsersReducer(initialList, action); 

      expect(newList).toEqual(allUsersList);
    })
  })
})