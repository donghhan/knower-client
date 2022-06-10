import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: string;
    colors: {
      black: string;
      white: string;
    };
  }
}
