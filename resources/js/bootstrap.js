import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


// Import all of CoreUI's JS
import * as coreui from '@coreui/coreui'
import Alert from '@coreui/coreui/js/dist/alert';
import { Tooltip, Toast, Popover } from '@coreui/coreui';

window.coreui = coreui;
