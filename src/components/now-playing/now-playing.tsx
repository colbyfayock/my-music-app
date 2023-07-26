import classNames from 'classnames';
import styles from './now-playing.module.scss';
import { FaHeadphones } from 'react-icons/fa';

export interface NowPlayingProps {
    artist?: string;
    className?: string;
    title?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NowPlaying = ({ className, artist, title }: NowPlayingProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.playing}>
                <FaHeadphones className={styles.icon} />
                { artist } - { title }
            </p>
        </div>
    );
};
