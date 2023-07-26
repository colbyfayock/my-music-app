import { createBoard } from '@wixc3/react-board';
import { NowPlaying } from '../../../components/now-playing/now-playing';

export default createBoard({
    name: 'NowPlaying',
    Board: () => <NowPlaying artist={'Colby Fayock'} title={'Super Cool Album'} />,
    environmentProps: {
        windowWidth: 514,
        windowHeight: 300,
    },
});
