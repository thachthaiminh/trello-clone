import {
  AddToDrive,
  Bolt,
  Dashboard,
  FilterAlt,
  PersonAdd,
  VpnLock,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";

const MENU_STYLES = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  px: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          sx={{ MENU_STYLES }}
          icon={<Dashboard />}
          label="thachthaiminh"
          clickable
        />
        <Chip
          sx={{ MENU_STYLES }}
          icon={<VpnLock />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={{ MENU_STYLES }}
          icon={<AddToDrive />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={{ MENU_STYLES }}
          icon={<Bolt />}
          label="Automation"
          clickable
        />
        <Chip
          sx={{ MENU_STYLES }}
          icon={<FilterAlt />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAdd />}>
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
            },
          }}
        >
          <Tooltip title="thachthaiminh">
            <Avatar alt="thachthaiminh" src="" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
