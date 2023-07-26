import classNames from 'classnames';
import styles from './pause.module.scss';
import { FaPause } from 'react-icons/fa';

export interface PauseProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Pause = ({ className }: PauseProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FaPause className={styles.icon} />
            <span className="sr-only">Pause</span>
        </div>
    );
};
