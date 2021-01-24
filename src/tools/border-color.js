import colors from "../constants/colors";

export const borderColor = (pageName) => {
  switch (pageName) {
    case "Home":
    case "":
      return colors.homePageBackround;
    case "About":
      return colors.aboutPageBackground;
    case "Speaking":
      return colors.speakingPageBackground;
    case "Writing":
      return colors.writingPageBackground;
    case "Uses":
      return colors.usesPageBackground;
    case "Not Found":
      return colors.notFoundPageBackground;
    default:
      return colors.black;
  }
};
