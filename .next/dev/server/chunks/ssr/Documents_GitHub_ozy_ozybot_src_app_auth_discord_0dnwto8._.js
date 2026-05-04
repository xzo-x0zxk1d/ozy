module.exports = [
"[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backLink": "page-module__d6x2CG__backLink",
  "card": "page-module__d6x2CG__card",
  "discordIcon": "page-module__d6x2CG__discordIcon",
  "loginBtn": "page-module__d6x2CG__loginBtn",
  "note": "page-module__d6x2CG__note",
  "page": "page-module__d6x2CG__page",
  "permRow": "page-module__d6x2CG__permRow",
  "perms": "page-module__d6x2CG__perms",
  "permsLabel": "page-module__d6x2CG__permsLabel",
  "subtitle": "page-module__d6x2CG__subtitle",
  "title": "page-module__d6x2CG__title",
});
}),
"[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscordAuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
const perms = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        label: 'Read your username and avatar'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: 'Access your server list'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        label: 'No access to messages or DMs'
    }
];
function DiscordAuthPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backLink,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    "OzyBot"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 0.4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].discordIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "32",
                            height: "24",
                            viewBox: "0 0 71 55",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",
                                fill: "#5865F2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Login with Discord"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Connect your Discord account to access the OzyBot dashboard."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].perms,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permsLabel,
                                children: "We will request access to:"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            perms.map(({ icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 15,
                                            style: {
                                                color: '#00C07F',
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent('http://localhost:3000/api/auth/callback/discord')}&response_type=code&scope=identify+guilds`,
                        className: `btn btn-primary ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loginBtn}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "18",
                                height: "14",
                                viewBox: "0 0 71 55",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            "Continue with Discord",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$src$2f$app$2f$auth$2f$discord$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].note,
                        children: [
                            "By continuing, you agree to our",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                children: "Terms of Service"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            " and",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ozy$2f$ozybot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ozy/ozybot/src/app/auth/discord/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_GitHub_ozy_ozybot_src_app_auth_discord_0dnwto8._.js.map