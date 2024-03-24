import { Attachment, Comment, Group } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function TrelloCard() {
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        overflow: "unset",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://cly.1cdn.vn/2020/07/11/congly-vn_son-tung-m-tp-gay-bat-ngo-voi-tuyen-bo-nghi-hat-sau-30-tuoi-hinh-anh0820614933.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>thachthaiminh</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px " }}>
        <Button size="small" startIcon={<Group />}>
          20
        </Button>
        <Button size="small" startIcon={<Comment />}>
          20
        </Button>
        <Button size="small" startIcon={<Attachment />}>
          20
        </Button>
      </CardActions>
    </Card>
  );
}

export default TrelloCard;
