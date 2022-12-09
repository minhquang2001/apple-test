import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);
function BackgroundLoading() {
    return (
        <>
            <div className={cx('wrap')}>
                
                    <Skeleton height={400}  />

                
            </div>
        </>
    );
}

export default BackgroundLoading;
