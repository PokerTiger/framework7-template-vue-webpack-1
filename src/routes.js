import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import Home from './pages/home/index.vue';
import ToBeApproved from './pages/to-be-approved/index.vue';
import MyRequest from './pages/my-request/index.vue';
import PersonalInfo from './pages/personal-info/index.vue';
import SalarySearch from './pages/salary-search/index.vue';

import Requisition from './pages/requisition/index.vue';
import ExpenseDetail from './pages/expense-detail/index.vue';
import Reimbursement from './pages/reimbursement/index.vue';

export default [{
        path: '/',
        component: Home,
    },
    {
        path: '/to-be-approved/',
        component: ToBeApproved,
    },
    {
        path: '/my-request/',
        component: MyRequest,
    },
    {
        path: '/personal-info/',
        component: PersonalInfo,
    },
    {
        path: '/salary-search/',
        component: SalarySearch,
    },


    {
        path: '/requisition/',
        component: Requisition,
    },
    {
        path: '/expense-detail/',
        component: ExpenseDetail,
    },
    {
        path: '/reimbursement/',
        component: Reimbursement,
    },

    // {
    //     path: '/panel-left/',
    //     component: PanelLeftPage,
    // },
    // {
    //     path: '/panel-right/',
    //     component: PanelRightPage,
    // },
    // {
    //     path: '/about/',
    //     component: AboutPage,
    // },
    // {
    //     path: '/form/',
    //     component: FormPage,
    // },
    // {
    //     path: '/dynamic-route/blog/:blogId/post/:postId/',
    //     component: DynamicRoutePage,
    // },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];
