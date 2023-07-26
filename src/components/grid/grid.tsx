import { ReactNode } from 'react'

import classNames from 'classnames';
import styles from './grid.module.scss';

export interface GridProps {
    children?: ReactNode;
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Grid = ({ children, className }: GridProps) => {
    return <div className={classNames(styles.root, className)}>{ children }</div>;
};
