import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPathname } from '../../DataHandle/Slice/AuthSlice';

const PathUpdater = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPathname(location.pathname));
    }, [location.pathname, dispatch]);

    return null;
};

export default PathUpdater;
