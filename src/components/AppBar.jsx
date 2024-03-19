import {
  Badge,
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ModeSelect from "./ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Templates from "./Menus/Templates";
import {
  HelpOutline,
  LibraryAdd,
  NotificationsNone,
} from "@mui/icons-material";
import Profiles from "./Menus/Profiles";

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto",
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex", gap: 1 } }}>
          <Workspaces />
          <Recent />
          <Started />
          <Templates />
        </Box>

        <Button variant="outlined" startIcon={<LibraryAdd />}>
          Create
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="oulined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{ minWidth: "120px" }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNone
              sx={{ cursor: "pointer", color: "primary.main" }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
