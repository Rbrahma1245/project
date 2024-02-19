import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
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
    this.setState({userName: "", password:""})
    console.log(this.state);
  }

  handleChangeTheme() {
    let { theme } = this.state;
    this.setState({ theme: theme == lightTheme ? darkTheme : lightTheme });
  }

  render() {
    let { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div
          className="login-container"
          style={{ backgroundColor: theme.palette.background.default }}
        >
          <div className="theme-btn">
            <Button
              variant="contained"
              onClick={this.handleChangeTheme.bind(this)}
            >
              {theme === lightTheme ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </div>

          <form className="form">
            <TextField
              id="outlined-basic"
              label="Enter user Name"
              variant="outlined"
              name="userName"
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Enter your password"
              variant="outlined"
              name="password"
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <br />
            <Button variant="contained" onClick={this.handleSubmit.bind(this)}>
              LOGIN
            </Button>

            <br />
            <br />
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
