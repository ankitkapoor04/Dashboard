
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
    'index.csr.html': {size: 894, hash: 'dcc8529cbfc0d195c8bd66886f3f14366debea07759d4c384c8775f16cd0db2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1177, hash: 'fcaff7c6cefff1b26741709c727616bf680c6a471fbd61461c6dc6c1a91521ca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 27556, hash: '79f99b1f371837c3317f35f8a3760649b26bcfff926fb0317768009d5e2e3d4f', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-KG7YJX2T.css': {size: 5567, hash: 'Ltzbwwwhj8A', text: () => import('./assets-chunks/styles-KG7YJX2T_css.mjs').then(m => m.default)}
  },
};
