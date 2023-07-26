import classNames from 'classnames';
import styles from './play.module.scss';
import { FaPlay } from 'react-icons/fa';

export interface PlayProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Play = ({ className }: PlayProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FaPlay className={styles.icon} />
            <span className="sr-only">Play</span>
        </div>
    );
};
