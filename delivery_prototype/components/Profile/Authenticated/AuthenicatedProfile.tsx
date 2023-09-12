import { Text } from "react-native"
import BaseCard from "../../Shared/Card/BaseCard"
import ProfileHeader from "./ProfileHeader"

const AuthenticatedProfile = ({ user }: { user: any }) => {
  return (
    <>
      <ProfileHeader {...user} />
      <BaseCard >
        <Text>Hello</Text>
      </BaseCard>
    </>

  )
}

export default AuthenticatedProfile
