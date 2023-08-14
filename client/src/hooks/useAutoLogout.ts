import React, { useState, useEffect, useCallback } from "react";

const useAutoLogout = (idleTime: number) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [lastActiveTime, setLastActiveTime] = useState<number>(Date.now());
  const [isPageVisible, setIsPageVisible] = useState<boolean>(true);


  const logout = useCallback(() => {
 
    localStorage.clear();
    window.location.href = "/login";
  }, []);


  const resetTimer = useCallback(() => {

    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(logout, idleTime);
  
    setTimerId(newTimerId);
    setLastActiveTime(Date.now());
  }, [timerId, idleTime, logout]);


  const handleVisibilityChange = useCallback(() => {

    const isVisible = document.visibilityState === "visible";

    setIsPageVisible(isVisible);
  }, []);

 
  // useEffect(() => {
  //   if (isPageVisible) {
  //     resetTimer();
  //   }
  // }, [isPageVisible, resetTimer]);


  useEffect(() => {

    document.addEventListener("visibilitychange", handleVisibilityChange);
   
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleVisibilityChange]);


  return () => {
    resetTimer();
  };
};


export default useAutoLogout;