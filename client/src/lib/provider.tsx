"use client";
import React from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
/* Core */
import { Provider } from "react-redux";

/* Instruments */

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  let persist = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        {children}
      </PersistGate>
    </Provider>
  );
}
