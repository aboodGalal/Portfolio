import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b0cfce87"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=b0cfce87"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b0cfce87"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import App from "/src/App.jsx";
import Login from "/src/pages/Login.jsx";
import List from "/src/pages/List.jsx";
import Single from "/src/pages/Single.jsx";
import New from "/src/pages/New.jsx";
import "/src/index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=b0cfce87";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=b0cfce87";
import store from "/redux/Store.js";
import "/node_modules/@fontsource/roboto/300.css";
import "/node_modules/@fontsource/roboto/400.css";
import "/node_modules/@fontsource/roboto/500.css";
import "/node_modules/@fontsource/roboto/700.css";
import { useSelector } from "/node_modules/.vite/deps/react-redux.js?v=b0cfce87";
import SignUp from "/src/pages/SignUp.jsx";
const RequireAuth = ({
  children
}) => {
  _s();
  const currentUser = useSelector((state) => state.CurrentUserReducer.current);
  return currentUser ? children : /* @__PURE__ */ jsxDEV(Navigate, { to: "/login" }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 24,
    columnNumber: 35
  }, this);
};
_s(RequireAuth, "lZdPyK/MobwtETtTACdKAch84Kw=", false, function() {
  return [useSelector];
});
_c = RequireAuth;
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 32,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 32,
    columnNumber: 12
  }, this)
}, {
  path: "/login",
  element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 35,
    columnNumber: 12
  }, this)
}, {
  path: "/signup",
  element: /* @__PURE__ */ jsxDEV(SignUp, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 38,
    columnNumber: 12
  }, this)
}, {
  path: "/users",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(List, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 41,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 41,
    columnNumber: 12
  }, this)
}, {
  path: "/users/:id",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Single, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 44,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 44,
    columnNumber: 12
  }, this)
}, {
  path: "/users/new",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(New, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 47,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 47,
    columnNumber: 12
  }, this)
}, {
  path: "/products",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(List, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 50,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 50,
    columnNumber: 12
  }, this)
}, {
  path: "/products/:userId",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(Single, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 53,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 53,
    columnNumber: 12
  }, this)
}, {
  path: "/products/new",
  element: /* @__PURE__ */ jsxDEV(RequireAuth, { children: /* @__PURE__ */ jsxDEV(New, {}, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 56,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
    lineNumber: 56,
    columnNumber: 12
  }, this)
}]);
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
  lineNumber: 60,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
  lineNumber: 59,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx",
  lineNumber: 58,
  columnNumber: 61
}, this));
var _c;
$RefreshReg$(_c, "RequireAuth");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("E:/Clasification/Clasification/React-Projects/Dashboard/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBeUJrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QmxDLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLFNBQVM7QUFDaEIsT0FBTztBQUNQLFNBQ0VDLHFCQUNBQyxVQUNBQyxzQkFDSztBQUNQLFNBQVNDLGdCQUFnQjtBQUN6QixPQUFPQyxXQUFXO0FBQ2xCLE9BQU87QUFDUCxPQUFPO0FBQ1AsT0FBTztBQUNQLE9BQU87QUFDUCxTQUFTQyxtQkFBbUI7QUFDNUIsT0FBT0MsWUFBWTtBQUduQixNQUFNQyxjQUFjQSxDQUFDO0FBQUEsRUFBQ0M7QUFBUSxNQUFLO0FBQUFDLEtBQUE7QUFDakMsUUFBTUMsY0FBY0wsWUFBYU0sV0FBVUEsTUFBTUMsbUJBQW1CQyxPQUFPO0FBQzNFLFNBQU9ILGNBQWNGLFdBQVcsdUJBQUMsWUFBUyxJQUFHLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQjtBQUN2RDtBQUFDQyxHQUhLRixhQUFXO0FBQUEsVUFDS0YsV0FBVztBQUFBO0FBQUFTLEtBRDNCUDtBQU1OLE1BQU1RLFNBQVNmLG9CQUFvQixDQUNqQztBQUFBLEVBQ0VnQixNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxlQUFZLGlDQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBb0I7QUFDL0IsR0FDQTtBQUFBLEVBQ0VELE1BQU07QUFBQSxFQUNOQyxTQUFTLHVCQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNO0FBQ2pCLEdBQ0E7QUFBQSxFQUNFRCxNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTztBQUNsQixHQUNBO0FBQUEsRUFDRUQsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsZUFBWSxpQ0FBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFCO0FBQ2hDLEdBQ0E7QUFBQSxFQUNFRCxNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxlQUFZLGlDQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBc0I7QUFDakMsR0FDQTtBQUFBLEVBQ0VELE1BQU07QUFBQSxFQUNOQyxTQUFTLHVCQUFDLGVBQVksaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQjtBQUMvQixHQUNBO0FBQUEsRUFDRUQsTUFBTTtBQUFBLEVBQ05DLFNBQVMsdUJBQUMsZUFBWSxpQ0FBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFCO0FBQ2hDLEdBQ0E7QUFBQSxFQUNFRCxNQUFNO0FBQUEsRUFDTkMsU0FBUyx1QkFBQyxlQUFZLGlDQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdUI7QUFDbEMsR0FDQTtBQUFBLEVBQ0VELE1BQU07QUFBQSxFQUNOQyxTQUFTLHVCQUFDLGVBQVksaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQjtBQUMvQixDQUFDLENBQ0Y7QUFFRHZCLFNBQVN3QixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUNuRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxZQUFTLE9BQ1IsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUEsQ0FDRjtBQUFDLElBQUFQO0FBQUFRLGFBQUFSLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiTG9naW4iLCJMaXN0IiwiU2luZ2xlIiwiTmV3IiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIk5hdmlnYXRlIiwiUm91dGVyUHJvdmlkZXIiLCJQcm92aWRlciIsInN0b3JlIiwidXNlU2VsZWN0b3IiLCJTaWduVXAiLCJSZXF1aXJlQXV0aCIsImNoaWxkcmVuIiwiX3MiLCJjdXJyZW50VXNlciIsInN0YXRlIiwiQ3VycmVudFVzZXJSZWR1Y2VyIiwiY3VycmVudCIsIl9jIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9wYWdlcy9Mb2dpbi5qc3gnXG5pbXBvcnQgTGlzdCBmcm9tICcuL3BhZ2VzL0xpc3QuanN4J1xuaW1wb3J0IFNpbmdsZSBmcm9tICcuL3BhZ2VzL1NpbmdsZS5qc3gnXG5pbXBvcnQgTmV3IGZyb20gJy4vcGFnZXMvTmV3LmpzeCdcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQge1xuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBOYXZpZ2F0ZSxcbiAgUm91dGVyUHJvdmlkZXIsXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L1N0b3JlLmpzJ1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vMzAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by80MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzUwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNzAwLmNzcyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuL3BhZ2VzL1NpZ25VcC5qc3gnXG5cblxuY29uc3QgUmVxdWlyZUF1dGggPSAoe2NoaWxkcmVufSkgPT57XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5DdXJyZW50VXNlclJlZHVjZXIuY3VycmVudClcbiAgcmV0dXJuIGN1cnJlbnRVc2VyID8gY2hpbGRyZW4gOiA8TmF2aWdhdGUgdG89Jy9sb2dpbicvPlxufVxuXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPFJlcXVpcmVBdXRoPjxBcHAgLz48L1JlcXVpcmVBdXRoPixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgZWxlbWVudDogPExvZ2luIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvc2lnbnVwXCIsXG4gICAgZWxlbWVudDogPFNpZ25VcCAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3VzZXJzXCIsXG4gICAgZWxlbWVudDogPFJlcXVpcmVBdXRoPjxMaXN0IC8+PC9SZXF1aXJlQXV0aD4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi91c2Vycy86aWRcIixcbiAgICBlbGVtZW50OiA8UmVxdWlyZUF1dGg+PFNpbmdsZS8+PC9SZXF1aXJlQXV0aD4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi91c2Vycy9uZXdcIixcbiAgICBlbGVtZW50OiA8UmVxdWlyZUF1dGg+PE5ldyAvPjwvUmVxdWlyZUF1dGg+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcHJvZHVjdHNcIixcbiAgICBlbGVtZW50OiA8UmVxdWlyZUF1dGg+PExpc3QgLz48L1JlcXVpcmVBdXRoPixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2R1Y3RzLzp1c2VySWRcIixcbiAgICBlbGVtZW50OiA8UmVxdWlyZUF1dGg+PFNpbmdsZSAvPjwvUmVxdWlyZUF1dGg+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvcHJvZHVjdHMvbmV3XCIsXG4gICAgZWxlbWVudDogPFJlcXVpcmVBdXRoPjxOZXcgLz48L1JlcXVpcmVBdXRoPixcbiAgfSxcbl0pO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbilcbiJdLCJmaWxlIjoiRTovQ2xhc2lmaWNhdGlvbi9DbGFzaWZpY2F0aW9uL1JlYWN0LVByb2plY3RzL0Rhc2hib2FyZC9zcmMvbWFpbi5qc3gifQ==