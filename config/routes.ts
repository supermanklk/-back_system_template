/*
 * @Author: faith
 * @Date: 2020-11-23 00:39:58
 * @LastEditTime: 2020-11-23 01:00:16
 * @LastEditors: faith
 * @Description: 
 * @FilePath: /back_system_template/config/routes.ts
 * @仰望星空 脚踏实地
 */
export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: './Admin',
            authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                authority: ['admin'],
              },
            ],
          },
          {
            name: 'nanyang',
            icon: 'table',
            path: '/nanyang',
            routes: [
              {
                path: '/nanyang/xinye',
                name: 'xinye',
                icon: 'smile',
                component: './Nanyang/Xinye',
              },
              {
                path: '/nanyang/tanghe',
                name: 'tanghe',
                icon: 'smile',
                component: './Nanyang/Tanghe',
              },
              {
                name: 'hansangshu',
                path: '/nanyang/xinye/hansangshu',
                icon: 'smile',
                component: './Nanyang/Xinye/Hansangshu',
                hideInMenu : true
              },
            ]
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
