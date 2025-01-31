
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Dashboard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Dashboard/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Dashboard/dashboard",
    "route": "/Dashboard/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 904, hash: 'a897caddd29c25e2bce9a0f0a18cb5df53878516afa0e23c8b02c230a3cd4d83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1187, hash: 'b4747ddc91bc80b4cec84b80f40903c0c4c0ef66346d351f48efa45034d72aea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 27566, hash: '0bbe99fccda001c9113c9d1c3238e32827342e41588b36c713c0158f813f1e70', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-KG7YJX2T.css': {size: 5567, hash: 'Ltzbwwwhj8A', text: () => import('./assets-chunks/styles-KG7YJX2T_css.mjs').then(m => m.default)}
  },
};
