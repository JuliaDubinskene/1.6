import '../scss/style.scss';
console.log('Works!');



import { windowSizeDevices } from "./repair-devices-swiper";
window.addEventListener("resize", windowSizeDevices);
windowSizeDevices();
import { openMenu } from "./aside_menu";
openMenu();
import { openFeedback } from "./feedback-menu";
openFeedback();
import {openRequest} from "./request-call-menu";
openRequest();
