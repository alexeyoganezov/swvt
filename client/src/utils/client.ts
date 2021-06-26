import feathersClient from '@feathersjs/client';
// @ts-ignore
import io from 'socket.io-client';

const socket = io('http://localhost:3030/');
const client = feathersClient();

client.configure(feathersClient.socketio(socket));

export { client };
