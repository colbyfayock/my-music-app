import { createBoard } from '@wixc3/react-board';
import { Grid } from '../../../components/grid/grid';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Grid',
    Board: () => (
        <Grid>
          <Card>
            <h2 style={{ margin: 0 }}>Title</h2>
            <p style={{ margin: 0, marginTop: '.2em' }}>Description</p>
          </Card>
          <Card>
            <h2 style={{ margin: 0 }}>Title</h2>
            <p style={{ margin: 0, marginTop: '.2em' }}>Description</p>
          </Card>
          <Card>
            <h2 style={{ margin: 0 }}>Title</h2>
            <p style={{ margin: 0, marginTop: '.2em' }}>Description</p>
          </Card>
          <Card>
            <h2 style={{ margin: 0 }}>Title</h2>
            <p style={{ margin: 0, marginTop: '.2em' }}>Description</p>
          </Card>
          <Card>
            <h2 style={{ margin: 0 }}>Title</h2>
            <p style={{ margin: 0, marginTop: '.2em' }}>Description</p>
          </Card>
          <Card>
            <h2 style={{ margin: 0 }}>Title</h2>
            <p style={{ margin: 0, marginTop: '.2em' }}>Description</p>
          </Card>
        </Grid>
    )
});
