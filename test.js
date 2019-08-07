import test from 'tst';
import swizz from '.';

test('quacks like an array', t => {
  const fixture = swizz(['foo', 'bar', 'baz']);
  t.is(fixture.length, 3);
  t.is(fixture.toString(), 'foo,bar,baz');
});

test('get singles', t => {
  const fixture = swizz(['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.x, 'foo');
  t.is(fixture.y, 'bar');
  t.is(fixture.z, 'baz');
  t.is(fixture.w, 'qux');

  t.is(fixture.s, 'foo');
  t.is(fixture.t, 'bar');
  t.is(fixture.p, 'baz');
  t.is(fixture.d, 'qux');

  t.is(fixture.r, 'foo');
  t.is(fixture.g, 'bar');
  t.is(fixture.b, 'baz');
  t.is(fixture.a, 'qux');
});

test('get doubles', t => {
  const fixture = swizz(['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.xy, ['foo', 'bar']);
  t.is(fixture.yz, ['bar', 'baz']);
  t.is(fixture.zw, ['baz', 'qux']);
  t.is(fixture.wx, ['qux', 'foo']);

  t.is(fixture.rg, ['foo', 'bar']);
  t.is(fixture.gb, ['bar', 'baz']);
  t.is(fixture.ba, ['baz', 'qux']);
  t.is(fixture.ar, ['qux', 'foo']);

  t.is(fixture.st, ['foo', 'bar']);
  t.is(fixture.tp, ['bar', 'baz']);
  t.is(fixture.pd, ['baz', 'qux']);
  t.is(fixture.ds, ['qux', 'foo']);
});


test('get triples', t => {
  const fixture = swizz(['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.xyz, ['foo', 'bar', 'baz']);
  t.is(fixture.yzw, ['bar', 'baz', 'qux']);
  t.is(fixture.zwx, ['baz', 'qux', 'foo']);
  t.is(fixture.wxy, ['qux', 'foo', 'bar']);

  t.is(fixture.rgb, ['foo', 'bar', 'baz']);
  t.is(fixture.gba, ['bar', 'baz', 'qux']);
  t.is(fixture.bar, ['baz', 'qux', 'foo']);
  t.is(fixture.arg, ['qux', 'foo', 'bar']);

  t.is(fixture.stp, ['foo', 'bar', 'baz']);
  t.is(fixture.tpd, ['bar', 'baz', 'qux']);
  t.is(fixture.pds, ['baz', 'qux', 'foo']);
  t.is(fixture.dst, ['qux', 'foo', 'bar']);
});

test('get quads', t => {
  const fixture = swizz(['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.xyzw, ['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.yzwx, ['bar', 'baz', 'qux', 'foo']);
  t.is(fixture.zwxy, ['baz', 'qux', 'foo', 'bar']);
  t.is(fixture.wxyz, ['qux', 'foo', 'bar', 'baz']);

  t.is(fixture.rgba, ['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.gbar, ['bar', 'baz', 'qux', 'foo']);
  t.is(fixture.barg, ['baz', 'qux', 'foo', 'bar']);
  t.is(fixture.argb, ['qux', 'foo', 'bar', 'baz']);

  t.is(fixture.stpd, ['foo', 'bar', 'baz', 'qux']);
  t.is(fixture.tpds, ['bar', 'baz', 'qux', 'foo']);
  t.is(fixture.pdst, ['baz', 'qux', 'foo', 'bar']);
  t.is(fixture.dstp, ['qux', 'foo', 'bar', 'baz']);
});

test('set singles', t => {
  const fixture = swizz(['foo', 'bar', 'baz', 'qux']);
  fixture.x = 1
  t.is(fixture, [1, 'bar', 'baz', 'qux']);
  fixture.y = 2
  t.is(fixture, [1, 2, 'baz', 'qux']);
  fixture.z = 3
  t.is(fixture, [1, 2, 3, 'qux']);
  fixture.w = 4
  t.is(fixture, [1, 2, 3, 4]);
  fixture.x = [4]
  t.is(fixture, [4, 2, 3, 4]);
  fixture.y = [3]
  t.is(fixture, [4, 3, 3, 4]);
  fixture.z = [2]
  t.is(fixture, [4, 3, 2, 4]);
  fixture.w = [1]
  t.is(fixture, [4, 3, 2, 1]);

  fixture.xyzw = ['foo', 'bar', 'baz', 'qux']
  fixture.s = 1
  t.is(fixture, [1, 'bar', 'baz', 'qux']);
  fixture.t = 2
  t.is(fixture, [1, 2, 'baz', 'qux']);
  fixture.p = 3
  t.is(fixture, [1, 2, 3, 'qux']);
  fixture.d = 4
  t.is(fixture, [1, 2, 3, 4]);

  fixture.abgr = ['foo', 'bar', 'baz', 'qux']
  t.is(fixture, ['qux', 'baz', 'bar', 'foo'])
  fixture.rgba = fixture.abgr
  t.is(fixture, ['foo', 'bar', 'baz', 'qux'])
});
