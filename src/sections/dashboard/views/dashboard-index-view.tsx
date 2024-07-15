import Row from '@/components/core/row';
import Column from '@/components/core/column';

import {
  Card,
  List,
  Divider,
  ListItem,
  Container,
  CardHeader,
  Typography,
  ListItemText,
} from '@mui/material';

const DashboardIndexView = () => {
  return (
    <Container sx={{ mx: 'auto' }}>
      <Column>
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
            <Column gap={1}>
              <Typography variant="h6">Last time you discussed</Typography>

              <List dense>
                <ListItem>
                  <ListItemText primary="Your career goals" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Your progress against your goals" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Your development plan" />
                </ListItem>
              </List>
            </Column>

            <Column gap={1}>
              <Typography variant="h6">Last time you discussed</Typography>

              <List dense>
                <ListItem>
                  <ListItemText primary="You might have missed apples" />
                </ListItem>
              </List>
            </Column>
          </Row>
        </Card>
      </Column>
    </Container>
  );
};

export default DashboardIndexView;
