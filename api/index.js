var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/l269626/github/purge-per-route/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var import_react3 = require("react");
var import_react4 = require("@headlessui/react");
var import_outline = require("@heroicons/react/outline");

// app/styles/root.css
var root_default = "/build/_assets/root-7FTPFLB4.css";

// app/utils.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// route:/Users/l269626/github/purge-per-route/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
    { rel: "stylesheet", href: root_default }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Purge Per Route",
  viewport: "width=device-width,initial-scale=1"
});
var user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};
var userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
function App() {
  var _a;
  const { pathname } = (0, import_react2.useLocation)();
  const navigation2 = ["application", "marketing", "ecommerce"].map((route) => {
    const href = `/${route}`;
    const regex = RegExp(route);
    return {
      name: route,
      href,
      current: regex.test(pathname)
    };
  });
  const title = `${(_a = navigation2.find((current) => current)) == null ? void 0 : _a.name} examples`;
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full"
  }, /* @__PURE__ */ React.createElement(import_react4.Disclosure, {
    as: "nav",
    className: "bg-gray-800"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-16 items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-8",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
    alt: "Workflow"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ml-10 flex items-baseline space-x-4"
  }, navigation2.map((item) => /* @__PURE__ */ React.createElement(import_react2.Link, {
    key: item.name,
    to: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium capitalize"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 flex items-center md:ml-6"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "View notifications"), /* @__PURE__ */ React.createElement(import_outline.BellIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement(import_react4.Menu, {
    as: "div",
    className: "relative ml-3"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react4.Menu.Button, {
    className: "flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-8 rounded-full",
    src: user.imageUrl,
    alt: ""
  }))), /* @__PURE__ */ React.createElement(import_react4.Transition, {
    as: import_react3.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react4.Menu.Items, {
    className: "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, userNavigation.map((item) => /* @__PURE__ */ React.createElement(import_react4.Menu.Item, {
    key: item.name
  }, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
  }, item.name)))))))), /* @__PURE__ */ React.createElement("div", {
    className: "-mr-2 flex md:hidden"
  }, /* @__PURE__ */ React.createElement(import_react4.Disclosure.Button, {
    className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(import_outline.XIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_outline.MenuIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ React.createElement(import_react4.Disclosure.Panel, {
    className: "md:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-1 px-2 pt-2 pb-3 sm:px-3"
  }, navigation2.map((item) => /* @__PURE__ */ React.createElement(import_react4.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))), /* @__PURE__ */ React.createElement("div", {
    className: "border-t border-gray-700 pt-4 pb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-10 w-10 rounded-full",
    src: user.imageUrl,
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-base font-medium leading-none text-white"
  }, user.name), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-medium leading-none text-gray-400"
  }, user.email)), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "View notifications"), /* @__PURE__ */ React.createElement(import_outline.BellIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 space-y-1 px-2"
  }, userNavigation.map((item) => /* @__PURE__ */ React.createElement(import_react4.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
  }, item.name))))))), /* @__PURE__ */ React.createElement("header", {
    className: "bg-white shadow"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold capitalize text-gray-900"
  }, title))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null))))), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/l269626/github/purge-per-route/app/routes/application.tsx
var application_exports = {};
__export(application_exports, {
  default: () => Application,
  links: () => links2
});
var import_react6 = require("@remix-run/react");

// app/components/sidebar.tsx
var import_react5 = require("@remix-run/react");
function Sidebar({
  className,
  subPages,
  children
}) {
  const { pathname } = (0, import_react5.useLocation)();
  return /* @__PURE__ */ React.createElement("div", {
    className: classNames("bg-white", className)
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "products-heading",
    className: "pt-6 pb-24"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "products-heading",
    className: "sr-only"
  }, "Products"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "sr-only"
  }, "Categories"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-4 border-r border-gray-200 pb-6 text-sm font-medium text-gray-900"
  }, subPages.map((to) => /* @__PURE__ */ React.createElement("li", {
    key: to
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: `./${to}`,
    className: classNames("capitalize", RegExp(to).test(pathname) ? "font-bold text-blue-900" : ""),
    prefetch: "intent"
  }, to.replace(/-/g, " ")))))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-3"
  }, children))))));
}

// app/styles/routes/application.css
var application_default = "/build/_assets/application-FAZT7SIB.css";

// route:/Users/l269626/github/purge-per-route/app/routes/application.tsx
var links2 = () => [
  { rel: "stylesheet", href: application_default }
];
function Application() {
  return /* @__PURE__ */ React.createElement(Sidebar, {
    className: "rounded-lg bg-zinc-100",
    subPages: [
      "description-lists",
      "dropdowns",
      "login-and-registration",
      "pagination"
    ]
  }, /* @__PURE__ */ React.createElement(import_react6.Outlet, null));
}

// route:/Users/l269626/github/purge-per-route/app/routes/application/login-and-registration.tsx
var login_and_registration_exports = {};
__export(login_and_registration_exports, {
  default: () => LoginAndRegistration,
  links: () => links3,
  meta: () => meta2
});
var import_solid = require("@heroicons/react/solid");

// app/styles/routes/application/login-and-registration.css
var login_and_registration_default = "/build/_assets/login-and-registration-GZIZKTFF.css";

// route:/Users/l269626/github/purge-per-route/app/routes/application/login-and-registration.tsx
var meta2 = () => {
  return { title: "Application | Login and Registration" };
};
var links3 = () => {
  return [{ rel: "stylesheet", href: login_and_registration_default }];
};
function LoginAndRegistration() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full max-w-md space-y-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "mx-auto h-12 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: "Workflow"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Sign in to your account"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm text-gray-600"
  }, "Or", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "start your 14-day free trial"))), /* @__PURE__ */ React.createElement("form", {
    className: "mt-8 space-y-6",
    action: "#",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "remember",
    defaultValue: "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "-space-y-px rounded-md shadow-sm"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email-address",
    className: "sr-only"
  }, "Email address"), /* @__PURE__ */ React.createElement("input", {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
    placeholder: "Email address"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "sr-only"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
    placeholder: "Password"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "remember-me",
    name: "remember-me",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "remember-me",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Forgot your password?"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center pl-3"
  }, /* @__PURE__ */ React.createElement(import_solid.LockClosedIcon, {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    "aria-hidden": "true"
  })), "Sign in"))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/application/description-lists.tsx
var description_lists_exports = {};
__export(description_lists_exports, {
  default: () => DescriptionLists,
  links: () => links4,
  meta: () => meta3
});
var import_solid2 = require("@heroicons/react/solid");

// app/styles/routes/application/description-lists.css
var description_lists_default = "/build/_assets/description-lists-6E2KAOVZ.css";

// route:/Users/l269626/github/purge-per-route/app/routes/application/description-lists.tsx
var meta3 = () => {
  return { title: "Application | Description Lists" };
};
var links4 = () => {
  return [{ rel: "stylesheet", href: description_lists_default }];
};
function DescriptionLists() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden bg-white shadow sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-5 sm:px-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900"
  }, "Applicant Information"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "Personal details and application.")), /* @__PURE__ */ React.createElement("div", {
    className: "border-t border-gray-200"
  }, /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Full name"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, "Margot Foster")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Application for"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, "Backend Developer")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Email address"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, "margotfoster@example.com")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Salary expectation"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, "$120,000")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "About"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Attachments"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "divide-y divide-gray-200 rounded-md border border-gray-200"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "flex items-center justify-between py-3 pl-3 pr-4 text-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-0 flex-1 items-center"
  }, /* @__PURE__ */ React.createElement(import_solid2.PaperClipIcon, {
    className: "h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 w-0 flex-1 truncate"
  }, "resume_back_end_developer.pdf")), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Download"))), /* @__PURE__ */ React.createElement("li", {
    className: "flex items-center justify-between py-3 pl-3 pr-4 text-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-0 flex-1 items-center"
  }, /* @__PURE__ */ React.createElement(import_solid2.PaperClipIcon, {
    className: "h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 w-0 flex-1 truncate"
  }, "coverletter_back_end_developer.pdf")), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Download")))))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/application/pagination.tsx
var pagination_exports = {};
__export(pagination_exports, {
  default: () => Pagination,
  links: () => links5,
  meta: () => meta4
});
var import_solid3 = require("@heroicons/react/solid");

// app/styles/routes/application/pagination.css
var pagination_default = "/build/_assets/pagination-RUIR7ZSZ.css";

// route:/Users/l269626/github/purge-per-route/app/routes/application/pagination.tsx
var meta4 = () => {
  return { title: "Application | Pagination" };
};
var links5 = () => {
  return [{ rel: "stylesheet", href: pagination_default }];
};
function Pagination() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 justify-between sm:hidden"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
  }, "Previous"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
  }, "Next")), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-700"
  }, "Showing ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "1"), " to", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "10"), " of", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "97"), " results")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", {
    className: "relative z-0 inline-flex -space-x-px rounded-md shadow-sm",
    "aria-label": "Pagination"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Previous"), /* @__PURE__ */ React.createElement(import_solid3.ChevronLeftIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-current": "page",
    className: "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
  }, "1"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, "2"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex"
  }, "3"), /* @__PURE__ */ React.createElement("span", {
    className: "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
  }, "..."), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex"
  }, "8"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, "9"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, "10"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Next"), /* @__PURE__ */ React.createElement(import_solid3.ChevronRightIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/application/dropdowns.tsx
var dropdowns_exports = {};
__export(dropdowns_exports, {
  default: () => Dropdowns,
  links: () => links6,
  meta: () => meta5
});
var import_react7 = require("react");
var import_react8 = require("@headlessui/react");
var import_solid4 = require("@heroicons/react/solid");

// app/styles/routes/application/dropdowns.css
var dropdowns_default = "/build/_assets/dropdowns-FDMHWZQL.css";

// route:/Users/l269626/github/purge-per-route/app/routes/application/dropdowns.tsx
var meta5 = () => {
  return { title: "Application | Dropdowns" };
};
var links6 = () => {
  return [{ rel: "stylesheet", href: dropdowns_default }];
};
function Dropdowns() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-around"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react8.Menu.Button, {
    className: "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
  }, "Options", /* @__PURE__ */ React.createElement(import_solid4.ChevronDownIcon, {
    className: "-mr-1 ml-2 h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_react8.Transition, {
    as: import_react7.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Items, {
    className: "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Account settings")), /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Support")), /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "License")), /* @__PURE__ */ React.createElement("form", {
    method: "POST",
    action: "#"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-sm")
  }, "Sign out"))))))), /* @__PURE__ */ React.createElement(import_react8.Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react8.Menu.Button, {
    className: "inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
  }, "Options", /* @__PURE__ */ React.createElement(import_solid4.ChevronDownIcon, {
    className: "-mr-1 ml-2 h-5 w-5",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_react8.Transition, {
    as: import_react7.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Items, {
    className: "absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Edit")), /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Duplicate"))), /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Archive")), /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Move"))), /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Share")), /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Add to favorites"))), /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react8.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Delete")))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/application/index.tsx
var application_exports2 = {};
__export(application_exports2, {
  loader: () => loader
});
var import_node = require("@remix-run/node");
var loader = ({ request }) => {
  return (0, import_node.redirect)(`${request.url}/description-lists`);
};

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce.tsx
var ecommerce_exports = {};
__export(ecommerce_exports, {
  default: () => Marketing,
  links: () => links7
});
var import_react9 = require("@remix-run/react");

// app/styles/routes/ecommerce.css
var ecommerce_default = "/build/_assets/ecommerce-4JG7XJ7K.css";

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce.tsx
var links7 = () => [
  { rel: "stylesheet", href: ecommerce_default }
];
function Marketing() {
  return /* @__PURE__ */ React.createElement(Sidebar, {
    className: "rounded-lg bg-violet-50",
    subPages: [
      "category-previews",
      "product-features",
      "product-lists",
      "product-quickviews"
    ]
  }, /* @__PURE__ */ React.createElement(import_react9.Outlet, null));
}

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/product-quickviews.tsx
var product_quickviews_exports = {};
__export(product_quickviews_exports, {
  default: () => ProductQuickviews,
  links: () => links8,
  meta: () => meta6
});
var import_react10 = require("react");
var import_react11 = require("@headlessui/react");
var import_outline2 = require("@heroicons/react/outline");
var import_solid5 = require("@heroicons/react/solid");

// app/styles/routes/ecommerce/product-quickviews.css
var product_quickviews_default = "/build/_assets/product-quickviews-NG4JL74U.css";

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/product-quickviews.tsx
var meta6 = () => {
  return { title: "Ecommerce | Product Quickviews" };
};
var links8 = () => {
  return [{ rel: "stylesheet", href: product_quickviews_default }];
};
var product = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc: "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" }
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false }
  ]
};
function ProductQuickviews() {
  const [open, setOpen] = (0, import_react10.useState)(true);
  const [selectedColor, setSelectedColor] = (0, import_react10.useState)(product.colors[0]);
  const [selectedSize, setSelectedSize] = (0, import_react10.useState)(product.sizes[2]);
  return /* @__PURE__ */ React.createElement(import_react11.Transition.Root, {
    show: open,
    as: import_react10.Fragment
  }, /* @__PURE__ */ React.createElement(import_react11.Dialog, {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: setOpen
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen text-center md:block md:px-2 lg:px-4",
    style: { fontSize: 0 }
  }, /* @__PURE__ */ React.createElement(import_react11.Transition.Child, {
    as: import_react10.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(import_react11.Dialog.Overlay, {
    className: "fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "hidden md:inline-block md:h-screen md:align-middle",
    "aria-hidden": "true"
  }, "\u200B"), /* @__PURE__ */ React.createElement(import_react11.Transition.Child, {
    as: import_react10.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95",
    enterTo: "opacity-100 translate-y-0 md:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 md:scale-100",
    leaveTo: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full transform text-left text-base transition md:my-8 md:inline-block md:max-w-2xl md:px-4 md:align-middle lg:max-w-4xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",
    onClick: () => setOpen(false)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Close"), /* @__PURE__ */ React.createElement(import_outline2.XIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product.imageSrc,
    alt: product.imageAlt,
    className: "object-cover object-center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-8 lg:col-span-7"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-gray-900 sm:pr-12"
  }, product.name), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "information-heading",
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("h3", {
    id: "information-heading",
    className: "sr-only"
  }, "Product information"), /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl text-gray-900"
  }, product.price), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "sr-only"
  }, "Reviews"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ React.createElement(import_solid5.StarIcon, {
    key: rating,
    className: classNames(product.rating > rating ? "text-gray-900" : "text-gray-200", "h-5 w-5 flex-shrink-0"),
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "sr-only"
  }, product.rating, " out of 5 stars"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
  }, product.reviewCount, " reviews")))), /* @__PURE__ */ React.createElement("section", {
    "aria-labelledby": "options-heading",
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement("h3", {
    id: "options-heading",
    className: "sr-only"
  }, "Product options"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", {
    className: "text-sm font-medium text-gray-900"
  }, "Color"), /* @__PURE__ */ React.createElement(import_react11.RadioGroup, {
    value: selectedColor,
    onChange: setSelectedColor,
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement(import_react11.RadioGroup.Label, {
    className: "sr-only"
  }, "Choose a color"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-3"
  }, product.colors.map((color) => /* @__PURE__ */ React.createElement(import_react11.RadioGroup.Option, {
    key: color.name,
    value: color,
    className: ({ active, checked }) => classNames(color.selectedClass, active && checked ? "ring ring-offset-1" : "", !active && checked ? "ring-2" : "", "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none")
  }, /* @__PURE__ */ React.createElement(import_react11.RadioGroup.Label, {
    as: "p",
    className: "sr-only"
  }, color.name), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: classNames(color.class, "h-8 w-8 rounded-full border border-black border-opacity-10")
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-sm font-medium text-gray-900"
  }, "Size"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-sm font-medium text-indigo-600 hover:text-indigo-500"
  }, "Size guide")), /* @__PURE__ */ React.createElement(import_react11.RadioGroup, {
    value: selectedSize,
    onChange: setSelectedSize,
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement(import_react11.RadioGroup.Label, {
    className: "sr-only"
  }, "Choose a size"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, product.sizes.map((size) => /* @__PURE__ */ React.createElement(import_react11.RadioGroup.Option, {
    key: size.name,
    value: size,
    disabled: !size.inStock,
    className: ({ active }) => classNames(size.inStock ? "cursor-pointer bg-white text-gray-900 shadow-sm" : "cursor-not-allowed bg-gray-50 text-gray-200", active ? "ring-2 ring-indigo-500" : "", "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1")
  }, ({ active, checked }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react11.RadioGroup.Label, {
    as: "p"
  }, size.name), size.inStock ? /* @__PURE__ */ React.createElement("div", {
    className: classNames(active ? "border" : "border-2", checked ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-md"),
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "absolute inset-0 h-full w-full stroke-2 text-gray-200",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("line", {
    x1: 0,
    y1: 100,
    x2: 100,
    y2: 0,
    vectorEffect: "non-scaling-stroke"
  }))))))))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Add to bag")))))))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/category-previews.tsx
var category_previews_exports = {};
__export(category_previews_exports, {
  default: () => CategoryPreviews,
  links: () => links9,
  meta: () => meta7
});

// app/styles/routes/ecommerce/category-previews.css
var category_previews_default = "/build/_assets/category-previews-RAJPYZR7.css";

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/category-previews.tsx
var meta7 = () => {
  return { title: "Ecommerce | Category Previews" };
};
var links9 = () => {
  return [{ rel: "stylesheet", href: category_previews_default }];
};
var callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#"
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#"
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#"
  }
];
function CategoryPreviews() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-extrabold text-gray-900"
  }, "Collections"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
  }, callouts.map((callout) => /* @__PURE__ */ React.createElement("div", {
    key: callout.name,
    className: "group relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: callout.imageSrc,
    alt: callout.imageAlt,
    className: "h-full w-full object-cover object-center"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-6 text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement("a", {
    href: callout.href
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0"
  }), callout.name)), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-semibold text-gray-900"
  }, callout.description)))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/product-features.tsx
var product_features_exports = {};
__export(product_features_exports, {
  default: () => ProductFeatures,
  links: () => links10,
  meta: () => meta8
});

// app/styles/routes/ecommerce/product-features.css
var product_features_default = "/build/_assets/product-features-QQK72SNT.css";

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/product-features.tsx
var meta8 = () => {
  return { title: "Ecommerce | Product Features" };
};
var links10 = () => {
  return [{ rel: "stylesheet", href: product_features_default }];
};
var features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description: "Solid walnut base with rare earth magnets and powder coated steel card cover"
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description: "Made from natural materials. Grain and color vary with each item."
  }
];
function ProductFeatures() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 py-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, "Technical Specifications"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-gray-500"
  }, "The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists."), /* @__PURE__ */ React.createElement("dl", {
    className: "mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
  }, features.map((feature) => /* @__PURE__ */ React.createElement("div", {
    key: feature.name,
    className: "border-t border-gray-200 pt-4"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "font-medium text-gray-900"
  }, feature.name), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-2 text-sm text-gray-500"
  }, feature.description))))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
    alt: "Walnut card tray with white powder coated steel divider and 3 punchout holes.",
    className: "rounded-lg bg-gray-100"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
    alt: "Top down view of walnut card tray with embedded magnets and card groove.",
    className: "rounded-lg bg-gray-100"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
    alt: "Side of walnut card tray with card groove and recessed card area.",
    className: "rounded-lg bg-gray-100"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
    alt: "Walnut card tray filled with cards and card angled in dedicated groove.",
    className: "rounded-lg bg-gray-100"
  }))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/product-lists.tsx
var product_lists_exports = {};
__export(product_lists_exports, {
  default: () => ProductLists,
  links: () => links11,
  meta: () => meta9
});

// app/styles/routes/ecommerce/product-lists.css
var product_lists_default = "/build/_assets/product-lists-VYKHAX47.css";

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/product-lists.tsx
var meta9 = () => {
  return { title: "Ecommerce | Product Lists" };
};
var links11 = () => {
  return [{ rel: "stylesheet", href: product_lists_default }];
};
var products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top."
  }
];
function ProductLists() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "sr-only"
  }, "Products"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  }, products.map((product2) => /* @__PURE__ */ React.createElement("a", {
    key: product2.id,
    href: product2.href,
    className: "group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: product2.imageSrc,
    alt: product2.imageAlt,
    className: "h-full w-full object-cover object-center group-hover:opacity-75"
  })), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-4 text-sm text-gray-700"
  }, product2.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-lg font-medium text-gray-900"
  }, product2.price))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/ecommerce/index.tsx
var ecommerce_exports2 = {};
__export(ecommerce_exports2, {
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var loader2 = ({ request }) => {
  return (0, import_node2.redirect)(`${request.url}/category-previews`);
};

// route:/Users/l269626/github/purge-per-route/app/routes/marketing.tsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => Marketing2,
  links: () => links12
});
var import_react12 = require("@remix-run/react");

// app/styles/routes/marketing.css
var marketing_default = "/build/_assets/marketing-6CROOL4Y.css";

// route:/Users/l269626/github/purge-per-route/app/routes/marketing.tsx
var links12 = () => [
  { rel: "stylesheet", href: marketing_default }
];
function Marketing2() {
  return /* @__PURE__ */ React.createElement(Sidebar, {
    className: "rounded-lg bg-red-100",
    subPages: ["hero-sections", "banners", "feature-sections", "headers"]
  }, /* @__PURE__ */ React.createElement(import_react12.Outlet, null));
}

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/feature-sections.tsx
var feature_sections_exports = {};
__export(feature_sections_exports, {
  default: () => FeatureSections,
  links: () => links13,
  meta: () => meta10
});
var import_outline3 = require("@heroicons/react/outline");

// app/styles/routes/marketing/feature-sections.css
var feature_sections_default = "/build/_assets/feature-sections-JVSQJZ4J.css";

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/feature-sections.tsx
var meta10 = () => {
  return { title: "Marketing | Feature Sections" };
};
var links13 = () => {
  return [{ rel: "stylesheet", href: feature_sections_default }];
};
var features2 = [
  {
    name: "Competitive exchange rates",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: import_outline3.GlobeAltIcon
  },
  {
    name: "No hidden fees",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: import_outline3.ScaleIcon
  },
  {
    name: "Transfers are instant",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: import_outline3.LightningBoltIcon
  },
  {
    name: "Mobile notifications",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: import_outline3.AnnotationIcon
  }
];
function FeatureSections() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white py-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-base font-semibold uppercase tracking-wide text-indigo-600"
  }, "Transactions"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
  }, "A better way to send money"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
  }, "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement("dl", {
    className: "space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
  }, features2.map((feature) => /* @__PURE__ */ React.createElement("div", {
    key: feature.name,
    className: "relative"
  }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement("div", {
    className: "absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
  }, /* @__PURE__ */ React.createElement(feature.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ml-16 text-lg font-medium leading-6 text-gray-900"
  }, feature.name)), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-2 ml-16 text-base text-gray-500"
  }, feature.description)))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/hero-sections.tsx
var hero_sections_exports = {};
__export(hero_sections_exports, {
  default: () => HeroSections,
  links: () => links14,
  meta: () => meta11
});
var import_react13 = require("react");
var import_react14 = require("@headlessui/react");
var import_outline4 = require("@heroicons/react/outline");

// app/styles/routes/marketing/hero-sections.css
var hero_sections_default = "/build/_assets/hero-sections-QXPD4W6Y.css";

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/hero-sections.tsx
var meta11 = () => {
  return { title: "Marketing | Hero Sections" };
};
var links14 = () => {
  return [{ rel: "stylesheet", href: hero_sections_default }];
};
var navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" }
];
function HeroSections() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative overflow-hidden bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block",
    fill: "currentColor",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("polygon", {
    points: "50,0 100,0 50,100 0,100"
  })), /* @__PURE__ */ React.createElement(import_react14.Popover, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative px-4 pt-6 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "relative flex items-center justify-between sm:h-10 lg:justify-start",
    "aria-label": "Global"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-shrink-0 flex-grow items-center lg:flex-grow-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full items-center justify-between md:w-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Workflow"), /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto sm:h-10",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "-mr-2 flex items-center md:hidden"
  }, /* @__PURE__ */ React.createElement(import_react14.Popover.Button, {
    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ React.createElement(import_outline4.MenuIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:ml-10 md:block md:space-x-8 md:pr-4"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "font-medium text-gray-500 hover:text-gray-900"
  }, item.name)), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Log in")))), /* @__PURE__ */ React.createElement(import_react14.Transition, {
    as: import_react13.Fragment,
    enter: "duration-150 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-100 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react14.Popover.Panel, {
    focus: true,
    className: "absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between px-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "-mr-2"
  }, /* @__PURE__ */ React.createElement(import_react14.Popover.Button, {
    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Close main menu"), /* @__PURE__ */ React.createElement(import_outline4.XIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-1 px-2 pt-2 pb-3"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
  }, item.name))), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
  }, "Log in"))))), /* @__PURE__ */ React.createElement("main", {
    className: "mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:text-center lg:text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block xl:inline"
  }, "Data to enrich your"), " ", /* @__PURE__ */ React.createElement("span", {
    className: "block text-indigo-600 xl:inline"
  }, "online business")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
  }, "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
  }, "Get started")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 sm:mt-0 sm:ml-3"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
  }, "Live demo"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    alt: ""
  })));
}

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/banners.tsx
var banners_exports = {};
__export(banners_exports, {
  default: () => Banners,
  links: () => links15,
  meta: () => meta12
});
var import_outline5 = require("@heroicons/react/outline");

// app/styles/routes/marketing/banners.css
var banners_default = "/build/_assets/banners-WH7DYTHR.css";

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/banners.tsx
var meta12 = () => {
  return { title: "Marketing | Banners" };
};
var links15 = () => {
  return [{ rel: "stylesheet", href: banners_default }];
};
function Banners() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-indigo-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-0 flex-1 items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex rounded-lg bg-indigo-800 p-2"
  }, /* @__PURE__ */ React.createElement(import_outline5.SpeakerphoneIcon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "ml-3 truncate font-medium text-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:hidden"
  }, "We announced a new product!"), /* @__PURE__ */ React.createElement("span", {
    className: "hidden md:inline"
  }, "Big news! We're excited to announce a brand new product."))), /* @__PURE__ */ React.createElement("div", {
    className: "order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
  }, "Learn more")), /* @__PURE__ */ React.createElement("div", {
    className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Dismiss"), /* @__PURE__ */ React.createElement(import_outline5.XIcon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  }))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/headers.tsx
var headers_exports = {};
__export(headers_exports, {
  default: () => Headers,
  links: () => links16,
  meta: () => meta13
});
var import_react15 = require("react");
var import_react16 = require("@headlessui/react");
var import_outline6 = require("@heroicons/react/outline");
var import_solid6 = require("@heroicons/react/solid");

// app/styles/routes/marketing/headers.css
var headers_default = "/build/_assets/headers-FCYWTIEL.css";

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/headers.tsx
var meta13 = () => {
  return { title: "Marketing | Headers" };
};
var links16 = () => {
  return [{ rel: "stylesheet", href: headers_default }];
};
var solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: import_outline6.ChartBarIcon
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: import_outline6.CursorClickIcon
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: import_outline6.ShieldCheckIcon
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: import_outline6.ViewGridIcon
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: import_outline6.RefreshIcon
  }
];
var callsToAction = [
  { name: "Watch Demo", href: "#", icon: import_outline6.PlayIcon },
  { name: "Contact Sales", href: "#", icon: import_outline6.PhoneIcon }
];
var resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: import_outline6.SupportIcon
  },
  {
    name: "Guides",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: import_outline6.BookmarkAltIcon
  },
  {
    name: "Events",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: import_outline6.CalendarIcon
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: import_outline6.ShieldCheckIcon
  }
];
var recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#"
  },
  { id: 3, name: "Improve your customer experience", href: "#" }
];
function Headers() {
  return /* @__PURE__ */ React.createElement(import_react16.Popover, {
    className: "relative bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-start lg:w-0 lg:flex-1"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Workflow"), /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto sm:h-10",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "-my-2 -mr-2 md:hidden"
  }, /* @__PURE__ */ React.createElement(import_react16.Popover.Button, {
    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open menu"), /* @__PURE__ */ React.createElement(import_outline6.MenuIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(import_react16.Popover.Group, {
    as: "nav",
    className: "hidden space-x-10 md:flex"
  }, /* @__PURE__ */ React.createElement(import_react16.Popover, {
    className: "relative"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react16.Popover.Button, {
    className: classNames(open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2")
  }, /* @__PURE__ */ React.createElement("span", null, "Solutions"), /* @__PURE__ */ React.createElement(import_solid6.ChevronDownIcon, {
    className: classNames(open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement(import_react16.Transition, {
    as: import_react15.Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-y-1",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-1"
  }, /* @__PURE__ */ React.createElement(import_react16.Popover.Panel, {
    className: "absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
  }, solutions.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6 flex-shrink-0 text-indigo-600",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-medium text-gray-900"
  }, item.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-sm text-gray-500"
  }, item.description))))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
  }, callsToAction.map((item) => /* @__PURE__ */ React.createElement("div", {
    key: item.name,
    className: "flow-root"
  }, /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: "-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
  }, /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-3"
  }, item.name)))))))))), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Pricing"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Docs"), /* @__PURE__ */ React.createElement(import_react16.Popover, {
    className: "relative"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react16.Popover.Button, {
    className: classNames(open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2")
  }, /* @__PURE__ */ React.createElement("span", null, "More"), /* @__PURE__ */ React.createElement(import_solid6.ChevronDownIcon, {
    className: classNames(open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement(import_react16.Transition, {
    as: import_react15.Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-y-1",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-1"
  }, /* @__PURE__ */ React.createElement(import_react16.Popover.Panel, {
    className: "absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
  }, resources.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6 flex-shrink-0 text-indigo-600",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-medium text-gray-900"
  }, item.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-sm text-gray-500"
  }, item.description))))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-50 px-5 py-5 sm:px-8 sm:py-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-medium uppercase tracking-wide text-gray-500"
  }, "Recent Posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-4 space-y-4"
  }, recentPosts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.id,
    className: "truncate text-base"
  }, /* @__PURE__ */ React.createElement("a", {
    href: post.href,
    className: "font-medium text-gray-900 hover:text-gray-700"
  }, post.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, " ", "View all posts", " ", /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden items-center justify-end md:flex md:flex-1 lg:w-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Sign in"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
  }, "Sign up")))), /* @__PURE__ */ React.createElement(import_react16.Transition, {
    as: import_react15.Fragment,
    enter: "duration-200 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-100 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react16.Popover.Panel, {
    focus: true,
    className: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-5 pt-5 pb-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: "Workflow"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "-mr-2"
  }, /* @__PURE__ */ React.createElement(import_react16.Popover.Button, {
    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Close menu"), /* @__PURE__ */ React.createElement(import_outline6.XIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "grid gap-y-8"
  }, solutions.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement(item.icon, {
    className: "h-6 w-6 flex-shrink-0 text-indigo-600",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-3 text-base font-medium text-gray-900"
  }, item.name)))))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6 py-6 px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-y-4 gap-x-8"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-900 hover:text-gray-700"
  }, "Pricing"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-900 hover:text-gray-700"
  }, "Docs"), resources.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "text-base font-medium text-gray-900 hover:text-gray-700"
  }, item.name))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
  }, "Sign up"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 text-center text-base font-medium text-gray-500"
  }, "Existing customer?", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-indigo-600 hover:text-indigo-500"
  }, "Sign in"))))))));
}

// route:/Users/l269626/github/purge-per-route/app/routes/marketing/index.tsx
var marketing_exports2 = {};
__export(marketing_exports2, {
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");
var loader3 = ({ request }) => {
  return (0, import_node3.redirect)(`${request.url}/hero-sections`);
};

// route:/Users/l269626/github/purge-per-route/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader4
});
var import_server_runtime = require("@remix-run/server-runtime");
var loader4 = () => {
  return (0, import_server_runtime.redirect)("/application");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "c48e7e43", "entry": { "module": "/build/entry.client-M3K7YRLF.js", "imports": ["/build/_shared/chunk-2LKANNDY.js", "/build/_shared/chunk-6UORSF3O.js", "/build/_shared/chunk-OGYP3M3B.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-N7R7MG37.js", "imports": ["/build/_shared/chunk-MBP3D7CQ.js", "/build/_shared/chunk-QVHGCJUR.js", "/build/_shared/chunk-EZ5CLCHO.js", "/build/_shared/chunk-MSEL3JQP.js", "/build/_shared/chunk-BECSHISZ.js", "/build/_shared/chunk-3ZVFFIV3.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/application": { "id": "routes/application", "parentId": "root", "path": "application", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/application-EUWYFLM3.js", "imports": ["/build/_shared/chunk-CIMO5J4H.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/application/description-lists": { "id": "routes/application/description-lists", "parentId": "routes/application", "path": "description-lists", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/application/description-lists-KVEGCU2X.js", "imports": ["/build/_shared/chunk-UYTJ54PX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/application/dropdowns": { "id": "routes/application/dropdowns", "parentId": "routes/application", "path": "dropdowns", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/application/dropdowns-P4P6YMQH.js", "imports": ["/build/_shared/chunk-QVHGCJUR.js", "/build/_shared/chunk-EZ5CLCHO.js", "/build/_shared/chunk-MSEL3JQP.js", "/build/_shared/chunk-BECSHISZ.js", "/build/_shared/chunk-3ZVFFIV3.js", "/build/_shared/chunk-UYTJ54PX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/application/index": { "id": "routes/application/index", "parentId": "routes/application", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/application/index-FJWIIXE2.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/application/login-and-registration": { "id": "routes/application/login-and-registration", "parentId": "routes/application", "path": "login-and-registration", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/application/login-and-registration-LO6UVBN6.js", "imports": ["/build/_shared/chunk-UYTJ54PX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/application/pagination": { "id": "routes/application/pagination", "parentId": "routes/application", "path": "pagination", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/application/pagination-DQIEHU5P.js", "imports": ["/build/_shared/chunk-UYTJ54PX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ecommerce": { "id": "routes/ecommerce", "parentId": "root", "path": "ecommerce", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ecommerce-MBVMOJPP.js", "imports": ["/build/_shared/chunk-CIMO5J4H.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ecommerce/category-previews": { "id": "routes/ecommerce/category-previews", "parentId": "routes/ecommerce", "path": "category-previews", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ecommerce/category-previews-TIYV5NFL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ecommerce/index": { "id": "routes/ecommerce/index", "parentId": "routes/ecommerce", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/ecommerce/index-QLCJYVO4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ecommerce/product-features": { "id": "routes/ecommerce/product-features", "parentId": "routes/ecommerce", "path": "product-features", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ecommerce/product-features-ESND4OAY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ecommerce/product-lists": { "id": "routes/ecommerce/product-lists", "parentId": "routes/ecommerce", "path": "product-lists", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ecommerce/product-lists-C2ETSREW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ecommerce/product-quickviews": { "id": "routes/ecommerce/product-quickviews", "parentId": "routes/ecommerce", "path": "product-quickviews", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ecommerce/product-quickviews-MQZAHEPU.js", "imports": ["/build/_shared/chunk-OWNJ2BDJ.js", "/build/_shared/chunk-MBP3D7CQ.js", "/build/_shared/chunk-MSEL3JQP.js", "/build/_shared/chunk-BECSHISZ.js", "/build/_shared/chunk-3ZVFFIV3.js", "/build/_shared/chunk-UYTJ54PX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OWW6B2OI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/marketing": { "id": "routes/marketing", "parentId": "root", "path": "marketing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/marketing-CQRSWD6N.js", "imports": ["/build/_shared/chunk-CIMO5J4H.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/marketing/banners": { "id": "routes/marketing/banners", "parentId": "routes/marketing", "path": "banners", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/marketing/banners-XBXDIO3C.js", "imports": ["/build/_shared/chunk-MBP3D7CQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/marketing/feature-sections": { "id": "routes/marketing/feature-sections", "parentId": "routes/marketing", "path": "feature-sections", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/marketing/feature-sections-QXM2WPYK.js", "imports": ["/build/_shared/chunk-MBP3D7CQ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/marketing/headers": { "id": "routes/marketing/headers", "parentId": "routes/marketing", "path": "headers", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/marketing/headers-GLNSYPQT.js", "imports": ["/build/_shared/chunk-QJY6LR23.js", "/build/_shared/chunk-OWNJ2BDJ.js", "/build/_shared/chunk-MBP3D7CQ.js", "/build/_shared/chunk-EZ5CLCHO.js", "/build/_shared/chunk-BECSHISZ.js", "/build/_shared/chunk-3ZVFFIV3.js", "/build/_shared/chunk-UYTJ54PX.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/marketing/hero-sections": { "id": "routes/marketing/hero-sections", "parentId": "routes/marketing", "path": "hero-sections", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/marketing/hero-sections-YYA2LLA7.js", "imports": ["/build/_shared/chunk-QJY6LR23.js", "/build/_shared/chunk-OWNJ2BDJ.js", "/build/_shared/chunk-MBP3D7CQ.js", "/build/_shared/chunk-EZ5CLCHO.js", "/build/_shared/chunk-BECSHISZ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/marketing/index": { "id": "routes/marketing/index", "parentId": "routes/marketing", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/marketing/index-EIF4YPXI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C48E7E43.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/application": {
    id: "routes/application",
    parentId: "root",
    path: "application",
    index: void 0,
    caseSensitive: void 0,
    module: application_exports
  },
  "routes/application/login-and-registration": {
    id: "routes/application/login-and-registration",
    parentId: "routes/application",
    path: "login-and-registration",
    index: void 0,
    caseSensitive: void 0,
    module: login_and_registration_exports
  },
  "routes/application/description-lists": {
    id: "routes/application/description-lists",
    parentId: "routes/application",
    path: "description-lists",
    index: void 0,
    caseSensitive: void 0,
    module: description_lists_exports
  },
  "routes/application/pagination": {
    id: "routes/application/pagination",
    parentId: "routes/application",
    path: "pagination",
    index: void 0,
    caseSensitive: void 0,
    module: pagination_exports
  },
  "routes/application/dropdowns": {
    id: "routes/application/dropdowns",
    parentId: "routes/application",
    path: "dropdowns",
    index: void 0,
    caseSensitive: void 0,
    module: dropdowns_exports
  },
  "routes/application/index": {
    id: "routes/application/index",
    parentId: "routes/application",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: application_exports2
  },
  "routes/ecommerce": {
    id: "routes/ecommerce",
    parentId: "root",
    path: "ecommerce",
    index: void 0,
    caseSensitive: void 0,
    module: ecommerce_exports
  },
  "routes/ecommerce/product-quickviews": {
    id: "routes/ecommerce/product-quickviews",
    parentId: "routes/ecommerce",
    path: "product-quickviews",
    index: void 0,
    caseSensitive: void 0,
    module: product_quickviews_exports
  },
  "routes/ecommerce/category-previews": {
    id: "routes/ecommerce/category-previews",
    parentId: "routes/ecommerce",
    path: "category-previews",
    index: void 0,
    caseSensitive: void 0,
    module: category_previews_exports
  },
  "routes/ecommerce/product-features": {
    id: "routes/ecommerce/product-features",
    parentId: "routes/ecommerce",
    path: "product-features",
    index: void 0,
    caseSensitive: void 0,
    module: product_features_exports
  },
  "routes/ecommerce/product-lists": {
    id: "routes/ecommerce/product-lists",
    parentId: "routes/ecommerce",
    path: "product-lists",
    index: void 0,
    caseSensitive: void 0,
    module: product_lists_exports
  },
  "routes/ecommerce/index": {
    id: "routes/ecommerce/index",
    parentId: "routes/ecommerce",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: ecommerce_exports2
  },
  "routes/marketing": {
    id: "routes/marketing",
    parentId: "root",
    path: "marketing",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/marketing/feature-sections": {
    id: "routes/marketing/feature-sections",
    parentId: "routes/marketing",
    path: "feature-sections",
    index: void 0,
    caseSensitive: void 0,
    module: feature_sections_exports
  },
  "routes/marketing/hero-sections": {
    id: "routes/marketing/hero-sections",
    parentId: "routes/marketing",
    path: "hero-sections",
    index: void 0,
    caseSensitive: void 0,
    module: hero_sections_exports
  },
  "routes/marketing/banners": {
    id: "routes/marketing/banners",
    parentId: "routes/marketing",
    path: "banners",
    index: void 0,
    caseSensitive: void 0,
    module: banners_exports
  },
  "routes/marketing/headers": {
    id: "routes/marketing/headers",
    parentId: "routes/marketing",
    path: "headers",
    index: void 0,
    caseSensitive: void 0,
    module: headers_exports
  },
  "routes/marketing/index": {
    id: "routes/marketing/index",
    parentId: "routes/marketing",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: marketing_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
