import { memo } from 'react';
import MatterScene from './MatterScene.jsx';

const StoragePage = ({ storage }) => {
    return (
        <section>
            <h2 className='screen-reader-only'>Storage</h2>
            <MatterScene storage={storage}/>
        </section>
    );
};

export default memo(StoragePage);