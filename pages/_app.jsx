import "@/styles/globals.css";
import { Layout } from "components/elements";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  );
}
