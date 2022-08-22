import { setupWorker } from 'msw';
import { handlers } from './handlers';
export var worker = setupWorker.apply(void 0, handlers);
