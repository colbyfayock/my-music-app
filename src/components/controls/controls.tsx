import classNames from 'classnames';
import styles from './controls.module.scss';
import { Previous } from '../previous/previous';
import { Play } from '../play/play';
import { Next } from '../next/next';
import { Pause } from '../pause/pause';

export interface ControlsProps {
    className?: string;
    isPlaying?: boolean;
    onNext?: Function;
    onPause?: Function;
    onPlay?: Function;
    onPrev?: Function;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Controls = ({ className, isPlaying, onNext, onPause, onPlay, onPrev }: ControlsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span onClick={(e) => typeof onPrev === 'function' && onPrev(e)}>
                <Previous />
            </span>
            {!isPlaying ? (
                <span onClick={(e) => typeof onPlay === 'function' && onPlay(e)}>
                    <Play className={styles.play} />
                </span>
            ) : null}
            {isPlaying ? (
                <span onClick={(e) => typeof onPause === 'function' && onPause(e)}>
                    <Pause className={styles.pause} />
                </span>
            ) : null}
            <span onClick={(e) => typeof onNext === 'function' && onNext(e)}>
                <Next />
            </span>
        </div>
    );
};
