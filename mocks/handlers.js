import { rest } from 'msw';
export var handlers = [rest.get('/login', function () { })];
