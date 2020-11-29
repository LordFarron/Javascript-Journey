import {styleBody, addTitle, concatc} from './dom';
import users, {getPremUsers} from './data';

addTitle('text');
styleBody();
console.log(concatc, users);
const premUsers = getPremUsers(users);
console.log(premUsers);