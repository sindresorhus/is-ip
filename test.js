import test from 'ava';
import m from './';

test(t => {
	t.true(m('192.168.0.1'));
	t.true(m('1:2:3:4:5:6:7:8'));
	t.true(m.v4('192.168.0.1'));
	t.true(m.v6('1:2:3:4:5:6:7:8'));
});
