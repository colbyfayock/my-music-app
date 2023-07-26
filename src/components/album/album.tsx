import classNames from 'classnames';
import styles from './album.module.scss';
import { Card } from '../card/card';
import { FaMusic } from 'react-icons/fa';

export interface AlbumProps {
    className?: string;
    title?: string;
    artist?: string;
    cover?: {
        height: number;
        url: string;
        width: number;
    };
    isPlaying?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Album = ({ className, title, artist, cover, isPlaying = false }: AlbumProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card>
                {cover ? (
                    <p className={styles.cover}>
                        <img width={cover.width} height={cover.height} src={cover.url} alt="" />
                    </p>
                ) : null}
                <p className={styles.title}>{title}</p>
                <p className={styles.artist}>{artist}</p>
                {isPlaying ? (
                    <span className={styles.playing}>
                        <FaMusic />
                        <span className="sr-only">Playing</span>
                    </span>
                ) : null}
            </Card>
        </div>
    );
};
