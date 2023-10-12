"use client";
import React from "react";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

/* Core */
import { Provider } from "react-redux";
import { store } from "next/dist/build/output/store";

/* Instruments */

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  let persist = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <>{children}</>
      </PersistGate>
    </Provider>
  );
}
