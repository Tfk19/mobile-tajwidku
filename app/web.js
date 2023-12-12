import { useLocalSearchParams } from "expo-router";
import { Header } from "../components";
import { WebView } from "react-native-webview";
import { Spinner } from "@gluestack-ui/themed";

const Web = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"Read"} withBack={true} />
      <WebView
        source={{ uri: "https://www.youtube.com/embed/7GqE0sBhV7o" }}
        startInLoadingState={true}
        renderLoading={() => <Spinner size={"large"} color={"$black"} />}
        style={{ alignSelf: 'stretch' }}
        allowsFullscreenVideo={true}
        scalesPageToFit={true}
        
      />
    </>
  );
};

export default Web;
