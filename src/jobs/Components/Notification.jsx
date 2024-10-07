import { Store } from "react-notifications-component";
 export const Notification=({title, message, type})=>{

    // let {title, message, type} = {props}
        Store.addNotification({
          title: title,
          message:message,
          type: type,
          insert: "top",
          container: "top-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      }
    