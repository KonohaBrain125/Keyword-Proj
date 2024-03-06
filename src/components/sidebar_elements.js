
import HomeIcon from "@mui/icons-material/Home";
import  CardIcon  from "../sidebar_icons/card_icon.png";
import  CartIcon  from "../sidebar_icons/cart_icon.png";

// import  DataIcon from "../sidebar_icons/data_icon.png";
import  DollarIcon from "../sidebar_icons/dollar_icon.png";
import  SettingsIcon from "../sidebar_icons/settings_icon.png";

import  ChatIcon  from "../sidebar_icons/chat_icon.png";
import  SyncIcon  from "../sidebar_icons/sync_icon.png";
import  TicketsIcon from "../sidebar_icons/tickets_icon.png";
import  TaskIcon  from "../sidebar_icons/task_icon.png";

class MyPages {
  static Icons1 = [
    {
      text: "Home",
      icon: CardIcon,

      path: "/",
    },
    {
      text: "Digital Strategy Tool",
      icon: SettingsIcon,

      path: "/digitalStartegy",
    },

    {
      text: "Knowledge base",
      icon: TaskIcon,

      path: "/",
    },
    {
      text: "Services",
      icon: CartIcon,

      path: "/",
    },

    {
      text: "Billing",
      icon: DollarIcon,

      path: "/",
    },
    {
      text: "Support",
      icon: ChatIcon,

      path: "/",
    },

    {
      text: "Open Ticket",
      icon: TicketsIcon,

      path: "/",
    },

    {
      text: "Terms of Service",
      icon: TaskIcon,

      path: "/",
    },

    {
      text: "Cookie Policy",
      icon: SyncIcon,

      path: "/",
    },
    {
      text: "Data Privacy Policy",
      icon: CardIcon,

      path: "/",
    },
  ];
}
export default MyPages
