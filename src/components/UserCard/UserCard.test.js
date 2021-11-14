import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/store";
import UserCard from "./UserCard";

describe("Given a UserCard", () => {
  describe("When it receives an user", () => {
    test("Then it should render a card", () => {
      const user = {
        name: "Mari",
        username: "Sandi",
        password: "Bambi",
        friends: [],
        enemies: [],
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplayfm.cl%2Fplayfm%2Fsite%2Fartic%2F20181001%2Fimag%2Ffoto_0000000220181001120610.jpg&imgrefurl=https%3A%2F%2Fplayfm.cl%2Ftendencias%2Fno-lo-esperabamos-la-verdadera-y-macabra-historia-de-mulan-que-te&tbnid=jj2UT_vls7RTIM&vet=12ahUKEwj1v9iJ3Jj0AhUIuxQKHfgjDVkQxiAoAnoECAAQHQ..i&docid=lf64RKSuk5cbgM&w=580&h=360&itg=1&q=mulan%20images&ved=2ahUKEwj1v9iJ3Jj0AhUIuxQKHfgjDVkQxiAoAnoECAAQHQ",
        bio: "I have a plan",
      };
      let store = configureStore();

      render(
      <Provider store={store}>  
        <UserCard user={user} />
      </Provider>  
      )

      const userCard = screen.getByTestId("user-card");

      expect(userCard).toBeInTheDocument();
    })
  })
});