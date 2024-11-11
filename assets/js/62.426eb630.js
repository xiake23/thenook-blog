(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{428:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用vuepress-github-pages-github-action搭建博客并自定义域名-绑定自己的域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vuepress-github-pages-github-action搭建博客并自定义域名-绑定自己的域名"}},[s._v("#")]),s._v(" 使用vuepress+GitHub Pages+GitHub Action搭建博客并自定义域名（绑定自己的域名）")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本篇内容主要内容为使用GitHub Pages搭建静态页并绑定自定义域名，所以这里对于博客的搭建配置涉及内容不多。")]),s._v(" "),a("h2",{attrs:{id:"一、vuepress博客搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vuepress博客搭建"}},[s._v("#")]),s._v(" 一、vuepress博客搭建")]),s._v(" "),a("p",[s._v("​\t"),a("a",{attrs:{href:"https://doc.xugaoyi.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-vdoing (xugaoyi.com)"),a("OutboundLink")],1),s._v("是"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress v1.x (opens new window)"),a("OutboundLink")],1),s._v("的一个主题，是在"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("默认主题 (opens new window)"),a("OutboundLink")],1),s._v("基础上做的修改和扩展，很多配置仍然沿用"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方配置 (opens new window)"),a("OutboundLink")],1),s._v("。使用本主题可以很方便的搭建一个结构化的知识库或博客。本博客采用Vdoing主体搭建博客，对于相关的资料可以通过该主题的文档站以及vuepress的文档站进行查询，")]),s._v(" "),a("p",[s._v("也可以根据此博客查考搭建："),a("a",{attrs:{href:"https://xie.infoq.cn/article/4d2f62c87d188331342e62563",target:"_blank",rel:"noopener noreferrer"}},[s._v("一篇带你用 VuePress + Github Pages 搭建博客_JavaScript_冴羽_InfoQ写作社区"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"二、使用github-pages部署静态页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、使用github-pages部署静态页面"}},[s._v("#")]),s._v(" 二、使用GitHub Pages部署静态页面")]),s._v(" "),a("h3",{attrs:{id:"_2-1配置base路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1配置base路径"}},[s._v("#")]),s._v(" 2.1配置base路径")]),s._v(" "),a("p",[s._v("对于vuepress应用，可以在路径***docs/.vuepress/config.js***下添加***base***路径配置以添加全站路径后缀")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 路径名为 "/<REPO>/"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("base")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/learn-typescript/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("对于当前的vuepress-theme-vdoing主题，该配置为***docs/.vuepress/config.ts***，可以在export模块中添加相应配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241001233712291.png",alt:"image-20241001233712291"}})]),s._v(" "),a("p",[s._v("如配置为/blog/，那么全站的静态资源相对路径前面就会加上/blog/")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241001233807406.png",alt:"image-20241001233807406"}})]),s._v(" "),a("p",[s._v("对于使用GitHub Pages部署且不绑定自定义域名的仓库来说，GitHub Pages的访问路径为***http(s)😕/<用户名>.github.io/<仓库名>***，当访问***/<仓库名>"),a("em",[a("strong",[s._v("该路径时会优先访问本项目指定分支下根目录***index.html")])]),s._v(" 文件（如上图），而vuepress编译后的静态文件路径会添加上我们配置的base路径，比如此时本项目名为***thenook-blog***，那么我们配置***base***为***/thenook-blog/*** (注意前后斜杠不可缺省)")]),s._v(" "),a("h3",{attrs:{id:"_2-2添加部署脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2添加部署脚本"}},[s._v("#")]),s._v(" 2.2添加部署脚本")]),s._v(" "),a("p",[s._v("进入项目根路径，我们添加一个deploy.sh 脚本文件（vdoing项目已经写好了），内容如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("push_addr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote get-url "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--push")]),s._v(" origin"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("commit_info")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--always")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--long")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dist_path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包生成的文件夹路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("push_branch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gh-pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送的分支")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件  windows系统下需要使用build:win 命令编译，Linux下使用build命令即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:win\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dist_path")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy, '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$commit_info")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$push_addr")]),s._v(" HEAD:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$push_branch")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dist_path")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("执行时注意，"),a("em",[a("strong",[s._v("Windows系统需要使用build:win 命令编译，Linux下使用build命令即可")])]),s._v("，而在Windows系统中，cmd是不能直接执行shell脚本的，Git Bash是Git for Windows的一部分，它提供了一个Bash环境，可以用来执行shell脚本。")]),s._v(" "),a("p",[s._v("进入项目仓库路径，我们执行新添加的脚本")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241001234857248.png",alt:"image-20241001234857248"}})]),s._v(" "),a("p",[s._v("编译推送成功之后，我们可以在项目的git分支上看到多了一个***gh-pages***分支，此时分支上即是我们编译后生成的静态资源文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241001235031520.png",alt:"image-20241001235031520"}})]),s._v(" "),a("p",[s._v("此时打开项目的Setting-Pages配置项，即可看到咱们部署成功且可以看到相应的github Pages访问路径")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241001235559354.png",alt:"image-20241001235559354"}})]),s._v(" "),a("h2",{attrs:{id:"三、使用自定义域名根目录访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、使用自定义域名根目录访问"}},[s._v("#")]),s._v(" 三、使用自定义域名根目录访问")]),s._v(" "),a("p",[s._v("对于GitHub Pages部署的应用，GitHub允许用户添加自定义的域名进行访问，如本站的blog.9ok.fun 且***不需要添加仓库名***（如上面的 [thenook-blog] ）作为路径。")]),s._v(" "),a("p",[s._v("这里简单介绍一下 apex 域名和子域名，例如 aiproducthome.top 是 apex 域名，apex 就是顶级的意思，也就是顶级域名。而 www.aiproducthome.top 或 blog.aiproducthome.top 都被成为子域名，它们都属于 aiproducthome.top 域下的。")]),s._v(" "),a("blockquote",[a("p",[s._v("如果需要添加二级域名，可以参考3.1/3.4-3.7，如果只需要添加顶级域名，则参考3.1-3.4即可")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-在账户中验证域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-在账户中验证域名"}},[s._v("#")]),s._v(" 3.1 在账户中验证域名")]),s._v(" "),a("p",[s._v("验证自定义域名\nGithub 提供了验证自定义域名的功能，该功能可以防止恶意对手发起域名劫持一类的攻击。所以首先我们先完成对你的域名的验证。")]),s._v(" "),a("p",[s._v("第一步，在任意 Github 页面点击右上角头像\n第二步，在弹出的下拉框中，点击 Settings")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003212739631.png",alt:"image-20241003212739631"}})]),s._v(" "),a("p",[s._v("第三步，在左侧栏找到 code，planning，and automation，并点击其中的 Pages选项")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003212801177.png",alt:"image-20241003212801177"}})]),s._v(" "),a("p",[s._v("第四步，在右侧输入要验证的域名（如 aiproducthome.top），并点击 Add domain按钮")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003212840483.png",alt:"image-20241003212840483"}})]),s._v(" "),a("p",[s._v("然后你会获得如下的记录，并继续按照该记录所示的步骤进行验证")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003212919214.png",alt:"image-20241003212919214"}})]),s._v(" "),a("p",[s._v("接记录所需验证步骤，第五步，进入你购买域名网站，并进入你的域名的管理界面，虽然不同的域名服务提供商相关的界面不同，但大体它们的组成是相同。这里以Cloudflare为例，进入网站管理处-DNS记录")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003213043130.png",alt:"image-20241003213043130"}})]),s._v(" "),a("p",[s._v("在记录中， 选择为 TXT 类型，名称为第四步中的 hostname，即 _github-pages 开头的内容，内容是第四步中的 code，它是一串数字和英文组成的字符串。而 TTL 值选择默认即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003213146756.png",alt:"image-20241003213146756"}})]),s._v(" "),a("p",[s._v("当上述内容配置好后，返回第四步的验证页面，点击 "),a("code",[s._v("Verify")]),s._v("按钮。虽然理论上说的是需要 24 小时才可能验证成功，实际上不出意外，仅需要几分钟即可完成验证。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003213310586.png",alt:"image-20241003213310586"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003221641382.png",alt:"image-20241003221641382"}})]),s._v(" "),a("p",[s._v("到这里就可以验证域名的归属了，这一步可以避免你的域名被其他人绑定到他们的账号！")]),s._v(" "),a("h3",{attrs:{id:"_3-2-在域名注册商-dns解析-配置a记录指向github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-在域名注册商-dns解析-配置a记录指向github"}},[s._v("#")]),s._v(" 3.2 在域名注册商（DNS解析）配置A记录指向GitHub")]),s._v(" "),a("p",[s._v("对于www子域和顶级域名，github支持使用A记录指向Pages，我们可以在域名注册商或者DNS解析商处添加我们的域名A记录")]),s._v(" "),a("p",[s._v("第一步，还是在你的域名服务提供商的管理网页中，配置 A 记录类型，该类型用于将域名（例如，aiproducthome.top）指向 IP 地址。")]),s._v(" "),a("p",[s._v("记录类型选择A记录，名称填@  代表无子域名前缀也就是顶级域名，内容填写github的服务器ip地址，这里填写4个ip，可以实现轮询，这四个 IP 地址大家都一样，具体见 "),a("a",{attrs:{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github 官方文档"),a("OutboundLink")],1),s._v("），如下所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003221216911.png",alt:"image-20241003221216911"}})]),s._v(" "),a("h3",{attrs:{id:"_3-3-在仓库pages配置顶级域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-在仓库pages配置顶级域名"}},[s._v("#")]),s._v(" 3.3 在仓库Pages配置顶级域名")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003222025548.png",alt:"image-20241003222025548"}})]),s._v(" "),a("h3",{attrs:{id:"_3-4-在需要绑定域名的项目重新配置文件访问路径-取消资源的目录前缀并重新部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-在需要绑定域名的项目重新配置文件访问路径-取消资源的目录前缀并重新部署"}},[s._v("#")]),s._v(" 3.4 在需要绑定域名的项目重新配置文件访问路径，取消资源的目录前缀并重新部署")]),s._v(" "),a("p",[s._v("在第二节里面我们讲到需要配置***base路径***，是因为我们需要让浏览器在访问域名+文件目录的访问路径时可以正确访问到对应的静态资源，而当我们绑定了自定义域名时，我们不再需要访问***http(s)😕/<用户名>.github.io/<仓库名>***了，我们可以直接通过http(s)😕/<自定义域名>/进行访问了，发现什么没有？我们只需要访问域名，而不再像之前我们访问域名后还需要加仓库名称了，那么，我们访问资源时也需要对应的不带仓库名的目录前缀，因此我们需要再自定义域名的情况下，把***base***修改为“//”，或者直接注释去掉这一配置，然后重新执行我们的deploy.sh 脚本以实现新的访问路径生效。")]),s._v(" "),a("h3",{attrs:{id:"_3-5-在域名注册商-dns解析-配置cname记录指向github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-在域名注册商-dns解析-配置cname记录指向github-pages"}},[s._v("#")]),s._v(" 3.5 在域名注册商（DNS解析）配置CNAME记录指向GitHub Pages")]),s._v(" "),a("p",[s._v("在第一步中我们其实配置的就是 apex 域名，而下面我们可以配置一些子域名，例如常见的 www 域名。")]),s._v(" "),a("p",[s._v("方法类似添加顶级域名，同样是点击 Add New Record，然后 Type 选择 CNAME（含义见记录类型小节），Name 填写 www，Value 填写 "),a("username",[s._v(".github.io，TTL 默认即可。最后Save按钮。")])],1),s._v(" "),a("p",[s._v("接记录所需验证步骤，第五步，进入你购买域名网站，并进入你的域名的管理界面，虽然不同的域名服务提供商相关的界面不同，但大体它们的组成是相同。这里以Cloudflare为例，进入网站管理处-DNS记录")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003213043130.png",alt:"image-20241003213043130"}})]),s._v(" "),a("p",[s._v("在记录中， 选择为 CNAME类型，这是为了避免github的ip变化而导致域名解析失败，名称为第四步中的 我们想配置的二级域名，这里我配置的是blog，目标就填我们原先Pages分配的二级域名，而 TTL 值选择默认即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003214616704.png",alt:"image-20241003214616704"}})]),s._v(" "),a("p",[s._v("到此，在域名服务商部分需要进行的 DNS 配置就完成了，上述内容需要花费一点时间在网络的各个 DNS 服务器上进行传播，接着我们回到 Github 进行相应的配置。")]),s._v(" "),a("p",[s._v("如果使用A记录指向github，则会出现以下提示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003220754636.png",alt:"image-20241003220754636"}})]),s._v(" "),a("h3",{attrs:{id:"_3-6-在仓库pages项添加自定义域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-在仓库pages项添加自定义域名"}},[s._v("#")]),s._v(" 3.6 在仓库Pages项添加自定义域名")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002011116721.png",alt:"image-20241002011116721"}})]),s._v(" "),a("p",[s._v("所有的任务就完成了，你可以通过顶级域名，子域名（www）或者之前的 github.io 的域名来访问，所有的内容都会跳转到自定义域名上。")]),s._v(" "),a("h3",{attrs:{id:"_3-7-防止重新部署导致cname记录绑定失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-防止重新部署导致cname记录绑定失败"}},[s._v("#")]),s._v(" 3.7 防止重新部署导致CNAME记录绑定失败")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002011141937.png",alt:"image-20241002011141937"}})]),s._v(" "),a("p",[s._v("在部署完GitHub Pages应用之后，每次我们打开相关配置项的时候都会发现访问链接变成了官方的二级链接（即使我们之前已经绑定过了），这是因为我们的项目默认是没有CNAME记录文件的，我们手动绑定后，GitHub会替我们在gh-pages分支的根目录下创建一个CNAME文件，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002011200251.png",alt:"image-20241002011200251"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002123510918.png",alt:"image-20241002123510918"}})]),s._v(" "),a("p",[s._v("而我们重新执行部署文件之后，我们生成的静态文件里面是不包含该文件的，因此，我们可以将该文件复制出来，在每次部署后都在项目根路径上添加该文件，保持我们的CNAME绑定关系被该仓库正常识别，实现思路如下")]),s._v(" "),a("ul",[a("li",[s._v("每次build之后手动添加该文件")]),s._v(" "),a("li",[s._v("每次build之时自动添加该文件")])]),s._v(" "),a("p",[s._v("很明显，对于我们一个应用来说，频繁改动时手动上传该文件对我们来说太繁琐了，我们肯定是使用第二种方式，而对于vuepress程序，我们可以将固定参与编译的静态文件放在资源路径***docs/.vuepress/public***下，对于GitHub给我们生成的文件，我们也可以采用***git cherry-pick***指令指定将不同分支的提交进行优选，而对于本次操作，我们使用以下指令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick cbfc4b70\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中，cbfc4b70是github给我们自动添加CNAME文件的git修订号")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002125046094.png",alt:"image-20241002125046094"}})]),s._v(" "),a("p",[s._v("将文件移动到public目录下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002125626790.png",alt:"image-20241002125626790"}})]),s._v(" "),a("p",[s._v("重新执行部署文件后，查看静态文件资源会发现已经添加了相关的CNAME文件：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002125803674.png",alt:"image-20241002125803674"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002125823282.png",alt:"image-20241002125823282"}})]),s._v(" "),a("p",[s._v("再次查看该仓库的Pages设置，发现已经自动绑定上我们的域名")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241002011215706.png",alt:"image-20241002011215706"}})]),s._v(" "),a("h1",{attrs:{id:"四、使用github-action实现自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、使用github-action实现自动化部署"}},[s._v("#")]),s._v(" 四、使用GitHub Action实现自动化部署")]),s._v(" "),a("p",[s._v("在***.github/workflows***添加自动部署脚本，命名***ci.yml***，内容如下：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CI\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#on: [push]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在master分支发生push事件时触发。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动触发部署")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Asia/Shanghai "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时区（设置时区可使页面中的`最近更新时间`使用该时区时间）")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行在虚拟机环境ubuntu-latest")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("strategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matrix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("18.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Use Node.js $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" matrix.node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤2")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v3 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作用：安装nodejs")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" matrix.node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("and"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 步骤3")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          remote_addr=`git remote get-url --push origin`\n          commit_info=`git describe --all --always --long`\n          user_name=`git log -1 --pretty=format:'%an'`\n          user_email=`git log -1 --pretty=format:'%ae'`\n          deploy_branch=gh-pages\n          yarn\n          yarn build\n          cd docs/.vuepress/dist\n          git config --global init.defaultBranch $deploy_branch\n          git init\n          git config user.name ${user_name}\n          git config user.email ${user_email}\n          git add -A\n          git commit -m \"auto deploy, $commit_info\"\n          remote_addr=`echo $remote_addr | awk -F'://' '{print $2}'`\n          remote_addr=https://${user_name}:${{secrets.GITHUB_TOKEN}}@${remote_addr}\n          git remote add origin ${remote_addr}\n          git push origin HEAD:$deploy_branch --force # 推送到github $deploy_branch分支")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("p",[s._v("推送到github仓库，选择Action，发现已经有以下workflow：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/xiake23/PicGo-Images/note/image-20241003210751807.png",alt:"image-20241003210751807"}})]),s._v(" "),a("p",[s._v("右侧是workflow的执行日志，检查没有报错，每次我们对于master分支的推送就会自动触发该ci脚本执行了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);