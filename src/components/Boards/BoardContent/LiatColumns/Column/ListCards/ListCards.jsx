/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import TrelloCard from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCards({ cards }) {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          p: "0 5px",
          m: "0 5px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) => `calc(
  ${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${(theme) =>
            theme.trello.columnHeaderHeight} - ${(theme) =>
            theme.trello.columnFooterHeight}
)`,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        }}
      >
        {cards?.map((card) => (
          <TrelloCard key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
