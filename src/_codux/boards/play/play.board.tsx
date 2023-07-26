import { createBoard } from '@wixc3/react-board';
import { Play } from '../../../components/play/play';

export default createBoard({
    name: 'Play',
    Board: () => <Play />
});
