import Layouts from './../layouts/MyLayout.vue'

const routes = [
  {
    path: '/',
    component: Layouts,
    redirect: '/index',
    name: 'index',
    children: [
      {
        path: '/index',
        name: 'index',
        redirect: '/one',
        component: () => import('pages/Index.vue'),
        children: [
          {
            path: '/one',
            name: 'one',
            component: () => import('pages/one.vue')
          },
          {
            path: '/two',
            name: 'two',
            component: () => import('pages/two.vue')
          }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
