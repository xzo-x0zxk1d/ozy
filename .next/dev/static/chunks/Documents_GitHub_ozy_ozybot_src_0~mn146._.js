(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/ozy/ozybot/src/components/CustomCursor.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cursor": "CustomCursor-module__B0uLcG__cursor",
  "dot": "CustomCursor-module__B0uLcG__dot",
  "hover": "CustomCursor-module__B0uLcG__hover",
});
}),
"[project]/Documents/GitHub/ozy/ozybot/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/src/components/CustomCursor.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const cursor = cursorRef.current;
            const dot = dotRef.current;
            if (!cursor || !dot) return;
            let mouseX = 0;
            let mouseY = 0;
            let curX = 0;
            let curY = 0;
            const moveCursor = {
                "CustomCursor.useEffect.moveCursor": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    dot.style.left = `${mouseX}px`;
                    dot.style.top = `${mouseY}px`;
                }
            }["CustomCursor.useEffect.moveCursor"];
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    curX += (mouseX - curX) * 0.12;
                    curY += (mouseY - curY) * 0.12;
                    cursor.style.left = `${curX}px`;
                    cursor.style.top = `${curY}px`;
                    requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            const onMouseEnterLink = {
                "CustomCursor.useEffect.onMouseEnterLink": ()=>cursor.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hover)
            }["CustomCursor.useEffect.onMouseEnterLink"];
            const onMouseLeaveLink = {
                "CustomCursor.useEffect.onMouseLeaveLink": ()=>cursor.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hover)
            }["CustomCursor.useEffect.onMouseLeaveLink"];
            document.addEventListener('mousemove', moveCursor);
            animate();
            const links = document.querySelectorAll('a, button, [role="button"]');
            links.forEach({
                "CustomCursor.useEffect": (el)=>{
                    el.addEventListener('mouseenter', onMouseEnterLink);
                    el.addEventListener('mouseleave', onMouseLeaveLink);
                }
            }["CustomCursor.useEffect"]);
            return ({
                "CustomCursor.useEffect": ()=>{
                    document.removeEventListener('mousemove', moveCursor);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursor
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/components/CustomCursor.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$components$2f$CustomCursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/components/CustomCursor.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "f+dLXJ1YkGBiFa+MqtuygarcrkA=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/ozy/ozybot/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_ozy_ozybot_src_0~mn146._.js.map