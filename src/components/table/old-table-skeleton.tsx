import {
  Table,
  SxProps,
  TableRow,
  Skeleton,
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';

import CoreContainer from '../core/core-container';

// ----------------------------------------------------------------------

type Props = {
  cols: number;
  rows?: number;
};

const OldTableSkeleton: React.FC<Props> = ({ cols, rows }) => {
  return (
    <CoreContainer padding={0}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {Array(cols)
                .fill(0)
                .map((_, index) => {
                  return (
                    <TableCell key={index} {...tableCellHeadProps}>
                      <Skeleton width={'100%'} height={40}></Skeleton>
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>

          <TableBody>
            {Array(rows ?? 10)
              .fill(0)
              .map((_, index) => {
                return (
                  <TableRow key={index}>
                    {Array(cols)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <TableCell key={index}>
                            <Skeleton width={'100%'} height={40}></Skeleton>
                          </TableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </CoreContainer>
  );
};

const tableCellHeadProps: {
  sx: SxProps;
  align: any;
} = {
  sx: {
    fontWeight: 'bold',
  },
  align: 'center',
};

export default OldTableSkeleton;
