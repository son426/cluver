import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boxColor: string;
    iconColor: string;
    formColor: string;
    accentColor: string;
    gradient: string;
    titleFont: string;
    textFont: string;
  }
}
