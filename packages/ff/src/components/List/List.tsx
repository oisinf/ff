import React, { memo } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

type Props = {
  players: Array<unknown>;
};

const List: React.FC<Props> = ({ players }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Position</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default memo(List);
