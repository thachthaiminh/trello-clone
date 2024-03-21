import {
  Badge,
  Box,
  Button,
  InputAdornment,
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
  Close,
  HelpOutline,
  LibraryAdd,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import Profiles from "./Menus/Profiles";
import { useState } from "react";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");
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
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon
          sx={{
            color: "white",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
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

        <Button
          sx={{
            color: "white",
            border: "none",
            "&:hover": { border: "none" },
          }}
          variant="outlined"
          startIcon={<LibraryAdd />}
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <Close
                fontSize="small"
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setSearchValue("")}
              />
            ),
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "170px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNone sx={{ cursor: "pointer", color: "white" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
