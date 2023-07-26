import classNames from 'classnames';
import styles from './next.module.scss';
import { FaStepForward } from 'react-icons/fa';

export interface NextProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Next = ({ className }: NextProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <FaStepForward className={styles.icon} />
            <span className="sr-only">Next</span>
        </div>
    );
};
