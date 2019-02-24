import HomePage from '@/views/home.vue'
import MemberPage from '@/views/member.vue'
import AboutPage from '@/views/about.vue'
import FormPage from '@/views/form.vue'
import DynamicRoutePage from '@/views/dynamic-route.vue'
import NotFoundPage from '@/views/not-found.vue'

import PanelLeftPage from '@/views/panel-left.vue'
import PanelRightPage from '@/views/panel-right.vue'

import F7Demos from '@/views/f7demos/index.vue'
import AccordionPage from '@/views/f7demos/accordion.vue'
import ActionSheetPage from '@/views/f7demos/action_sheet.vue'

import H5Plus from '@/views/h5plus/index.vue'
import Accelerometer from '@/views/h5plus/accelerometer.vue'

export default [{
    name: 'home',
    path: '/',
    alias: '/#',
    component: HomePage,
    options: {
      animate: false
    }
  },
  {
    name: 'member',
    path: '/member/',
    component: MemberPage,
    options: {
      animate: false
    }
  },
  {
    path: '/f7demos/',
    component: F7Demos,
    options: {
      animate: false
    },
    routes: [{
      path: 'accordion',
      component: AccordionPage
    }, {
      path: 'action_sheet',
      component: ActionSheetPage
    }]
  },
  {
    path: '/h5plus',
    component: H5Plus,
    options: {
      animate: false
    },
    routes: [{
      path: 'accelerometer',
      component: Accelerometer
    }]
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  }, {
    path: '/panel-right/',
    component: PanelRightPage
  }, {
    path: '/about/',
    component: AboutPage
  }, {
    path: '/form/',
    component: FormPage
  }, {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  }, {
    path: '(.*)',
    component: NotFoundPage
  }
]