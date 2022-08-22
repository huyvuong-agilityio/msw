import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export var server = setupServer.apply(void 0, handlers);
