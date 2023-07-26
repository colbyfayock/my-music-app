import classNames from 'classnames';
import styles from './previous.module.scss';
import { FaStepBackward } from 'react-icons/fa';

export interface PreviousProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Previous = ({ className }: PreviousProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FaStepBackward className={styles.icon} />
            <span className="sr-only">Previous</span>
        </div>
    );
};
