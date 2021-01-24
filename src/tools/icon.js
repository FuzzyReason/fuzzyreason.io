import SocialMedia from "../constants/icons";

import ArrowIcon from "../../static/svg/arrow.svg";
import GithubIcon from "../../static/svg/github.svg";
import LinkIcon from "../../static/svg/link.svg";
import LinkedinIcon from "../../static/svg/linkedin.svg";
import MailIcon from "../../static/svg/mail.svg";
import MenuIcon from "../../static/svg/menu.svg";
import TwitterIcon from "../../static/svg/twitter.svg";
import YoutubeIcon from "../../static/svg/youtube.svg";

const Icons = {
  [SocialMedia.ARROW]: ArrowIcon,
  [SocialMedia.GITHUB]: GithubIcon,
  [SocialMedia.LINK]: LinkIcon,
  [SocialMedia.LINKEDIN]: LinkedinIcon,
  [SocialMedia.MAIL]: MailIcon,
  [SocialMedia.MENU]: MenuIcon,
  [SocialMedia.TWITTER]: TwitterIcon,
  [SocialMedia.YOUTUBE]: YoutubeIcon,
};

const getIcon = (type) => Icons[type];

export default getIcon;
