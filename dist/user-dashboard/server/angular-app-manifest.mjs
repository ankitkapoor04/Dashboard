
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 894, hash: 'f5dc5e2ecc5351efa609dbbe7f543e5fc04ab905edd65d3bcfe520ebcdc91514', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: '4502e0be34ba4a9ed3ffd16e96670e954d2bd753d8c42396ba6934e39492a653', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 21878, hash: '71d1c929c5bd473ce55f825222495d3edf424c6c6479ec130790eeb0aaa27fac', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-KG7YJX2T.css': {size: 5567, hash: 'Ltzbwwwhj8A', text: () => import('./assets-chunks/styles-KG7YJX2T_css.mjs').then(m => m.default)}
  },
};
