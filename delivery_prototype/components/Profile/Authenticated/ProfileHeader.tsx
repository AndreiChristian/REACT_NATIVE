import { StyleSheet, Text, View } from "react-native"
import HighlightCard from "../../Shared/Card/HighlightCard"
import Colors from "../../../constants/Colors"

interface ProfileHeaderProps {
  name: string,
  email: string,
  phoneNumber: string
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, email, phoneNumber }) => {
  return (
    <HighlightCard>
      <View style={styles.container} >
        <Text style={styles.title} >{name}</Text>
        <Text style={styles.subtitle}>{email}</Text>
        <Text style={styles.subtitle}>{phoneNumber}</Text>
      </View>
    </HighlightCard>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
  title: {
    color: Colors.primaryText,
    fontSize: 20,
    fontWeight: "bold"
  },
  subtitle: {
    color: Colors.primaryText,
    fontSize: 15,
  }
})

export default ProfileHeader
