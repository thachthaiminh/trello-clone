import {
  AddToDrive,
  Bolt,
  Dashboard,
  FilterAlt,
  PersonAdd,
  VpnLock,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";

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
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        borderBottom: "1px solid white",
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
          sx={{
            color: "white",
            bgcolor: "transparent",
            border: "none",
            px: "5px",
            borderRadius: "4px",
            ".MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<Dashboard />}
          label="thachthaiminh"
          clickable
        />
        <Chip
          sx={{
            color: "white",
            bgcolor: "transparent",
            border: "none",
            px: "5px",
            borderRadius: "4px",
            ".MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<VpnLock />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={{
            color: "white",
            bgcolor: "transparent",
            border: "none",
            px: "5px",
            borderRadius: "4px",
            ".MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<AddToDrive />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={{
            color: "white",
            bgcolor: "transparent",
            border: "none",
            px: "5px",
            borderRadius: "4px",
            ".MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<Bolt />}
          label="Automation"
          clickable
        />
        <Chip
          sx={{
            color: "white",
            bgcolor: "transparent",
            border: "none",
            px: "5px",
            borderRadius: "4px",
            ".MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<FilterAlt />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          sx={{ color: "white", borderColor: "white" }}
          variant="outlined"
          startIcon={<PersonAdd />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
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
