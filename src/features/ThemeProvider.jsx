import { useSelector } from "react-redux";

function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.theme.mode);

  return <div className={`theme-${theme}`}>{children}</div>;
}

export default ThemeProvider;
