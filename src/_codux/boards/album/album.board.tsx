import { createBoard } from '@wixc3/react-board';
import { Album } from '../../../components/album/album';

export default createBoard({
    name: 'Album',
    Board: () => (
        <Album
            title="Obsidian Eclipse"
            artist="Colby Fayock"
            cover={{
                width: 800,
                height: 766,
                url: 'https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/249333815-3c51805c-08b0-43dd-ab79-39a438439075.png',
            }}
        />
    ),
    environmentProps: {
        canvasWidth: 400,
        windowHeight: 502,
        windowWidth: 826,
    },
});
