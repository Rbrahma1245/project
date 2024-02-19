import {
  Button,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import "./Login.scss";
import { Component } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      theme: lightTheme,
      userName: "",
      password: "",
    };
  }
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit() {
    this.setState({ userName: "", password: "" });
    console.log(this.state);
  }

  handleChangeTheme() {
    let { theme } = this.state;
    this.setState({ theme: theme == lightTheme ? darkTheme : lightTheme });
  }

  render() {
    let { theme, userName, password } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div
          className="login-container"
          style={{ backgroundColor: theme.palette.background.default }}
        >
          <div className="theme-btn">
            <Tooltip title={theme === lightTheme ? "Dark Mode" : "Light Mode"}>
              <Button onClick={this.handleChangeTheme.bind(this)}>
                {theme === lightTheme ? <DarkModeIcon /> : <LightModeIcon />}
              </Button>
            </Tooltip>
          </div>

          <form className="form">
            <Typography
              variant="h6"
              style={{ color: theme === lightTheme ? "" : "white" }}
            >
              LOGIN FORM
            </Typography>

            <TextField
              label="Enter user Name"
              variant="outlined"
              name="userName"
              value={userName}
              onChange={this.handleChange.bind(this)}
            />

            <TextField
              label="Enter your password"
              variant="outlined"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange.bind(this)}
            />

            <Button variant="contained" onClick={this.handleSubmit.bind(this)}>
              LOGIN
            </Button>
          </form>
        </div>
      </ThemeProvider>
    );
  }
}

export default Login;

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
