import React, { Component } from 'react';
import { GooglePlacesAutoComplete } from 'react-native-google-places-autocomplete';

import { Platform } from 'react-native';

export default class Search extends Component {
  state = {
    searchFocused: false,
  }

  render() {

    const { searchFocused } = this.props;
    const { onLocationSelected } = this.props;

    return <GooglePlacesAutoComplete
        placeholder="Para onde ?"
        placeholderTextColor="333"
        onPress={onLocationSelected}
        query={{
            key:'AIzaSyBDS8x1Bm0u_qwW5aIWg7TR9VTsAUAKQLE',
            language: 'pt'
        }} 
        textInputProps={{
            onFocus: () => { this.setState({ searchFocused: true }) },
            onBlur: () => { this.setState({ searchFocused: false }) },
            autoCapitalize: "none",
            autoCorrect: false
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            top: Platform.select({ android: 40 }),
            width: "100%"
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 54,
            marginHorizontal: 20,
            borderTopWidth: 1,
            borderBottomWidth: 0
          },
          textInput: {
            height: 54,
            margin: 0,
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#DDD',
            fontSize: 18
          },
          listView: {
            borderWidth: 1,
            borderColor: '#DDD',
            backgroundColor: '#FFF',
            marginHorizontal: 20,
            elevation: 5,
            marginTop: 10
          },
          description: {
            fontSize: 16
          },
          row: {
            padding: 20,
            height: 58
          }
        }}
    />;
  }
}
