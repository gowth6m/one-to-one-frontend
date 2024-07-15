import Row from '@/components/core/row';
import Column from '@/components/core/column';

import { Card, Divider, Container, CardHeader } from '@mui/material';

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
          <Row>Last time</Row>
        </Card>
      </Column>
    </Container>
  );
};

export default DashboardIndexView;
