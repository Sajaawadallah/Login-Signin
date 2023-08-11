import { useRoutes } from 'react-router-dom';

import { routes } from './route';

const Rout = () => {
    const router = useRoutes(routes);

    return router;
};

export default Rout;