import { authActions } from "../Store/auth";
import { useDispatch } from "react-redux";
import { useSessionStorageString } from "react-use-window-sessionstorage";
import { useEffect } from "react";

export default function useSession() {
  const dispatch = useDispatch(authActions);

  // get data from session storage
  const [isLoggedIn, setLoggedStatus] = useSessionStorageString("IsLoggedIn");
  const [LoggedId, setLoggedId] = useSessionStorageString("LoggedId");
  const [LoggedLocation, setLoggedLocation] =
    useSessionStorageString("Location");

  useEffect(() => {
    if (isLoggedIn === "true" && LoggedId != "" && LoggedLocation !== "") {
      dispatch(authActions.updateStatus(true));
      dispatch(authActions.updateUserData(LoggedId));
      dispatch(authActions.updateUserLocation(LoggedLocation));
    }
  }, [LoggedId, isLoggedIn, dispatch, LoggedLocation]);
}
