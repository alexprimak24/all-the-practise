import { useEffect, useState } from "react";
import dappsInfo from "../dappsInfo";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ErrorPage from "./ErrorPage";

interface dApp {
  name: string;
  info: string;
  image: string;
  learnmore: string;
}
function DappInfo() {
  const params = useParams<{ dAppName: string }>();

  const [currentDapp, setCurrentDapp] = useState<dApp | undefined>(undefined);
  useEffect(() => {
    const currDapp = dappsInfo.find(
      (dapp: dApp) => dapp.name === params.dAppName
    );
    setCurrentDapp(currDapp);
  }, [params.dAppName]);
  console.log(currentDapp);

  return (
    <>
      {currentDapp && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={currentDapp?.name}
            height="140"
            image={currentDapp?.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {currentDapp?.name.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentDapp?.info}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={currentDapp?.learnmore}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      )}
      {!currentDapp && <ErrorPage />}
    </>
  );
}

export default DappInfo;
