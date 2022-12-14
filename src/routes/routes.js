import config from 'src/config';

// Layouts
import { HeaderProduct } from 'src/layouts';

// Pages
import Home from 'src/pages/Home';
// import Iphone from 'src/pages/ItemsProduct/Iphone';
// import Ipad from 'src/pages/ItemsProduct/Ipad';
import ItemsProduct from 'src/pages/ItemsProduct/ItemsProduct';

// Single Page
import SingleProduct from 'src/pages/SingleProduct';

// CheckOut
import CheckOut from 'src/pages/CheckOut';

// Not Found
import NotFound from 'src/pages/NotFound';
import Contact from 'src/pages/Contact';



// Data

// Public routes
const publicRoutes = [
    // Page client
    { path: config.routes.home, component: Home, layout: HeaderProduct },
    { path: config.routes.iphone, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.ipad, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.mac, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.watch, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.loudspeaker, component: ItemsProduct, layout: HeaderProduct },
    { path: config.routes.contact, component: Contact, layout: HeaderProduct },


    { path: config.routes.checkout, component: CheckOut, layout: HeaderProduct },

    
    
    //Not Found
    { path: config.routes.notfound, component: NotFound, layout: HeaderProduct },


    // Single Page
    { path: config.routes.iphones, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.ipads, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.macs, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.watchs, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.loudspeakers, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.search, component: SingleProduct, layout: HeaderProduct},
    { path: config.routes.cart, component: SingleProduct, layout: HeaderProduct},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
