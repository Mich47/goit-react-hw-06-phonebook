import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { persistStore } from 'redux-persist';
import { rootReducer } from './reducer';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// export let persistor = persistStore(store);
