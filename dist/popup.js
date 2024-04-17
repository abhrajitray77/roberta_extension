(()=>{"use strict";var n,e={739:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),s=t(417),l=t.n(s),c=new URL(t(73),t.b),d=i()(a()),p=l()(c);d.push([n.id,`/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.absolute {\n  position: absolute;\n}\n.right-4 {\n  right: 1rem;\n}\n.top-4 {\n  top: 1rem;\n}\n.m-1 {\n  margin: 0.25rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.flex {\n  display: flex;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.-rotate-45 {\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-col {\n  flex-direction: column;\n}\n.justify-center {\n  justify-content: center;\n}\n.space-x-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.bg-\\[\\#11A37F\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 163 127 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-gray-100\\/40 {\n  background-color: rgb(243 244 246 / 0.4);\n}\n.bg-gray-50\\/40 {\n  background-color: rgb(249 250 251 / 0.4);\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pt-2 {\n  padding-top: 0.5rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-cyan-200 {\n  --tw-text-opacity: 1;\n  color: rgb(165 243 252 / var(--tw-text-opacity));\n}\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-neutral-900 {\n  --tw-text-opacity: 1;\n  color: rgb(23 23 23 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-md {\n  --tw-backdrop-blur: blur(12px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n\nbody {\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    min-height: 400px;\n    height: auto;\n    width: 400px;\n    \n}\n\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:bg-black\\/20:hover {\n  background-color: rgb(0 0 0 / 0.2);\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.hover\\:text-cyan-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 211 238 / var(--tw-text-opacity));\n}\n\n.hover\\:text-green-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity));\n}\n\n.hover\\:text-red-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-950:hover {\n  --tw-text-opacity: 1;\n  color: rgb(3 7 18 / var(--tw-text-opacity));\n}\n\n.hover\\:underline-offset-1:hover {\n  text-underline-offset: 1px;\n}\n\n.hover\\:opacity-50:hover {\n  opacity: 0.5;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n\n.disabled\\:bg-gray-300:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n\n.disabled\\:text-gray-300:disabled {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}`,""]);const u=d},233:(n,e,t)=>{var r=t(540),a=t(338),o=t(72),i=t.n(o),s=t(825),l=t.n(s),c=t(659),d=t.n(c),p=t(56),u=t.n(p),m=t(159),w=t.n(m),b=t(113),h=t.n(b),g=t(739),f={};f.styleTagTransform=h(),f.setAttributes=u(),f.insert=d().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=w(),i()(g.A,f),g.A&&g.A.locals&&g.A.locals;var v=t(106),y=t(795),x=t(576);const k=()=>{const[n,e]=(0,r.useState)([]);return(0,r.useEffect)((()=>{chrome.storage.local.get(null,(n=>{e(Object.values(n))})),chrome.storage.onChanged.addListener(((n,t)=>{"local"===t&&chrome.storage.local.get(null,(n=>{e(Object.values(n))}))}))}),[]),r.createElement("div",null,r.createElement("h1",{className:"text-gray-100 font-semibold text-xl"},"Here's your saved clips-"),0===n.length&&r.createElement("p",{className:"text-gray-100 mt-2"},"Press Ctrl+Shift+Y to trigger the extension and click on an element to save it!"),n.length>0&&r.createElement("div",null,r.createElement("button",{className:"absolute top-4 right-4 text-red-500 hover:text-red-600 bg-gray-200\n          w-6 h-6 p-1 hover:scale-105 transition-all duration-300 rounded-md cursor-pointer\n          ",onClick:()=>{chrome.storage.local.clear((()=>{e([])}))}},r.createElement(y.A,null)),r.createElement("ul",{className:"text-gray-100"},n.map((n=>r.createElement("li",{key:n.id,className:" hover:bg-black/20 m-1 p-1"},r.createElement("p",null,"Text: ",n.text),r.createElement("p",{className:"hover:underline-offset-1 underline text-cyan-200\n                hover:text-cyan-400 break-words"},"URL: ",n.url),r.createElement("button",{onClick:()=>{return t=n.id,void chrome.storage.local.remove(t,(()=>{e((n=>n.filter((n=>n.id!==t))))}));var t},className:"text-red-500 w-6 h-6"},r.createElement(x.A,null))))))))};var E=t(337);const z=n=>{return e=void 0,t=void 0,a=function*(){return(yield fetch("http://localhost:8080/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n})}).catch((n=>(console.error(n),new Response("Error: Unable to connect to the server."))))).json()},new((r=void 0)||(r=Promise))((function(n,o){function i(n){try{l(a.next(n))}catch(n){o(n)}}function s(n){try{l(a.throw(n))}catch(n){o(n)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,s)}l((a=a.apply(e,t||[])).next())}));var e,t,r,a},C=({response:n})=>r.createElement("div",{className:"space-y-2"},r.createElement("h1",{className:"pt-2 text-base font-medium text-gray-900"},"Response: "),n?r.createElement("div",{className:"p-5 text-gray-800 bg-gray-50/40 backdrop-blur-md rounded-lg space-y-2"},r.createElement("div",{className:"font-semibold flex space-x-2"},r.createElement("p",null,"Received Text:"),r.createElement("p",{className:"text-gray-900 font-medium"},n["Received Text"])),r.createElement("div",{className:"font-semibold flex space-x-2"},r.createElement("p",null,"Prediction:"),r.createElement("p",{className:"text-gray-900 font-medium"},n.Prediction)),r.createElement("div",{className:"font-semibold flex space-x-2"},r.createElement("p",null,"Probability:"),r.createElement("p",{className:"text-gray-900 font-medium"},n.Probability))):null);const S=()=>{const[n,e]=(0,r.useState)(""),[t,a]=(0,r.useState)("");return r.createElement("div",{className:""},r.createElement("form",{className:"mt-2 bg-gray-800 text-gray-400 rounded-lg text-sm p-5 space-x-5 flex",onSubmit:t=>{return r=void 0,o=void 0,s=function*(){if(t.preventDefault(),!n)return;const r=n.trim();e("");const o=yield z(r);a(o)},new((i=void 0)||(i=Promise))((function(n,e){function t(n){try{l(s.next(n))}catch(n){e(n)}}function a(n){try{l(s.throw(n))}catch(n){e(n)}}function l(e){var r;e.done?n(e.value):(r=e.value,r instanceof i?r:new i((function(n){n(r)}))).then(t,a)}l((s=s.apply(r,o||[])).next())}));var r,o,i,s}},r.createElement("input",{type:"text",className:"bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 focus:outline-none",value:n,onChange:n=>{e(n.target.value)},placeholder:"Type your message here..."}),r.createElement("button",{type:"submit",disabled:!n,className:"flex bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"},r.createElement(E.A,{className:"h-5 w-5 -rotate-45"}))),r.createElement(C,{response:t}))},N=()=>r.createElement("div",{className:"space-y-4"},r.createElement("header",{className:"flex justify-center"},r.createElement("h1",{className:"absolute top-4 right-4 text-xl font-medium text-neutral-900"},"Suicidal text detector")),r.createElement("main",{className:"flex flex-col justify-center"},r.createElement(S,null))),A=()=>r.createElement(v.BV,null,r.createElement(v.qh,{path:"/",element:r.createElement(N,null)}),r.createElement(v.qh,{path:"/Clips",element:r.createElement(k,null)})),j=()=>{const n=(0,v.Zp)(),e=(0,r.useCallback)((e=>{n(e)}),[n]);return r.createElement("nav",{className:"p-5"},r.createElement("ul",{className:"flex space-x-6 text-gray-800 text-md font-medium "},r.createElement("li",{className:"cursor-pointer hover:text-gray-950 hover:-translate-y-1 transition-all duration-500",onClick:()=>e("/")},"Model"),r.createElement("li",{className:"cursor-pointer hover:-translate-y-1 transition-all duration-500",onClick:()=>e("/Clips")},"Clipboard")))};!function(){const n=document.createElement("div");if(document.body.appendChild(n),!n)throw new Error("Can not find AppContainer");(0,a.H)(n).render(r.createElement(v.fS,null,r.createElement(j,null),r.createElement("div",{className:"mx-4"},r.createElement(A,null))))}()},73:(n,e,t)=>{n.exports=t.p+"328990df2e6fa98c63fd.webp"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,n=[],r.O=(e,t,a,o)=>{if(!t){var i=1/0;for(d=0;d<n.length;d++){for(var[t,a,o]=n[d],s=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((n=>r.O[n](t[l])))?t.splice(l--,1):(s=!1,o<i&&(i=o));if(s){n.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[t,a,o]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=t[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{r.b=document.baseURI||self.location.href;var n={887:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var a,o,[i,s,l]=t,c=0;if(i.some((e=>0!==n[e]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var d=l(r)}for(e&&e(t);c<i.length;c++)o=i[c],r.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return r.O(d)},t=self.webpackChunkroberta_fine_tuned_suicidal=self.webpackChunkroberta_fine_tuned_suicidal||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var a=r.O(void 0,[622,590],(()=>r(233)));a=r.O(a)})();