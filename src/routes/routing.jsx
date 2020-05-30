import Starter from '../views/starter/starter.jsx';
// ui components
import Settings from '../views/ui-components/settings.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Campaign',
    icon: 'mdi mdi-arrange-send-backward',
    component: Starter 
  },
  {
    path: '/alert',
    name: 'Drop Settings',
    icon: 'mdi mdi-image-filter-vintage',
    component: Settings
  },
  {
    path: '/badge',
    name: 'Streams',
    icon: 'mdi mdi-arrange-send-backward',
    component: Badges
  },
  { path: '/', pathTo: '/dashboard', name: 'Campaign', redirect: true }
];
export default ThemeRoutes;
