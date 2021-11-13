import { authActions } from "../Store/auth";
import { useDispatch } from "react-redux";
import { useSessionStorageString } from "react-use-window-sessionstorage";
import { useEffect } from "react";
import Decrypt from "./Decrypt";

export default function useSession() {
  const dispatch = useDispatch(authActions);

  // get data from session storage
  const [isLoggedIn] = useSessionStorageString("IsLoggedIn");
  const [LoggedId] = useSessionStorageString("LoggedId");
  const [LoggedLocation] = useSessionStorageString("Location");
  const [token] = useSessionStorageString("token");

  useEffect(() => {
    if (LoggedLocation !== "") {
      dispatch(authActions.updateUserLocation(LoggedLocation));
    }

    if (
      Decrypt(isLoggedIn) === "true" &&
      Decrypt(LoggedId) != "" &&
      LoggedLocation !== "" &&
      token !== ""
    ) {
      dispatch(authActions.updateStatus(true));
      dispatch(authActions.updateUserData(Decrypt(LoggedId)));
      dispatch(authActions.updateUserLocation(LoggedLocation));
      dispatch(authActions.updateToken(token));
    }
  }, [LoggedId, isLoggedIn, dispatch, LoggedLocation, token]);
}
