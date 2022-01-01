import {expectType} from 'tsd';
import {isIP, isIPv6, isIPv4, ipVersion} from './index.js';

expectType<boolean>(isIP('127.0.0.1'));
expectType<boolean>(isIPv6('1:2:3:4:5:6:7:8'));
expectType<boolean>(isIPv4('127.0.0.1'));

expectType<6 | 4 | undefined>(ipVersion('127.0.0.1'));
