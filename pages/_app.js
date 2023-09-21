import GlobalStyle from "../styles";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme accentColor="blue" grayColor="olive" scaling="105%">
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
