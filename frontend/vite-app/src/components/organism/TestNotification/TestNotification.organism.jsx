import React from "react";

function TestNotification() {
  const handleNotification = () => {
    if ("Notification" in window) {
      Notification.requestPermission()
        .then((permission) => {
          if (permission === "granted") {
            new Notification("Notification Title", {
              body: "This is the notification message.",
              icon: "path/to/icon.png"
            });
          }
        })
        .catch((error) => {
          console.error("Error requesting notification permission:", error);
        });
    }
  };

  return (
    <div>
      <button onClick={handleNotification}>Show Notification</button>
    </div>
  );
}

export default TestNotification;
