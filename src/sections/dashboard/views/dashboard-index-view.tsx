import { getWeek } from 'date-fns';
import { useQuery } from 'react-query';
import Row from '@/components/core/row';
import Iconify from '@/components/iconify';
import { useRouter } from '@/routes/hooks';
import ApiClient from '@/services/appClient';
import Column from '@/components/core/column';
import CoreButton from '@/components/core/core-button';
import { LoadingTopbar } from '@/components/loading-screen';

import {
  Card,
  List,
  Chip,
  Stack,
  Alert,
  Divider,
  ListItem,
  Skeleton,
  Container,
  CardHeader,
  Typography,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

const DashboardIndexView = () => {
  const router = useRouter();

  const now = new Date();

  const thisYear = now.getFullYear();

  const thisWeek = getWeek(now);

  const allReports = useQuery({
    queryKey: ['getAllWeeklyReportsAsReportee'],
    queryFn: async () => {
      const response = await ApiClient.oneToOne.getAllWeeklyReportsAsReportee();
      return response?.data;
    },
  });

  const reports = allReports?.data?.data?.length === 1 ? 'report' : 'reports';

  return (
    <Container sx={{ mx: 'auto' }}>
      <Column
        sx={{
          paddingBottom: 3,
        }}
      >
        {allReports.isLoading && <LoadingTopbar />}
        <Card>
          <CardHeader
            title="Your 1-2-1s"
            sx={{
              marginBottom: 3,
            }}
          />
          <Divider
            sx={{
              borderStyle: 'dashed',
            }}
          />
          <Row padding={3}>
            <Typography variant="h6">
              You are on week {thisWeek} / {thisYear}
              <br />
              <span style={{ fontSize: 14, color: 'grey' }}>
                You have done {allReports?.data?.data ? allReports?.data?.data?.length : 0}{' '}
                {reports + ' '}
                so far
              </span>
            </Typography>

            <CoreButton
              variant="contained"
              color="primary"
              sx={{ marginLeft: 'auto' }}
              endIcon={<Iconify icon={'mdi:arrow-right'} width={16} height={16} />}
              onClick={() => {
                router.push('/one-to-ones');
              }}
            >
              1-2-1s
            </CoreButton>
          </Row>
        </Card>

        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Past 1-2-1s
        </Typography>

        {(allReports.data?.data === null || allReports.data?.data?.length === 0) && (
          <Alert severity="info">You have no past 1-2-1s</Alert>
        )}

        {allReports.isLoading && (
          <Card>
            <Skeleton variant="rectangular" height={300} />
          </Card>
        )}

        {allReports.data?.data?.map((report) => (
          <Card key={report.id} sx={{ marginTop: 2 }}>
            <CardHeader
              title={`Week ${report.week} / ${report.year}`}
              subheader={`Submitted on ${report.createdAt}`}
            />
            <Divider />
            <Row padding={3}>
              <Column gap={1} flex={1}>
                {report.goneWell?.length > 0 && (
                  <Column gap={1}>
                    <Typography variant="h6">Gone well</Typography>
                    <List dense>
                      {report.goneWell.map((item) => {
                        if (item.label === '') return null;

                        return (
                          <ListItem key={item.label}>
                            <ListItemIcon>
                              <Iconify icon={'mdi:circle'} width={8} height={8} />
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Column>
                )}
              </Column>

              <Column gap={1} flex={1}>
                {report.challenges?.length > 0 && (
                  <Column gap={1}>
                    <Typography variant="h6">Challenges</Typography>
                    <List dense>
                      {report.challenges.map((item) => (
                        <ListItem key={item.label}>
                          <ListItemIcon>
                            <Iconify icon={'mdi:circle'} width={8} height={8} />
                          </ListItemIcon>
                          <ListItemText primary={item.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Column>
                )}
              </Column>
            </Row>

            <Stack px={3} pb={3} gap={2} flexWrap={'wrap'} useFlexGap direction="row">
              <Chip variant={'outlined'} label={'Growth ' + report?.wellbeingScores.growth} />
              <Chip
                variant={'outlined'}
                label={'Impact and productivitiy ' + report?.wellbeingScores.impactAndProductivity}
              />
              <Chip variant={'outlined'} label={'Wellbeing ' + report?.wellbeingScores.wellbeing} />
              <Chip
                variant={'outlined'}
                label={'Work overall ' + report?.wellbeingScores.workOverall}
              />
              <Chip
                variant={'outlined'}
                label={'Work relationships ' + report?.wellbeingScores.workRelationships}
              />
            </Stack>
          </Card>
        ))}
      </Column>
    </Container>
  );
};

export default DashboardIndexView;
