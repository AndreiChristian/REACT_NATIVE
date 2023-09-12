import ScreenContainer from "../components/Layoout/ScreenContainer";
import AuthenticatedProfile from "../components/Profile/Authenticated/AuthenicatedProfile";
import GuestProfile from "../components/Profile/Guest/GuestProfile";

const user = {
  name: "Andrei Andrei Christian ",
  email: "andreichristiannetoiu@gmail.com",
  phoneNumber: "0722576199"
}

const authenticated = false

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <ScreenContainer >
      {authenticated ?
        <AuthenticatedProfile user={user} />
        :
        <GuestProfile navigation={navigation} />
      }
    </ScreenContainer>
  )
}

