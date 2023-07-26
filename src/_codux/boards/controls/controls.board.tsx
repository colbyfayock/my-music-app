import { createBoard } from '@wixc3/react-board';
import { Controls } from '../../../components/controls/controls';

export default createBoard({
    name: 'Controls',
    Board: () => <Controls />
});
