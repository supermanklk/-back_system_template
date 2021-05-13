// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/zhangbin/Desktop/superman_project/back_system_template/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/layouts/UserLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/user/login'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/layouts/SecurityLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/index.html",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/welcome",
            "name": "welcome",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/Welcome'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/admin",
            "name": "admin",
            "icon": "crown",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/Admin'), loading: LoadingComponent}),
            "authority": [
              "admin"
            ],
            "routes": [
              {
                "path": "/admin/sub-page",
                "name": "sub-page",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/Welcome'), loading: LoadingComponent}),
                "authority": [
                  "admin"
                ],
                "exact": true
              }
            ]
          },
          {
            "name": "nanyang",
            "icon": "table",
            "path": "/nanyang",
            "routes": [
              {
                "path": "/nanyang/xinye",
                "name": "xinye",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Nanyang__Xinye' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/Nanyang/Xinye'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/nanyang/tanghe",
                "name": "tanghe",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Nanyang__Tanghe' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/Nanyang/Tanghe'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "hansangshu",
                "path": "/nanyang/xinye/hansangshu",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Nanyang__Xinye__Hansangshu' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/Nanyang/Xinye/Hansangshu'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "name": "list.table-list",
            "icon": "table",
            "path": "/list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/ListTableList'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/zhangbin/Desktop/superman_project/back_system_template/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
