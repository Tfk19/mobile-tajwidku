import { Header } from "../components";
import { WebView } from "react-native-webview";
import { Spinner } from "@gluestack-ui/themed";
import React from 'react';
import { useRoute } from '@react-navigation/native';


const Web = () => {
  const route = useRoute();
  if (!route || !route.params || !route.params.link) {
    // Handle the case where params are not available
    return (
      <>
        <Header title={'Read'} withBack={true} />
        <Spinner size={'large'} color={'$black'} />
      </>
    );
  }
  return (
    <>
      <Header title={"Read"} withBack={true} />
      <WebView
        source={{ uri: route.params.link }}
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
