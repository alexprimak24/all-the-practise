import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { NavLink, Outlet } from "react-router-dom";
import myDapps from "../dapps";
import { createTheme } from "@mui/material/styles";

function MainPage() {
  return (
    <div className="flex gap-2 ">
      <ButtonGroup
        size="large"
        variant="outlined"
        aria-label="Basic button group"
        orientation="vertical"
        color="primary"
      >
        {myDapps.map((dapp) => (
          <Button key={dapp.to}>
            <NavLink to={`/${dapp.to}`}>{dapp.buttonName}</NavLink>
          </Button>
        ))}
      </ButtonGroup>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
