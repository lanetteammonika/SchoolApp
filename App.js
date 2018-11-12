/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import Stack from './src/helper/navigation/Stack';

//Redux management
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './src/reducers/index';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, AppReducer)
let store = createStore(persistedReducer,applyMiddleware(thunk))
let persistor = persistStore(store)


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Stack/>
            </PersistGate>
        </Provider>
    );
  }
}



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import Stack from './src/helper/navigation/Stack';
//
// //Redux management
// import {Provider,Load} from 'react-redux';
// import {createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// // import AppReducer from './src/reducers/index';
// import {store, persistor} from './src/ConfigureStore';
// import { PersistGate } from 'redux-persist/integration/react'
//
//
// export default class App extends Component<Props> {
//     // store = createStore(AppReducer, applyMiddleware(thunk));
//
//     render() {
//         return (
//             <Provider store={store}>
//                 <PersistGate loading={null} persistor={persistor}>
//                     <Stack/>
//                 </PersistGate>
//             </Provider>
//         );
//
//     }
// }

