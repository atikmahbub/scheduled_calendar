import { styled } from "@mui/system";
import TableCell from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)({
  height: 150,
  width: 300,
  fontSize: 40,
  padding: 10,
  color: "gray",
  border: "1px solid #e6e8eb",
});

export const HeaderCell = styled(TableCell)({
  fontSize: 24,
  fontWeight: 500,
  color: "#333",
});

export const StyledContent = styled("span")({
  background: "#edece8",
  color: "black",
  width: "max-content",
  padding: 6,
  borderRadius: 5,
  cursor: "pointer",
});

export const FixedDiv = styled("div")({
  height: "100%",
  width: "100%",
  overflowY: "scroll",
  overflowX: "hidden",
});
