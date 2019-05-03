import {expectType} from 'tsd';
import isIp = require('.');

expectType<boolean>(isIp('127.0.0.1'));
expectType<boolean>(isIp.v4('127.0.0.1'));
expectType<boolean>(isIp.v6('1:2:3:4:5:6:7:8'));

expectType<4 | 6 | undefined>(isIp.version('127.0.0.1'));
