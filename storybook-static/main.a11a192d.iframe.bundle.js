(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    165: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return MenuProfileSidebar;
      });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Link = __webpack_require__(65),
        styled_components_browser_esm = __webpack_require__(39),
        Container = styled_components_browser_esm.d.div.withConfig({
          displayName: 'styles__Container',
          componentId: 'sc-xmnhcn-0',
        })(
          [
            'background:white;position:fixed;z-index:100;padding:46px;bottom:0;left:0;right:0;top:48px;transition:0.3s;pointer-events:',
            ';opacity:',
            ';transform:',
            ';@media (min-width:860px){display:none;}> div{max-width:400px;margin:auto;> img{border-radius:',
            ';}}a{font-size:18px;}.boxLink{font-size:18px;color:',
            ';-webkit-text-decoration:none;text-decoration:none;font-weight:800;}hr{margin-top:12px;margin-bottom:8px;border-color:transparent;border-bottom-color:',
            ';}',
          ],
          function (_ref) {
            return _ref.isOpen ? 'all' : 'none';
          },
          function (_ref2) {
            return _ref2.isOpen ? '1' : '0';
          },
          function (_ref3) {
            return _ref3.isOpen
              ? 'translateY(0)'
              : 'translateY(calc(-100% - 48px))';
          },
          function (_ref4) {
            return _ref4.theme.shapes.borderRadius;
          },
          function (_ref5) {
            return _ref5.theme.colors.blue[600];
          },
          function (_ref6) {
            return _ref6.theme.colors.gray[200];
          }
        ),
        Actions = styled_components_browser_esm.d.div.withConfig({
          displayName: 'styles__Actions',
          componentId: 'sc-xmnhcn-1',
        })(
          [
            'a{font-size:12px;color:',
            ';margin-bottom:16px;display:flex;align-items:center;justify-content:flex-start;text-decoration:none;img{width:16px;height:16px;margin-right:5px;}}',
          ],
          function (_ref7) {
            return _ref7.theme.colors.blue[600];
          }
        ),
        jsx_runtime = __webpack_require__(3);
      react_default.a.createElement;
      function MenuProfileSidebar(_ref) {
        var githubUser = _ref.githubUser,
          isOpen = _ref.isOpen;
        return Object(jsx_runtime.jsx)(Container, {
          id: 'menuProfileSidebar',
          isOpen: isOpen,
          children: Object(jsx_runtime.jsxs)('div', {
            children: [
              Object(jsx_runtime.jsx)('img', {
                src: 'https://github.com/' + githubUser + '.png',
              }),
              Object(jsx_runtime.jsx)('hr', {}),
              Object(jsx_runtime.jsx)('p', {
                children: Object(jsx_runtime.jsxs)('a', {
                  className: 'boxLink',
                  href: '/user/' + githubUser,
                  children: ['@', githubUser],
                }),
              }),
              Object(jsx_runtime.jsx)('hr', {}),
              Object(jsx_runtime.jsxs)(Actions, {
                children: [
                  Object(jsx_runtime.jsxs)('nav', {
                    children: [
                      Object(jsx_runtime.jsxs)(Link.a, {
                        href: '/',
                        children: [
                          Object(jsx_runtime.jsx)('img', {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL + '/icons/user.svg',
                          }),
                          'Perfil',
                        ],
                      }),
                      Object(jsx_runtime.jsxs)(Link.a, {
                        href: '/',
                        children: [
                          Object(jsx_runtime.jsx)('img', {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL + '/icons/book.svg',
                          }),
                          'Recados',
                        ],
                      }),
                      Object(jsx_runtime.jsxs)(Link.a, {
                        href: '/',
                        children: [
                          Object(jsx_runtime.jsx)('img', {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL + '/icons/camera.svg',
                          }),
                          'Fotos',
                        ],
                      }),
                      Object(jsx_runtime.jsxs)(Link.a, {
                        href: '/',
                        children: [
                          Object(jsx_runtime.jsx)('img', {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL + '/icons/sun.svg',
                          }),
                          'Depoimentos',
                        ],
                      }),
                    ],
                  }),
                  Object(jsx_runtime.jsx)('hr', {}),
                  Object(jsx_runtime.jsxs)('nav', {
                    children: [
                      Object(jsx_runtime.jsxs)(Link.a, {
                        href: '/',
                        children: [
                          Object(jsx_runtime.jsx)('img', {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL + '/icons/plus.svg',
                          }),
                          'GitHub Trends',
                        ],
                      }),
                      Object(jsx_runtime.jsxs)(Link.a, {
                        href: '/logout',
                        children: [
                          Object(jsx_runtime.jsx)('img', {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL + '/icons/logout.svg',
                          }),
                          'Sair',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      MenuProfileSidebar.displayName = 'MenuProfileSidebar';
      try {
        (MenuProfileSidebar.displayName = 'MenuProfileSidebar'),
          (MenuProfileSidebar.__docgenInfo = {
            description: '',
            displayName: 'MenuProfileSidebar',
            props: {
              githubUser: {
                defaultValue: null,
                description: '',
                name: 'githubUser',
                required: !0,
                type: { name: 'string' },
              },
              isOpen: {
                defaultValue: null,
                description: '',
                name: 'isOpen',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/MenuProfileSidebar/index.tsx#MenuProfileSidebar'
            ] = {
              docgenInfo: MenuProfileSidebar.__docgenInfo,
              name: 'MenuProfileSidebar',
              path: 'src/components/MenuProfileSidebar/index.tsx#MenuProfileSidebar',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    216: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Container;
      });
      var Container = __webpack_require__(39).d.div.withConfig({
        displayName: 'styles__Container',
        componentId: 'sc-igddfi-0',
      })(
        [
          'border-radius:',
          ';background:',
          ';padding:16px;margin-bottom:10px;.boxLink{font-size:14px;color:',
          ';text-decoration:none;font-weight:800;}.title{font-size:32px;font-weight:400;margin-bottom:20px;}.subTitle{font-size:18px;font-weight:400;margin-bottom:20px;}.smallTitle{margin-bottom:20px;font-size:16px;font-weight:700;color:',
          ';margin-bottom:20px;}hr{margin-top:12px;margin-bottom:8px;border-color:transparent;border-bottom-color:',
          ';}',
        ],
        function (_ref) {
          return _ref.theme.shapes.borderRadius;
        },
        function (_ref2) {
          return _ref2.theme.colors.white;
        },
        function (_ref3) {
          return _ref3.theme.colors.blue[100];
        },
        function (_ref4) {
          return _ref4.theme.colors.gray[500];
        },
        function (_ref5) {
          return _ref5.theme.colors.gray[200];
        }
      );
    },
    490: function (module, exports, __webpack_require__) {
      __webpack_require__(491),
        __webpack_require__(647),
        __webpack_require__(648),
        __webpack_require__(869),
        __webpack_require__(870),
        __webpack_require__(879),
        __webpack_require__(880),
        __webpack_require__(875),
        __webpack_require__(871),
        __webpack_require__(881),
        __webpack_require__(872),
        __webpack_require__(873),
        __webpack_require__(874),
        (module.exports = __webpack_require__(865));
    },
    558: function (module, exports) {},
    648: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(345);
    },
    65: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Link;
      });
      var C_Users_l_gilles_pereira_Documents_app_mobile_NewOrkut_facekut_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(218),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        next_link__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(15), __webpack_require__(215)),
        next_link__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3),
        _excluded = ['href', 'children'];
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
      function Link(_ref) {
        var href = _ref.href,
          children = _ref.children,
          props = Object(
            C_Users_l_gilles_pereira_Documents_app_mobile_NewOrkut_facekut_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a
          )(_ref, _excluded);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
          {
            href: href,
            passHref: !0,
            children: Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
            )('a', Object.assign({}, props, { children: children })),
          }
        );
      }
      Link.displayName = 'Link';
      try {
        (Link.displayName = 'Link'),
          (Link.__docgenInfo = {
            description: '',
            displayName: 'Link',
            props: {
              href: {
                defaultValue: null,
                description: '',
                name: 'href',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Link/index.tsx#Link'] = {
              docgenInfo: Link.__docgenInfo,
              name: 'Link',
              path: 'src/components/Link/index.tsx#Link',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    865: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(345).configure)(
          [__webpack_require__(866)],
          module,
          !1
        );
      }.call(this, __webpack_require__(193)(module)));
    },
    866: function (module, exports, __webpack_require__) {
      var map = {
        './Card/stories.tsx': 882,
        './Link/stories.tsx': 867,
        './Menu/stories.tsx': 876,
        './MenuProfileSidebar/stories.tsx': 868,
        './Profile/stories.tsx': 877,
        './ProfileSummary/stories.tsx': 878,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 866);
    },
    867: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        ___WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(132), __webpack_require__(65)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
      __webpack_exports__.default = {
        title: 'Components/Link',
        component: ___WEBPACK_IMPORTED_MODULE_2__.a,
      };
      var Template = function Template(_ref) {
        var href = _ref.href;
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_2__.a,
          {
            href: href,
            children: Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx
            )('p', { children: 'Link example' }),
          }
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { href: 'https://google.com' };
    },
    868: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(132), __webpack_require__(217)),
        ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(165),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
      __webpack_exports__.default = {
        title: 'Components/MenuProfileSidebar',
        component: ___WEBPACK_IMPORTED_MODULE_3__.a,
        parameters: {
          viewport: {
            viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.a,
            defaultViewport: 'iphone6',
          },
        },
      };
      var Template = function Template(_ref) {
        var githubUser = _ref.githubUser,
          isOpen = _ref.isOpen;
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          ___WEBPACK_IMPORTED_MODULE_3__.a,
          { githubUser: githubUser, isOpen: isOpen }
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { githubUser: 'Gilles30', isOpen: !0 };
    },
    874: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          'decorators',
          function () {
            return decorators;
          }
        );
      __webpack_require__(24),
        __webpack_require__(6),
        __webpack_require__(49),
        __webpack_require__(429),
        __webpack_require__(843),
        __webpack_require__(47),
        __webpack_require__(844),
        __webpack_require__(845),
        __webpack_require__(428);
      var client_api = __webpack_require__(890),
        types = __webpack_require__(888),
        esm = __webpack_require__(5),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(39),
        theme = {
          colors: {
            white: '#ffffff',
            gray: {
              500: '#333333',
              400: '#5a5a5a',
              300: '#c5c6ca',
              200: '#ecf2fa',
              100: '#f1f9fe',
            },
            blue: {
              800: '#2f4a71',
              700: '#5579a1',
              600: '#2e7bb4',
              500: '#308bc5',
              400: '#388bb0',
              300: '#5292c1',
              200: '#bbcde8',
              100: '#d9e6f6',
            },
            pink: { 500: '#d81d99' },
          },
          shapes: { borderRadius: '8px' },
        },
        slicedToArray = __webpack_require__(470),
        objectWithoutProperties = __webpack_require__(218),
        next_link =
          (__webpack_require__(15),
          __webpack_require__(23),
          __webpack_require__(7),
          __webpack_require__(215)),
        link_default = __webpack_require__.n(next_link),
        jsx_runtime = __webpack_require__(3),
        _excluded = ['href', 'children'],
        BASE_URL =
          (react_default.a.createElement, 'http://alurakut.vercel.app/');
      function Link(_ref) {
        var href = _ref.href,
          children = _ref.children,
          props = Object(objectWithoutProperties.a)(_ref, _excluded);
        return Object(jsx_runtime.jsx)(link_default.a, {
          href: href,
          passHref: !0,
          children: Object(jsx_runtime.jsx)(
            'a',
            Object.assign({}, props, { children: children })
          ),
        });
      }
      function AlurakutMenu(_ref2) {
        var githubUser = _ref2.githubUser,
          _React$useState = react_default.a.useState(!1),
          _React$useState2 = Object(slicedToArray.a)(_React$useState, 2),
          isMenuOpen = _React$useState2[0],
          setMenuState = _React$useState2[1];
        return Object(jsx_runtime.jsxs)(AlurakutMenu.Wrapper, {
          isMenuOpen: isMenuOpen,
          children: [
            Object(jsx_runtime.jsxs)('div', {
              className: 'container',
              children: [
                Object(jsx_runtime.jsx)(AlurakutMenu.Logo, {
                  src: BASE_URL + '/logo.svg',
                }),
                Object(jsx_runtime.jsx)('nav', {
                  style: { flex: 1 },
                  children: [
                    { name: 'Inicio', slug: '/' },
                    { name: 'Amigos', slug: '/amigos' },
                    { name: 'Comunidades', slug: '/comunidades' },
                  ].map(function (menuItem) {
                    return Object(jsx_runtime.jsx)(
                      Link,
                      {
                        href: '' + menuItem.slug.toLocaleLowerCase(),
                        children: menuItem.name,
                      },
                      'key__' + menuItem.name.toLocaleLowerCase()
                    );
                  }),
                }),
                Object(jsx_runtime.jsxs)('nav', {
                  children: [
                    Object(jsx_runtime.jsx)('a', {
                      href: '/logout',
                      children: 'Sair',
                    }),
                    Object(jsx_runtime.jsx)('div', {
                      children: Object(jsx_runtime.jsx)('input', {
                        placeholder: 'Pesquisar no Orkut',
                      }),
                    }),
                  ],
                }),
                Object(jsx_runtime.jsxs)('button', {
                  onClick: function onClick() {
                    return setMenuState(!isMenuOpen);
                  },
                  children: [
                    isMenuOpen &&
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/menu-open.svg?v=1',
                      }),
                    !isMenuOpen &&
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/menu-closed.svg?v=1',
                      }),
                  ],
                }),
              ],
            }),
            Object(jsx_runtime.jsx)(AlurakutMenuProfileSidebar, {
              githubUser: githubUser,
            }),
          ],
        });
      }
      function AlurakutMenuProfileSidebar(_ref6) {
        var githubUser = _ref6.githubUser;
        return Object(jsx_runtime.jsx)('div', {
          className: 'alurakutMenuProfileSidebar',
          children: Object(jsx_runtime.jsxs)('div', {
            children: [
              Object(jsx_runtime.jsx)('img', {
                src: 'https://github.com/' + githubUser + '.png',
                style: { borderRadius: '8px' },
              }),
              Object(jsx_runtime.jsx)('hr', {}),
              Object(jsx_runtime.jsx)('p', {
                children: Object(jsx_runtime.jsxs)('a', {
                  className: 'boxLink',
                  href: '/user/' + githubUser,
                  children: ['@', githubUser],
                }),
              }),
              Object(jsx_runtime.jsx)('hr', {}),
              Object(jsx_runtime.jsx)(AlurakutProfileSidebarMenuDefault, {}),
            ],
          }),
        });
      }
      function AlurakutProfileSidebarMenuDefault() {
        return Object(jsx_runtime.jsxs)(
          AlurakutProfileSidebarMenuDefault.Wrapper,
          {
            children: [
              Object(jsx_runtime.jsxs)('nav', {
                children: [
                  Object(jsx_runtime.jsxs)('a', {
                    href: '/',
                    children: [
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/user.svg',
                      }),
                      'Perfil',
                    ],
                  }),
                  Object(jsx_runtime.jsxs)('a', {
                    href: '/',
                    children: [
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/book.svg',
                      }),
                      'Recados',
                    ],
                  }),
                  Object(jsx_runtime.jsxs)('a', {
                    href: '/',
                    children: [
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/camera.svg',
                      }),
                      'Fotos',
                    ],
                  }),
                  Object(jsx_runtime.jsxs)('a', {
                    href: '/',
                    children: [
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/sun.svg',
                      }),
                      'Depoimentos',
                    ],
                  }),
                ],
              }),
              Object(jsx_runtime.jsx)('hr', {}),
              Object(jsx_runtime.jsxs)('nav', {
                children: [
                  Object(jsx_runtime.jsxs)('a', {
                    href: '/',
                    children: [
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '/icons/plus.svg',
                      }),
                      'GitHub Trends',
                    ],
                  }),
                  Object(jsx_runtime.jsxs)('a', {
                    href: '/logout',
                    children: [
                      Object(jsx_runtime.jsx)('img', {
                        src: BASE_URL + '//icons/logout.svg',
                      }),
                      'Sair',
                    ],
                  }),
                ],
              }),
            ],
          }
        );
      }
      function OrkutNostalgicIconSet(props) {
        return Object(jsx_runtime.jsxs)(OrkutNostalgicIconSet.List, {
          children: [
            [
              { name: 'Recados', slug: 'recados', icon: 'book' },
              { name: 'Fotos', slug: 'fotos', icon: 'camera' },
              { name: 'Videos', slug: 'videos', icon: 'video-camera' },
              { name: 'Fãs', slug: 'fas', icon: 'star' },
              { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
            ].map(function (_ref7) {
              var name = _ref7.name,
                slug = _ref7.slug,
                icon = _ref7.icon;
              return Object(jsx_runtime.jsxs)(
                'li',
                {
                  children: [
                    Object(jsx_runtime.jsx)('span', {
                      style: { gridArea: 'title' },
                      className: 'OrkutNostalgicIconSet__title',
                      children: name,
                    }),
                    Object(jsx_runtime.jsxs)('span', {
                      className: 'OrkutNostalgicIconSet__number',
                      style: { gridArea: 'number' },
                      children: [
                        Object(jsx_runtime.jsx)(
                          'img',
                          {
                            className: 'OrkutNostalgicIconSet__iconSample',
                            src:
                              'https://alurakut.vercel.app/icons/' +
                              icon +
                              '.svg',
                          },
                          'orkut__icon_set__' + slug + '_img'
                        ),
                        props[slug] ? props[slug] : 0,
                      ],
                    }),
                  ],
                },
                'orkut__icon_set__' + slug
              );
            }),
            [
              { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
              { name: 'Legal', slug: 'legal', icon: 'cool' },
              { name: 'Sexy', slug: 'sexy', icon: 'heart' },
            ].map(function (_ref8) {
              var _jsx2,
                name = _ref8.name,
                slug = _ref8.slug,
                icon = _ref8.icon,
                total = props[slug] ? props[slug] : 2;
              return Object(jsx_runtime.jsxs)(
                'li',
                {
                  children: [
                    Object(jsx_runtime.jsx)('span', {
                      className: 'OrkutNostalgicIconSet__title',
                      children: name,
                    }),
                    Object(jsx_runtime.jsx)(
                      'span',
                      ((_jsx2 = {
                        className: 'OrkutNostalgicIconSet__iconComplex',
                      }),
                      (_jsx2.className = 'OrkutNostalgicIconSet__number'),
                      (_jsx2.style = { gridArea: 'number' }),
                      (_jsx2.children = [0, 1, 2].map(function (_, index) {
                        var isHeartActive = index <= total - 1;
                        return Object(jsx_runtime.jsx)(
                          'img',
                          {
                            src:
                              'https://alurakut.vercel.app/icons/' +
                              icon +
                              '.svg',
                            style: {
                              marginRight: '2px',
                              opacity: isHeartActive ? 1 : '0.5',
                            },
                          },
                          'orkut__icon_set__' + slug + '_img_' + index
                        );
                      })),
                      _jsx2)
                    ),
                  ],
                },
                'orkut__icon_set__' + slug
              );
            }),
          ],
        });
      }
      (Link.displayName = 'Link'),
        (AlurakutMenu.displayName = 'AlurakutMenu'),
        (AlurakutMenu.Wrapper =
          styled_components_browser_esm.d.header.withConfig({
            displayName: 'AlurakutCommons__Wrapper',
            componentId: 'sc-cz8w8o-0',
          })(
            [
              'width:100%;background-color:#308bc5;.alurakutMenuProfileSidebar{background:white;position:fixed;z-index:100;padding:46px;bottom:0;left:0;right:0;top:48px;transition:0.3s;pointer-events:',
              ';opacity:',
              ';transform:',
              ";@media (min-width:860px){display:none;}> div{max-width:400px;margin:auto;}a{font-size:18px;}.boxLink{font-size:18px;color:#2e7bb4;-webkit-text-decoration:none;text-decoration:none;font-weight:800;}hr{margin-top:12px;margin-bottom:8px;border-color:transparent;border-bottom-color:#ecf2fa;}}.container{background-color:#308bc5;padding:7px 16px;max-width:1110px;margin:auto;display:flex;justify-content:space-between;position:relative;z-index:101;@media (min-width:860px){justify-content:flex-start;}button{border:0;background:transparent;align-self:center;display:inline-block;@media (min-width:860px){display:none;}}nav{display:none;@media (min-width:860px){display:flex;}a{font-size:12px;color:white;padding:10px 16px;position:relative;text-decoration:none;&:after{content:' ';background-color:#5292c1;display:block;position:absolute;width:1px;height:12px;margin:auto;left:0;top:0;bottom:0;}}}input{color:#ffffff;background:#5579a1;padding:10px 42px;border:0;background-image:url(",
              ');background-position:15px center;background-repeat:no-repeat;border-radius:1000px;font-size:12px;::placeholder{color:#ffffff;opacity:1;}}}',
            ],
            function (_ref3) {
              return _ref3.isMenuOpen ? 'all' : 'none';
            },
            function (_ref4) {
              return _ref4.isMenuOpen ? '1' : '0';
            },
            function (_ref5) {
              return _ref5.isMenuOpen
                ? 'translateY(0)'
                : 'translateY(calc(-100% - 48px))';
            },
            BASE_URL + '/icons/search.svg'
          )),
        (AlurakutMenu.Logo = styled_components_browser_esm.d.img.withConfig({
          displayName: 'AlurakutCommons__Logo',
          componentId: 'sc-cz8w8o-1',
        })([
          'background-color:#ffffff;padding:9px 14px;border-radius:1000px;height:34px;',
        ])),
        (AlurakutMenuProfileSidebar.displayName = 'AlurakutMenuProfileSidebar'),
        (AlurakutProfileSidebarMenuDefault.displayName =
          'AlurakutProfileSidebarMenuDefault'),
        (AlurakutProfileSidebarMenuDefault.Wrapper =
          styled_components_browser_esm.d.div.withConfig({
            displayName: 'AlurakutCommons__Wrapper',
            componentId: 'sc-cz8w8o-2',
          })([
            'a{font-size:12px;color:#2e7bb4;margin-bottom:16px;display:flex;align-items:center;justify-content:flex-start;text-decoration:none;img{width:16px;height:16px;margin-right:5px;}}',
          ])),
        (OrkutNostalgicIconSet.displayName = 'OrkutNostalgicIconSet'),
        (OrkutNostalgicIconSet.List =
          styled_components_browser_esm.d.ul.withConfig({
            displayName: 'AlurakutCommons__List',
            componentId: 'sc-cz8w8o-3',
          })([
            "margin-top:32px;list-style:none;display:flex;justify-content:space-between;flex-wrap:wrap;li{font-size:12px;color:#5a5a5a;display:grid;grid-template-areas:'title title' 'number number';&:not(:last-child){margin-right:5px;}.OrkutNostalgicIconSet__title{display:block;font-style:italic;}.OrkutNostalgicIconSet__number{min-width:15px;display:flex;align-items:center;justify-content:flex-start;.OrkutNostalgicIconSet__iconSample{margin-right:7px;}}}",
          ]));
      var AlurakutLoginScreen = Object(styled_components_browser_esm.c)([
          ":root{--backgroundPrimary:#d9e6f6;--backgroundSecondary:#f1f9fe;--backgroundTertiary:#ffffff;--backgroundQuarternary:#bbcde8;--colorPrimary:#2e7bb4;--colorSecondary:#388bb0;--colorTertiary:#2f4a71;--colorQuarternary:#d81d99;--textPrimaryColor:#333333;--textSecondaryColor:#ffffff;--textTertiaryColor:#5a5a5a;--textQuarternaryColor:#c5c6ca;--commonRadius:8px;}.loginScreen{padding:16px;max-width:1110px;display:grid;--gap:12px;--gutter:16px;grid-gap:var(--gap);grid-template-areas:'logoArea' 'formArea' 'footerArea';@media (min-width:860px){grid-template-columns:2fr 1fr;grid-template-areas:'logoArea formArea' 'logoArea formArea' 'footerArea footerArea';}.logoArea{grid-area:logoArea;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);padding:var(--gutter);text-align:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center;min-height:263px;@media (min-width:860px){min-height:368px;}p{font-size:12px;line-height:1.2;&:not(:last-child){margin-bottom:12px;}strong{color:var(--colorQuarternary);}}img{max-height:45px;margin-bottom:36px;}}.formArea{grid-area:formArea;display:flex;flex-wrap:wrap;flex-direction:column;.box{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:var(--gutter);padding-left:50px;padding-right:50px;background-color:var(--backgroundSecondary);border-radius:var(--commonRadius);flex:1;&:not(:last-child){margin-bottom:var(--gap);}&:first-child{min-height:224px;@media (min-width:860px){min-height:282px;}}p{font-size:14px;}a{text-decoration:none;color:var(--colorPrimary);}input{width:100%;display:block;border:1px solid var(--textQuarternaryColor);padding:12px;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);margin-top:24px;margin-bottom:16px;}button{width:100%;display:block;border:0;padding:12px;border-radius:var(--commonRadius);background-color:var(--colorPrimary);color:var(--textSecondaryColor);}}}.footerArea{grid-area:footerArea;background-color:var(--backgroundQuarternary);border-radius:var(--commonRadius);padding:8px;p{font-size:12px;text-align:center;a{text-decoration:none;color:var(--colorPrimary);}}}}",
        ]),
        AlurakutStyles = Object(styled_components_browser_esm.c)(
          [
            '*::-webkit-scrollbar{width:8px;}*::-webkit-scrollbar-track{background:#f1f1f1;}*::-webkit-scrollbar-thumb{background:#888;border-radius:10px;}*::-webkit-scrollbar-thumb:hover{background:#555;}a,button{cursor:pointer;transition:0.3s;outline:0;&:hover,&:focus{opacity:0.8;}&:disabled{cursor:not-allowed;opacity:0.5;}}input{transition:0.3s;outline:0;&:disabled{cursor:not-allowed;opacity:0.5;}&:hover,&:focus{box-shadow:0px 0px 5px #33333357;}}',
            '',
          ],
          AlurakutLoginScreen
        );
      (AlurakutMenu.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'AlurakutMenu',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\lib\\AlurakutCommons.js'] = {
            name: 'AlurakutMenu',
            docgenInfo: AlurakutMenu.__docgenInfo,
            path: 'src\\lib\\AlurakutCommons.js',
          }),
        (AlurakutProfileSidebarMenuDefault.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'AlurakutProfileSidebarMenuDefault',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\lib\\AlurakutCommons.js'] = {
            name: 'AlurakutProfileSidebarMenuDefault',
            docgenInfo: AlurakutProfileSidebarMenuDefault.__docgenInfo,
            path: 'src\\lib\\AlurakutCommons.js',
          }),
        (OrkutNostalgicIconSet.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'OrkutNostalgicIconSet',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src\\lib\\AlurakutCommons.js'] = {
            name: 'OrkutNostalgicIconSet',
            docgenInfo: OrkutNostalgicIconSet.__docgenInfo,
            path: 'src\\lib\\AlurakutCommons.js',
          });
      var GlobalStyles = Object(styled_components_browser_esm.b)(
          [
            '*{margin:0;padding:0;box-sizing:border-box;}body{background:',
            ';font-family:sans-serif;}#__next{display:flex;min-height:100vh;flex-direction:column;}img{max-width:100%;height:auto;display:block;}',
            '',
          ],
          function (_ref) {
            return _ref.theme.colors.blue[100];
          },
          AlurakutStyles
        ),
        parameters =
          (react_default.a.createElement,
          {
            actions: { argTypesRegex: '^on[A-Z].*' },
            controls: {
              matchers: { color: /(background|color)$/i, date: /Date$/ },
            },
          }),
        decorators = [
          function (Story) {
            return Object(jsx_runtime.jsxs)(styled_components_browser_esm.a, {
              theme: theme,
              children: [
                Object(jsx_runtime.jsx)(GlobalStyles, {}),
                Object(jsx_runtime.jsx)(Story, {}),
              ],
            });
          },
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(client_api.c)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(client_api.d)(loader, !1);
            });
          case 'parameters':
            return Object(client_api.e)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.a)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.b)(enhancer);
            });
          case 'render':
            return Object(types.setGlobalRender)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(client_api.e)(v, !1);
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    876: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Desktop', function () {
          return Desktop;
        }),
        __webpack_require__.d(__webpack_exports__, 'Mobile', function () {
          return Mobile;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        preview = (__webpack_require__(132), __webpack_require__(217)),
        Link =
          (__webpack_require__(23),
          __webpack_require__(7),
          __webpack_require__(65)),
        MenuProfileSidebar = __webpack_require__(165),
        styled_components_browser_esm = __webpack_require__(39),
        Wrapper = styled_components_browser_esm.d.header.withConfig({
          displayName: 'styles__Wrapper',
          componentId: 'sc-17aro2s-0',
        })(
          [
            'width:100%;background-color:',
            ';.container{background-color:',
            ";padding:7px 16px;max-width:1110px;margin:auto;display:flex;justify-content:space-between;position:relative;z-index:101;@media (min-width:860px){justify-content:flex-start;}button{border:0;background:transparent;align-self:center;display:inline-block;@media (min-width:860px){display:none;}}nav{display:none;@media (min-width:860px){display:flex;}a{font-size:12px;color:white;padding:10px 16px;position:relative;text-decoration:none;&:after{content:' ';background:",
            ';display:block;position:absolute;width:1px;height:12px;margin:auto;left:0;top:0;bottom:0;}}}.actions{flex:1;}input{color:',
            ';background:',
            ';padding:10px 42px;border:0;background-image:url(',
            ');background-position:15px center;background-repeat:no-repeat;border-radius:1000px;font-size:12px;::placeholder{color:',
            ';opacity:1;}}}',
          ],
          function (_ref) {
            return _ref.theme.colors.blue[500];
          },
          function (_ref2) {
            return _ref2.theme.colors.blue[500];
          },
          function (_ref3) {
            return _ref3.theme.colors.blue[300];
          },
          function (_ref4) {
            return _ref4.theme.colors.white;
          },
          function (_ref5) {
            return _ref5.theme.colors.blue[700];
          },
          Object({
            NODE_ENV: 'production',
            NODE_PATH: [],
            STORYBOOK: 'true',
            PUBLIC_URL: '.',
          }).NEXT_PUBLIC_BASE_URL + '/icons/search.svg',
          function (_ref6) {
            return _ref6.theme.colors.white;
          }
        ),
        Logo = styled_components_browser_esm.d.img.withConfig({
          displayName: 'styles__Logo',
          componentId: 'sc-17aro2s-1',
        })(
          [
            'background-color:',
            ';padding:9px 14px;border-radius:1000px;height:34px;',
          ],
          function (_ref7) {
            return _ref7.theme.colors.white;
          }
        ),
        jsx_runtime = __webpack_require__(3);
      react_default.a.createElement;
      function Menu(_ref) {
        var githubUser = _ref.githubUser,
          _useState = Object(react.useState)(!1),
          isOpen = _useState[0],
          setIsOpen = _useState[1];
        return Object(jsx_runtime.jsxs)(Wrapper, {
          children: [
            Object(jsx_runtime.jsxs)('div', {
              className: 'container',
              children: [
                Object(jsx_runtime.jsx)(Logo, {
                  src:
                    Object({
                      NODE_ENV: 'production',
                      NODE_PATH: [],
                      STORYBOOK: 'true',
                      PUBLIC_URL: '.',
                    }).NEXT_PUBLIC_BASE_URL + '/logo.svg',
                }),
                Object(jsx_runtime.jsx)('nav', {
                  className: 'actions',
                  children: [
                    { name: 'Inicio', slug: '/' },
                    { name: 'Amigos', slug: '/amigos' },
                    { name: 'Comunidades', slug: '/comunidades' },
                  ].map(function (menuItem) {
                    return Object(jsx_runtime.jsx)(
                      Link.a,
                      {
                        href: '' + menuItem.slug.toLocaleLowerCase(),
                        children: menuItem.name,
                      },
                      'key__' + menuItem.name.toLocaleLowerCase()
                    );
                  }),
                }),
                Object(jsx_runtime.jsxs)('nav', {
                  children: [
                    Object(jsx_runtime.jsx)(Link.a, {
                      href: '/logout',
                      children: 'Sair',
                    }),
                    Object(jsx_runtime.jsx)('div', {
                      children: Object(jsx_runtime.jsx)('input', {
                        placeholder: 'Pesquisar no Alurakut',
                      }),
                    }),
                  ],
                }),
                Object(jsx_runtime.jsxs)('button', {
                  onClick: function toggleMenu() {
                    setIsOpen(function (prevState) {
                      return !prevState;
                    });
                  },
                  children: [
                    isOpen &&
                      Object(jsx_runtime.jsx)('img', {
                        src:
                          Object({
                            NODE_ENV: 'production',
                            NODE_PATH: [],
                            STORYBOOK: 'true',
                            PUBLIC_URL: '.',
                          }).NEXT_PUBLIC_BASE_URL +
                          '/icons/menu-open.svg?v=' +
                          Object({
                            NODE_ENV: 'production',
                            NODE_PATH: [],
                            STORYBOOK: 'true',
                            PUBLIC_URL: '.',
                          }).NEXT_PUBLIC_VERSION,
                      }),
                    !isOpen &&
                      Object(jsx_runtime.jsx)('img', {
                        src:
                          Object({
                            NODE_ENV: 'production',
                            NODE_PATH: [],
                            STORYBOOK: 'true',
                            PUBLIC_URL: '.',
                          }).NEXT_PUBLIC_BASE_URL +
                          '/icons/menu-closed.svg?v=' +
                          Object({
                            NODE_ENV: 'production',
                            NODE_PATH: [],
                            STORYBOOK: 'true',
                            PUBLIC_URL: '.',
                          }).NEXT_PUBLIC_VERSION,
                      }),
                  ],
                }),
              ],
            }),
            Object(jsx_runtime.jsx)(MenuProfileSidebar.a, {
              githubUser: githubUser,
              isOpen: isOpen,
            }),
          ],
        });
      }
      Menu.displayName = 'Menu';
      try {
        (Menu.displayName = 'Menu'),
          (Menu.__docgenInfo = {
            description: '',
            displayName: 'Menu',
            props: {
              githubUser: {
                defaultValue: null,
                description: '',
                name: 'githubUser',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Menu/index.tsx#Menu'] = {
              docgenInfo: Menu.__docgenInfo,
              name: 'Menu',
              path: 'src/components/Menu/index.tsx#Menu',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      react_default.a.createElement,
        (__webpack_exports__.default = {
          title: 'Components/Menu',
          component: Menu,
        });
      var stories_Template = function Template(_ref) {
        var githubUser = _ref.githubUser;
        return Object(jsx_runtime.jsx)(Menu, { githubUser: githubUser });
      };
      stories_Template.displayName = 'Template';
      var Desktop = stories_Template.bind({});
      Desktop.args = { githubUser: 'Gilles30' };
      var Mobile = stories_Template.bind({});
      (Mobile.args = { githubUser: 'Gilles30' }),
        (Mobile.parameters = {
          viewport: { viewports: preview.a, defaultViewport: 'iphone6' },
        });
    },
    877: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm =
          (__webpack_require__(132), __webpack_require__(39)),
        styles = __webpack_require__(216),
        Container = Object(styled_components_browser_esm.d)(
          styles.a
        ).withConfig({
          displayName: 'styles__Container',
          componentId: 'sc-1y3b7ff-0',
        })(['img{border-radius:', ';}'], function (_ref) {
          return _ref.theme.shapes.borderRadius;
        }),
        jsx_runtime = __webpack_require__(3);
      react_default.a.createElement;
      function Profile(_ref) {
        var githubUser = _ref.githubUser;
        return Object(jsx_runtime.jsx)(Container, {
          children: Object(jsx_runtime.jsx)('img', {
            src: 'https://github.com/' + githubUser + '.png',
            alt: 'Avatar',
          }),
        });
      }
      Profile.displayName = 'Profile';
      try {
        (Profile.displayName = 'Profile'),
          (Profile.__docgenInfo = {
            description: '',
            displayName: 'Profile',
            props: {
              githubUser: {
                defaultValue: null,
                description: '',
                name: 'githubUser',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Profile/index.tsx#Profile'
            ] = {
              docgenInfo: Profile.__docgenInfo,
              name: 'Profile',
              path: 'src/components/Profile/index.tsx#Profile',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      react_default.a.createElement,
        (__webpack_exports__.default = {
          title: 'Components/Profile',
          component: Profile,
        });
      var stories_Template = function Template(_ref) {
        var githubUser = _ref.githubUser;
        return Object(jsx_runtime.jsx)('div', {
          style: { maxWidth: 400, maxHeight: 400 },
          children: Object(jsx_runtime.jsx)(Profile, {
            githubUser: githubUser,
          }),
        });
      };
      stories_Template.displayName = 'Template';
      var Default = stories_Template.bind({});
      Default.args = { githubUser: 'Gilles30' };
    },
    878: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Container =
          (__webpack_require__(132),
          __webpack_require__(23),
          __webpack_require__(7),
          __webpack_require__(39).d.ul.withConfig({
            displayName: 'styles__Container',
            componentId: 'sc-1k5u4hj-0',
          })(
            [
              'margin-top:32px;list-style:none;display:flex;justify-content:space-between;flex-wrap:wrap;li{font-size:12px;color:',
              ";display:grid;grid-template-areas:'title title' 'number number';&:not(:last-child){margin-right:5px;}.OrkutNostalgicIconSet__title{display:block;font-style:italic;}.OrkutNostalgicIconSet__number{min-width:15px;display:flex;align-items:center;justify-content:flex-start;.OrkutNostalgicIconSet__iconSample{margin-right:7px;}}}",
            ],
            function (_ref) {
              return _ref.theme.colors.gray[400];
            }
          )),
        jsx_runtime = __webpack_require__(3);
      react_default.a.createElement;
      function ProfileSummary(props) {
        return Object(jsx_runtime.jsxs)(Container, {
          children: [
            [
              { name: 'Recados', slug: 'recados', icon: 'book' },
              { name: 'Fotos', slug: 'fotos', icon: 'camera' },
              { name: 'Videos', slug: 'videos', icon: 'video-camera' },
              { name: 'Fãs', slug: 'fas', icon: 'star' },
              { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
            ].map(function (_ref) {
              var name = _ref.name,
                slug = _ref.slug,
                icon = _ref.icon;
              return Object(jsx_runtime.jsxs)(
                'li',
                {
                  children: [
                    Object(jsx_runtime.jsx)('span', {
                      style: { gridArea: 'title' },
                      className: 'OrkutNostalgicIconSet__title',
                      children: name,
                    }),
                    Object(jsx_runtime.jsxs)('span', {
                      className: 'OrkutNostalgicIconSet__number',
                      style: { gridArea: 'number' },
                      children: [
                        Object(jsx_runtime.jsx)(
                          'img',
                          {
                            className: 'OrkutNostalgicIconSet__iconSample',
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL +
                              '/icons/' +
                              icon +
                              '.svg',
                          },
                          'orkut__icon_set__' + slug + '_img'
                        ),
                        props[slug] ? props[slug] : 0,
                      ],
                    }),
                  ],
                },
                'orkut__icon_set__' + slug
              );
            }),
            [
              { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
              { name: 'Legal', slug: 'legal', icon: 'cool' },
              { name: 'Sexy', slug: 'sexy', icon: 'heart' },
            ].map(function (_ref2) {
              var name = _ref2.name,
                slug = _ref2.slug,
                icon = _ref2.icon,
                total = props[slug] ? props[slug] : 2;
              return Object(jsx_runtime.jsxs)(
                'li',
                {
                  children: [
                    Object(jsx_runtime.jsx)('span', {
                      className: 'OrkutNostalgicIconSet__title',
                      children: name,
                    }),
                    Object(jsx_runtime.jsx)('span', {
                      className:
                        'OrkutNostalgicIconSet__iconComplex OrkutNostalgicIconSet__number',
                      style: { gridArea: 'number' },
                      children: [0, 1, 2].map(function (_, index) {
                        var isHeartActive = index <= total - 1;
                        return Object(jsx_runtime.jsx)(
                          'img',
                          {
                            src:
                              Object({
                                NODE_ENV: 'production',
                                NODE_PATH: [],
                                STORYBOOK: 'true',
                                PUBLIC_URL: '.',
                              }).NEXT_PUBLIC_BASE_URL +
                              '/icons/' +
                              icon +
                              '.svg',
                            style: {
                              marginRight: '2px',
                              opacity: isHeartActive ? 1 : '0.5',
                            },
                          },
                          'orkut__icon_set__' + slug + '_img_' + index
                        );
                      }),
                    }),
                  ],
                },
                'orkut__icon_set__' + slug
              );
            }),
          ],
        });
      }
      ProfileSummary.displayName = 'ProfileSummary';
      try {
        (ProfileSummary.displayName = 'ProfileSummary'),
          (ProfileSummary.__docgenInfo = {
            description: '',
            displayName: 'ProfileSummary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ProfileSummary/index.tsx#ProfileSummary'
            ] = {
              docgenInfo: ProfileSummary.__docgenInfo,
              name: 'ProfileSummary',
              path: 'src/components/ProfileSummary/index.tsx#ProfileSummary',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      react_default.a.createElement,
        (__webpack_exports__.default = {
          title: 'Components/ProfileSummary',
          component: ProfileSummary,
        });
      var stories_Template = function Template() {
        return Object(jsx_runtime.jsx)(ProfileSummary, {});
      };
      stories_Template.displayName = 'Template';
      var Default = stories_Template.bind({});
    },
    882: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styles = (__webpack_require__(132), __webpack_require__(216)),
        jsx_runtime = __webpack_require__(3);
      react_default.a.createElement;
      function Card(_ref) {
        var children = _ref.children;
        return Object(jsx_runtime.jsx)(styles.a, { children: children });
      }
      Card.displayName = 'Card';
      try {
        (Card.displayName = 'Card'),
          (Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Card/index.tsx#Card'] = {
              docgenInfo: Card.__docgenInfo,
              name: 'Card',
              path: 'src/components/Card/index.tsx#Card',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      react_default.a.createElement,
        (__webpack_exports__.default = {
          title: 'Components/Card',
          component: Card,
        });
      var stories_Template = function Template() {
        return Object(jsx_runtime.jsx)(Card, {
          children: Object(jsx_runtime.jsx)('h1', { children: 'Card content' }),
        });
      };
      stories_Template.displayName = 'Template';
      var Default = stories_Template.bind({});
    },
  },
  [[490, 2, 3]],
]);
