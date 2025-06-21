import NotificationItem from "./svg/notification.svg";
import Darkthemeicon from "./svg/dark-modeicon.svg";
import Lightmodeicon from "./svg/Light-modeicon.svg";
import ProfilePicBlackItem from "./svg/profilepicblack.svg";
import Logo from "./image/Logo.png"
import LogoutItem from "./svg/Logout.svg";
import ShareIcon from './svg/shareicon.svg';
import HeartIcon from './svg/hearticon.svg';
import HomeIcon from './svg/homeicon.svg';


export class ImageUtil {
  Logo:string= addImagePath(Logo);
  LogoutItem: string = addImagePath(LogoutItem);
  NotificationIcon: string = addImagePath(NotificationItem);
  Darkthemeicon: string = addImagePath(Darkthemeicon);
  Lightmodeicon: string = addImagePath(Lightmodeicon);
  ProfilePicBlackIcon: string = addImagePath(ProfilePicBlackItem);
  LogoutIcon: string = addImagePath(LogoutItem);
  ShareIcon:string = addImagePath(ShareIcon);
  LikeIcon:string = addImagePath(HeartIcon);
  HomeIcon:string = addImagePath(HomeIcon);
}

function addImagePath(src: string): string {
  return src;
}
