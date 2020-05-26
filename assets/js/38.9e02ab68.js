(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{341:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("本文中所用到的测试工具如下"),a("br"),t._v("\nkmci: karma + mocha + chai + istanbul"),a("br"),t._v("\n此文只涉及在vue-cli3中如何集成以上工具，不再详细介绍各个工具")])]),t._v(" "),a("h2",{attrs:{id:"mocha-chai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mocha-chai"}},[t._v("#")]),t._v(" mocha + chai")]),t._v(" "),a("p",[t._v("首先创建vue-cli3的项目")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue create unit-test\n")])])]),a("p",[t._v("在预设环境中选择unit-test 随后选择mocha + chai")]),t._v(" "),a("p",[t._v("之后项目就自带了vue-cli帮我们集成的mocha和chai")]),t._v(" "),a("h2",{attrs:{id:"karma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#karma"}},[t._v("#")]),t._v(" karma")]),t._v(" "),a("h3",{attrs:{id:"_1-安装相关依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装相关依赖"}},[t._v("#")]),t._v(" 1.安装相关依赖")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save-dev karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack\n")])])]),a("h3",{attrs:{id:"_2-配置karma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置karma"}},[t._v("#")]),t._v(" 2.配置karma")]),t._v(" "),a("p",[t._v("在项目的根目录执行karma的初始化方法，生成"),a("code",[t._v("karma.conf.js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("karma init\n")])])]),a("p",[t._v("初始化过程中，会有一些选项，用于生成配置文件的默认值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Which testing framework do you want to use ?\nPress tab to list possible options. Enter to move to the next question.\n> mocha\n\nDo you want to use Require.js ?\nThis will add Require.js plugin.\nPress tab to list possible options. Enter to move to the next question.\n> no\n\nDo you want to capture any browsers automatically ?\nPress tab to list possible options. Enter empty string to move to the next question.\n> Chrome\n>\n\nWhat is the location of your source and test files ?\nYou can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".\nEnter empty string to move to the next question.\n>\n\nShould any of the files included by the previous patterns be excluded ?\nYou can use glob patterns, eg. "**/*.swp".\nEnter empty string to move to the next question.\n>\n\nDo you want Karma to watch all the files and run the tests on change ?\nPress tab to list possible options.\n> yes\n')])])]),a("p",[t._v("更改生成的karma配置文件")]),t._v(" "),a("p",[t._v("添加了"),a("strong",[t._v("webpack")]),t._v("相关的配置，增加了"),a("strong",[t._v("测试文件")]),t._v("和"),a("strong",[t._v("需要预编辑的文件")]),t._v("的匹配条件式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// Karma configuration\n// Generated on Mon Jul 01 2019 18:02:32 GMT+0800 (GMT+08:00)\nlet webpackConfig = require('@vue/cli-service/webpack.config.js')\nmodule.exports = function (config) {\n  config.set({\n    webpack: webpackConfig,\n    // base path that will be used to resolve all patterns (eg. files, exclude)\n    basePath: '',\n\n    // frameworks to use\n    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter\n    frameworks: ['mocha'],\n\n    // list of files / patterns to load in the browser\n    files: [\n      'tests/**/*.spec.js'\n    ],\n\n    // list of files / patterns to exclude\n    exclude: [\n    ],\n\n    // preprocess matching files before serving them to the browser\n    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor\n    preprocessors: {\n      '**/*.spec.js': ['webpack', 'sourcemap']\n    },\n\n    // test results reporter to use\n    // possible values: 'dots', 'progress'\n    // available reporters: https://npmjs.org/browse/keyword/karma-reporter\n    reporters: ['spec'],\n\n    // web server port\n    port: 9876,\n\n    // enable / disable colors in the output (reporters and logs)\n    colors: true,\n\n    // level of logging\n    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG\n    logLevel: config.LOG_INFO,\n\n    // enable / disable watching file and executing tests whenever any file changes\n    autoWatch: true,\n\n    // start these browsers\n    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher\n    browsers: ['ChromeHeadless'],\n\n    // Continuous Integration mode\n    // if true, Karma captures browsers, runs the tests and exits\n    singleRun: false,\n\n    // Concurrency level\n    // how many browser should be started simultaneous\n    concurrency: Infinity\n  })\n}\n")])])]),a("h3",{attrs:{id:"_3-编写测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写测试用例"}},[t._v("#")]),t._v(" 3.编写测试用例")]),t._v(" "),a("p",[t._v("理论上应为每个Vue组件分别写一个单元测试文件。测试文件名应该为“"),a("strong",[t._v("[组件名].spec.js")]),t._v("”，比如组件名为"),a("code",[t._v("HelloWorld.vue")]),t._v("，那么对应的测试文件名为"),a("code",[t._v("HelloWorld.spec.js")])]),t._v(" "),a("h3",{attrs:{id:"_4-运行测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-运行测试用例"}},[t._v("#")]),t._v(" 4.运行测试用例")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("package.json")]),t._v("中添加一条script。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"test": "karma start"\n')])])]),a("p",[t._v("然后运行执行命令，开始测试。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm run test\n")])])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/dikentoujing99/article/details/86686348",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),a("OutboundLink")],1),t._v(": 若遇到webpack的编译报错请参考原文解决方案")]),t._v(" "),a("h2",{attrs:{id:"istanbul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#istanbul"}},[t._v("#")]),t._v(" istanbul")]),t._v(" "),a("h3",{attrs:{id:"_1-安装相关依赖-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装相关依赖-2"}},[t._v("#")]),t._v(" 1.安装相关依赖")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install --save-dev babel-plugin-istanbul istanbul-instrumenter-loader nyc\n")])])]),a("h3",{attrs:{id:"_2-配置babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置babel"}},[t._v("#")]),t._v(" 2.配置babel")]),t._v(" "),a("p",[t._v("babel.config.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/app'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-istanbul'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-配置webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置webpack"}},[t._v("#")]),t._v(" 3.配置webpack")]),t._v(" "),a("p",[t._v("vue.config.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("devtool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eval'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'istanbul'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(js|vue)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enforce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'istanbul-instrumenter-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'istanbul-instrumenter-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" esModules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-配置nyc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置nyc"}},[t._v("#")]),t._v(" 4.配置nyc")]),t._v(" "),a("p",[t._v("nyc是istanbul的命令行工具")]),t._v(" "),a("p",[t._v("package.json")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"nyc": {\n    "check-coverage": true,\n    "per-file": true,\n    "lines": 90,\n    "statements": 90,\n    "functions": 90,\n    "branches": 90,\n    "include": [\n      "src/**/*.{js,vue}"\n    ],\n    "exclude": [\n      "src/*.js"\n    ],\n    "reporter": [\n      "text",\n      "lcov",\n      "text-summary"\n    ],\n    "extension": [\n      ".js",\n      ".vue"\n    ],\n    "cache": true,\n    "all": true\n  }\n')])])]),a("h3",{attrs:{id:"_5-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用"}},[t._v("#")]),t._v(" 5.使用")]),t._v(" "),a("ul",[a("li",[t._v("Single-run: "),a("code",[t._v("nyc vue-cli-service test:unit")])]),t._v(" "),a("li",[t._v("Watched run: "),a("code",[t._v("nodemon --exec nyc vue-cli-service test:unit")])]),t._v(" "),a("li",[t._v("add "),a("code",[t._v("coverage")]),t._v(" and "),a("code",[t._v(".nyc_output")]),t._v(" to your "),a("code",[t._v(".gitignore")]),t._v(".")]),t._v(" "),a("li",[t._v("npm install --save-dev nodemon（用于监听）")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/1363",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考issue"),a("OutboundLink")],1),t._v("：遇到的一些问题的解决方案也都来源于issue")]),t._v(" "),a("h2",{attrs:{id:"vue-test-utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-test-utils"}},[t._v("#")]),t._v(" Vue Test Utils")]),t._v(" "),a("p",[t._v("直接安装即可使用 "),a("code",[t._v("npm install --save-dev @vue/test-utils")])]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/smallsunnyfox/frontend-unit-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("练习项目"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://istanbul.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Istanbul官网"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000011362879#articleHeader4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mocha中文文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f200a75a15d2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chai BDD 风格中文文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.chaijs.com/api/assert/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chai TDD 风格断言库"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://karma-runner.github.io/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Karma官网"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ElemeFE/element/tree/dev/test/unit",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-ui的单元测试"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue组件的单元测试"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/unit-testing-vue-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testing Vue.js Applications"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);