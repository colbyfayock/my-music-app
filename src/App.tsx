import { useState } from 'react';
import styles from './App.module.scss';
import { Grid } from './components/grid/grid';
import { Album } from './components/album/album';
import { FaHeadphones } from 'react-icons/fa';
import { Controls } from './components/controls/controls';
import { NowPlaying } from './components/now-playing/now-playing';

const albums = [
    {
        artist: 'Electric Dreams',
        title: 'Neon Love Affair',
        cover: {
            url: 'https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/249008584-d7b8b9a6-025b-4b27-8989-d3817f88f398.png',
            height: 1024,
            width: 1024,
        },
    },
    {
        artist: 'Starstruck',
        title: 'Radiant Melodies',
        cover: {
            url: 'https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/249008591-9ea2edd5-5c23-49c2-bc02-2f6051b405a4.png',
            height: 1024,
            width: 1024,
        },
    },
    {
        artist: 'Crystal Clear',
        title: 'Glimmering Heartbeat',
        cover: {
            url: 'https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/249008582-b29fb737-626b-4b78-b6ad-ded563604941.png',
            height: 1024,
            width: 1024,
        },
    },
    {
        artist: 'Retro Rhythms',
        title: 'Nostalgic Nights',
        cover: {
            url: 'https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/249008589-252df026-265c-4848-8052-25bc36ac23ef.png',
            height: 1024,
            width: 1024,
        },
    },
    {
        artist: 'Flashback Fever',
        title: 'Vivid Memories',
        cover: {
            url: 'https://github-production-user-asset-6210df.s3.amazonaws.com/1045274/249008587-1ed471f0-6550-45d0-9d83-91de555a65de.png',
            height: 1024,
            width: 1024,
        },
    },
];

function App() {
    const [playingIndex, setPlayingIndex] = useState<number | undefined>();
    const playing = typeof playingIndex === 'number' && albums[playingIndex];

    function handleIsPlaying(index: number) {
        if (playingIndex === index) {
            setPlayingIndex(undefined);
        } else {
            setPlayingIndex(index);
        }
    }

    function handleOnPlay() {
        setPlayingIndex(0);
    }

    function handleOnPause() {
        setPlayingIndex(undefined);
    }

    function handleOnNext() {
        if (typeof playingIndex === 'number') {
            const next = playingIndex + 1;
            if (next > albums.length - 1) {
                setPlayingIndex(0);
            } else {
                setPlayingIndex(next);
            }
        } else {
            setPlayingIndex(0);
        }
    }

    function handleOnPrev() {
        if (typeof playingIndex === 'number') {
            const next = playingIndex - 1;
            if (next >= 0) {
                setPlayingIndex(next);
            } else {
                setPlayingIndex(albums.length - 1);
            }
        } else {
            setPlayingIndex(albums.length - 1);
        }
    }

    return (
        <div className={styles.App}>
            <div className={styles.player}>
                <Controls
                    onPrev={handleOnPrev}
                    onPause={handleOnPause}
                    onNext={handleOnNext}
                    onPlay={handleOnPlay}
                    isPlaying={!!playing}
                />

                {playing ? (
                    <NowPlaying artist={playing.artist} title={playing.title} />
                ) : null}
            </div>
            <Grid>
                {albums.map((album, i) => {
                    return (
                        <div
                            key={`${album.artist}-${album.title}`}
                            onClick={() => handleIsPlaying(i)}
                        >
                            <Album {...album} isPlaying={playingIndex === i} />
                        </div>
                    );
                })}
            </Grid>
        </div>
    );
}

export default App;
