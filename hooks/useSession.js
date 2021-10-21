import { authActions } from "../Store/auth";
import { useDispatch } from "react-redux";
import { useSessionStorageString } from "react-use-window-sessionstorage";
import { useEffect } from "react";

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
      isLoggedIn === "true" &&
      LoggedId != "" &&
      LoggedLocation !== "" &&
      token !== ""
    ) {
      dispatch(authActions.updateStatus(true));
      dispatch(authActions.updateUserData(LoggedId));
      dispatch(authActions.updateUserLocation(LoggedLocation));
      dispatch(authActions.updateToken(token));
    }
  }, [LoggedId, isLoggedIn, dispatch, LoggedLocation, token]);
}
