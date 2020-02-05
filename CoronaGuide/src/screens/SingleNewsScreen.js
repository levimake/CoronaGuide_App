import React from 'react';
import { WebView } from 'react-native-webview';

const SingleNewsScreen = ({navigation}) => {

  let  jsCode = `
    document.querySelector('#footer').style.display='none';
    document.querySelector('.header-right').style.display='none';
 `;

  return (
    <WebView
      source={{uri: navigation.getParam('url')}}
      injectedJavaScript={jsCode}
      domStorageEnabled={true}
      javaScriptEnabledAndroid={true}
      mixedContentMode={'compatibility'}
    />
  );

}

export default SingleNewsScreen;
