(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,690];
exports.modules = {

/***/ 5609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./layout/context/layoutcontext.js
var layoutcontext = __webpack_require__(389);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "primereact/hooks"
const hooks_namespaceObject = require("primereact/hooks");
// EXTERNAL MODULE: external "primereact/utils"
var utils_ = __webpack_require__(4355);
;// CONCATENATED MODULE: ./layout/AppFooter.js




const AppFooter = ()=>{
    const { layoutConfig  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: `${contextPath}/layout/images/logo-${layoutConfig.colorScheme === "light" ? "dark" : "white"}.svg`,
                alt: "Logo",
                height: "20",
                className: "mr-2"
            }),
            "by",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-medium ml-2",
                children: "PrimeReact"
            })
        ]
    });
};
/* harmony default export */ const layout_AppFooter = (AppFooter);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "primereact/ripple"
var ripple_ = __webpack_require__(1267);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
;// CONCATENATED MODULE: ./layout/context/menucontext.js


const MenuContext = /*#__PURE__*/ external_react_default().createContext();
const MenuProvider = (props)=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const value = {
        activeMenu,
        setActiveMenu
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuContext.Provider, {
        value: value,
        children: props.children
    });
};

;// CONCATENATED MODULE: ./layout/AppMenuitem.js








const AppMenuitem = (props)=>{
    const { activeMenu , setActiveMenu  } = (0,external_react_.useContext)(MenuContext);
    const router = (0,router_.useRouter)();
    const item = props.item;
    const key = props.parentKey ? props.parentKey + "-" + props.index : String(props.index);
    const isActiveRoute = item.to && router.pathname === item.to;
    const active = activeMenu === key || activeMenu.startsWith(key + "-");
    (0,external_react_.useEffect)(()=>{
        if (item.to && router.pathname === item.to) {
            setActiveMenu(key);
        }
        const onRouteChange = (url)=>{
            if (item.to && item.to === url) {
                setActiveMenu(key);
            }
        };
        router.events.on("routeChangeComplete", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
        };
    }, []);
    const itemClick = (event)=>{
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        //execute command
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        // toggle active state
        if (item.items) setActiveMenu(active ? props.parentKey : key);
        else setActiveMenu(key);
    };
    const subMenu = item.items && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.CSSTransition, {
        timeout: {
            enter: 1000,
            exit: 450
        },
        classNames: "layout-submenu",
        in: props.root ? true : active,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: item.items.map((child, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(AppMenuitem, {
                    item: child,
                    index: i,
                    className: child.badgeClass,
                    parentKey: key
                }, child.label);
            })
        })
    }, item.label);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (0,utils_.classNames)({
            "layout-root-menuitem": props.root,
            "active-menuitem": active
        }),
        children: [
            props.root && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-menuitem-root-text",
                children: item.label
            }),
            (!item.to || item.items) && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: item.url,
                onClick: (e)=>itemClick(e),
                className: (0,utils_.classNames)(item.class, "p-ripple"),
                target: item.target,
                tabIndex: "0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_.Ripple, {})
                ]
            }) : null,
            item.to && !item.items && item.visible !== false ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.to,
                replace: item.replaceUrl,
                target: item.target,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    onClick: (e)=>itemClick(e),
                    className: (0,utils_.classNames)(item.class, "p-ripple", {
                        "active-route": isActiveRoute
                    }),
                    target: item.target,
                    tabIndex: "0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: (0,utils_.classNames)("layout-menuitem-icon", item.icon)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "layout-menuitem-text",
                            children: item.label
                        }),
                        item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ripple_.Ripple, {})
                    ]
                })
            }) : null,
            subMenu
        ]
    });
};
/* harmony default export */ const layout_AppMenuitem = (AppMenuitem);

;// CONCATENATED MODULE: ./layout/AppMenu.js







const AppMenu = ()=>{
    const { layoutConfig  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: "Home",
            items: [
                {
                    label: "Dashboard",
                    icon: "pi pi-fw pi-home",
                    to: "/"
                }
            ]
        },
        {
            label: "UI Components",
            items: [
                {
                    label: "Form Layout",
                    icon: "pi pi-fw pi-id-card",
                    to: "/uikit/formlayout"
                },
                {
                    label: "Input",
                    icon: "pi pi-fw pi-check-square",
                    to: "/uikit/input"
                },
                {
                    label: "Float Label",
                    icon: "pi pi-fw pi-bookmark",
                    to: "/uikit/floatlabel"
                },
                {
                    label: "Invalid State",
                    icon: "pi pi-fw pi-exclamation-circle",
                    to: "/uikit/invalidstate"
                },
                {
                    label: "Button",
                    icon: "pi pi-fw pi-mobile",
                    to: "/uikit/button",
                    class: "rotated-icon"
                },
                {
                    label: "Table",
                    icon: "pi pi-fw pi-table",
                    to: "/uikit/table"
                },
                {
                    label: "List",
                    icon: "pi pi-fw pi-list",
                    to: "/uikit/list"
                },
                {
                    label: "Tree",
                    icon: "pi pi-fw pi-share-alt",
                    to: "/uikit/tree"
                },
                {
                    label: "Panel",
                    icon: "pi pi-fw pi-tablet",
                    to: "/uikit/panel"
                },
                {
                    label: "Overlay",
                    icon: "pi pi-fw pi-clone",
                    to: "/uikit/overlay"
                },
                {
                    label: "Media",
                    icon: "pi pi-fw pi-image",
                    to: "/uikit/media"
                },
                {
                    label: "Menu",
                    icon: "pi pi-fw pi-bars",
                    to: "/uikit/menu",
                    preventExact: true
                },
                {
                    label: "Message",
                    icon: "pi pi-fw pi-comment",
                    to: "/uikit/message"
                },
                {
                    label: "File",
                    icon: "pi pi-fw pi-file",
                    to: "/uikit/file"
                },
                {
                    label: "Chart",
                    icon: "pi pi-fw pi-chart-bar",
                    to: "/uikit/charts"
                },
                {
                    label: "Misc",
                    icon: "pi pi-fw pi-circle",
                    to: "/uikit/misc"
                }
            ]
        },
        {
            label: "Prime Blocks",
            items: [
                {
                    label: "Free Blocks",
                    icon: "pi pi-fw pi-eye",
                    to: "/blocks",
                    badge: "NEW"
                },
                {
                    label: "All Blocks",
                    icon: "pi pi-fw pi-globe",
                    url: "https://www.primefaces.org/primeblocks-react",
                    target: "_blank"
                }
            ]
        },
        {
            label: "Utilities",
            items: [
                {
                    label: "PrimeIcons",
                    icon: "pi pi-fw pi-prime",
                    to: "/utilities/icons"
                },
                {
                    label: "PrimeFlex",
                    icon: "pi pi-fw pi-desktop",
                    url: "https://www.primefaces.org/primeflex/",
                    target: "_blank"
                }
            ]
        },
        {
            label: "Pages",
            icon: "pi pi-fw pi-briefcase",
            to: "/pages",
            items: [
                {
                    label: "Landing",
                    icon: "pi pi-fw pi-globe",
                    to: "/landing"
                },
                {
                    label: "Auth",
                    icon: "pi pi-fw pi-user",
                    items: [
                        {
                            label: "Login",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login"
                        },
                        {
                            label: "Error",
                            icon: "pi pi-fw pi-times-circle",
                            to: "/auth/error"
                        },
                        {
                            label: "Access Denied",
                            icon: "pi pi-fw pi-lock",
                            to: "/auth/access"
                        }
                    ]
                },
                {
                    label: "Crud",
                    icon: "pi pi-fw pi-pencil",
                    to: "/pages/crud"
                },
                {
                    label: "Timeline",
                    icon: "pi pi-fw pi-calendar",
                    to: "/pages/timeline"
                },
                {
                    label: "Not Found",
                    icon: "pi pi-fw pi-exclamation-circle",
                    to: "/pages/notfound"
                },
                {
                    label: "Empty",
                    icon: "pi pi-fw pi-circle-off",
                    to: "/pages/empty"
                }
            ]
        },
        {
            label: "Hierarchy",
            items: [
                {
                    label: "Submenu 1",
                    icon: "pi pi-fw pi-bookmark",
                    items: [
                        {
                            label: "Submenu 1.1",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 1.1.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.1.2",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.1.3",
                                    icon: "pi pi-fw pi-bookmark"
                                }, 
                            ]
                        },
                        {
                            label: "Submenu 1.2",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 1.2.1",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Submenu 2",
                    icon: "pi pi-fw pi-bookmark",
                    items: [
                        {
                            label: "Submenu 2.1",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 2.1.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 2.1.2",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        },
                        {
                            label: "Submenu 2.2",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 2.2.1",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Get Started",
            items: [
                {
                    label: "Documentation",
                    icon: "pi pi-fw pi-question",
                    to: "/documentation"
                },
                {
                    label: "View Source",
                    icon: "pi pi-fw pi-search",
                    url: "https://github.com/primefaces/sakai-react",
                    target: "_blank"
                }
            ]
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "layout-menu",
            children: [
                model.map((item, i)=>{
                    return !item.seperator ? /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenuitem, {
                        item: item,
                        root: true,
                        index: i
                    }, item.label) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "menu-separator"
                    });
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://www.primefaces.org/primeblocks-react",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        target: "_blank",
                        style: {
                            cursor: "pointer"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "Prime Blocks",
                            className: "w-full mt-3",
                            src: `${contextPath}/layout/images/banner-primeblocks${layoutConfig.colorScheme === "light" ? "" : "-dark"}.png`
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_AppMenu = (AppMenu);

;// CONCATENATED MODULE: ./layout/AppSidebar.js


const AppSidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenu, {});
};
/* harmony default export */ const layout_AppSidebar = (AppSidebar);

;// CONCATENATED MODULE: ./layout/AppTopbar.js







const AppTopbar = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { layoutConfig , layoutState , onMenuToggle , showProfileSidebar  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const menubuttonRef = (0,external_react_.useRef)(null);
    const topbarmenuRef = (0,external_react_.useRef)(null);
    const topbarmenubuttonRef = (0,external_react_.useRef)(null);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            menubutton: menubuttonRef.current,
            topbarmenu: topbarmenuRef.current,
            topbarmenubutton: topbarmenubuttonRef.current
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-topbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "layout-topbar-logo",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `${contextPath}/layout/images/logo-${layoutConfig.colorScheme !== "light" ? "white" : "dark"}.svg`,
                                width: "47.22px",
                                height: "35px",
                                widt: "true",
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "SAKAI"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                ref: menubuttonRef,
                type: "button",
                className: "p-link layout-menu-button layout-topbar-button",
                onClick: onMenuToggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-bars"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                ref: topbarmenubuttonRef,
                type: "button",
                className: "p-link layout-topbar-menu-button layout-topbar-button",
                onClick: showProfileSidebar,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-ellipsis-v"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: topbarmenuRef,
                className: (0,utils_.classNames)("layout-topbar-menu", {
                    "layout-topbar-menu-mobile-active": layoutState.profileSidebarVisible
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "button",
                        className: "p-link layout-topbar-button",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "pi pi-calendar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Calendar"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "button",
                        className: "p-link layout-topbar-button",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "pi pi-user"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Profile"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/documentation",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            type: "button",
                            className: "p-link layout-topbar-button",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "pi pi-cog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Settings"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const layout_AppTopbar = (AppTopbar);

// EXTERNAL MODULE: ./layout/AppConfig.js
var AppConfig = __webpack_require__(4442);
// EXTERNAL MODULE: external "primereact/api"
var api_ = __webpack_require__(2250);
var api_default = /*#__PURE__*/__webpack_require__.n(api_);
;// CONCATENATED MODULE: ./layout/layout.js













const Layout = (props)=>{
    const { layoutConfig , layoutState , setLayoutState  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const topbarRef = (0,external_react_.useRef)(null);
    const sidebarRef = (0,external_react_.useRef)(null);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    const router = (0,router_.useRouter)();
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = (0,hooks_namespaceObject.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = (0,hooks_namespaceObject.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(topbarRef.current.topbarmenu.isSameNode(event.target) || topbarRef.current.topbarmenu.contains(event.target) || topbarRef.current.topbarmenubutton.isSameNode(event.target) || topbarRef.current.topbarmenubutton.contains(event.target));
            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });
    const hideMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false
            }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };
    const hideProfileMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: false
            }));
        unbindProfileMenuOutsideClickListener();
    };
    const blockBodyScroll = ()=>{
        utils_.DomHandler.addClass("blocked-scroll");
    };
    const unblockBodyScroll = ()=>{
        utils_.DomHandler.removeClass("blocked-scroll");
    };
    (0,external_react_.useEffect)(()=>{
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }
        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive
    ]);
    (0,external_react_.useEffect)(()=>{
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [
        layoutState.profileSidebarVisible
    ]);
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeComplete", ()=>{
            hideMenu();
            hideProfileMenu();
        });
    }, []);
    (api_default()).ripple = true;
    (0,hooks_namespaceObject.useUnmountEffect)(()=>{
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });
    const containerClass = (0,utils_.classNames)("layout-wrapper", {
        "layout-theme-light": layoutConfig.colorScheme === "light",
        "layout-theme-dark": layoutConfig.colorScheme === "dark",
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Sakai by PrimeReact | Free Admin Template for NextJS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Sakai by PrimeReact | Free Admin Template for NextJS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://www.primefaces.org/sakai-react"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://www.primefaces.org/static/social/sakai-nextjs.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:ttl",
                        content: "604800"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: `${contextPath}/favicon.ico`,
                        type: "image/x-icon"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: containerClass,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_AppTopbar, {
                        ref: topbarRef
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: sidebarRef,
                        className: "layout-sidebar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_AppSidebar, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "layout-main-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "layout-main",
                                children: props.children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(layout_AppFooter, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AppConfig/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layout-mask"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.css
var primereact = __webpack_require__(1909);
;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    if (Component.getLayout) {
        return /*#__PURE__*/ jsx_runtime_.jsx(layoutcontext/* LayoutProvider */.a, {
            children: Component.getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }))
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(layoutcontext/* LayoutProvider */.a, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        });
    }
}


/***/ }),

/***/ 1909:
/***/ (() => {



/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 2250:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/api");

/***/ }),

/***/ 1088:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/button");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/inputswitch");

/***/ }),

/***/ 2948:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/radiobutton");

/***/ }),

/***/ 1267:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/ripple");

/***/ }),

/***/ 2720:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/sidebar");

/***/ }),

/***/ 4355:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/utils");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,389,442], () => (__webpack_exec__(5609)));
module.exports = __webpack_exports__;

})();