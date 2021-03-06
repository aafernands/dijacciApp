import "../App.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function MenuBar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					className="menuButton"
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className="title">
					DIJACCI
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
}
export default MenuBar;
