import ScreenContainer from "../components/Layoout/ScreenContainer";
import HeaderOne from "../components/Shared/Text/HeaderOne";
import HeaderTwo from "../components/Shared/Text/HeaderTwo";
import Paragraph from "../components/Shared/Text/Paragraph";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <HeaderOne text="Home" />
      <HeaderTwo text="Subtitle" />
      <Paragraph text="Dummy Paragrahp" />
    </ScreenContainer>
  )
}

