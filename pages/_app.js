import '../styles/globals.css'
import { Provider } from "react-redux";
import store, { persistor } from "./../config/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ProtectRoute from "./../src/components/Auth/ProtectRoute";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ProtectRoute>
            <Component {...pageProps} />
          </ProtectRoute>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp
