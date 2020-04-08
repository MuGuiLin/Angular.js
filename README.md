
# Angular Cli的使用：

	Angular Cli是Angular对一系列工程化构建工具的组合，能让开发者更容易的搭建Angular工程项目。
```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △\ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
```

注：在此之前请选安装好Node.js环境和npm包管理工具（注：一般在安装Node.js环境时npm默认自动就安装好了）

这里实例的版本：
	node -v : v10.15.0
	npm -v : 6.5.0
	ng v: 7.1.4
	
	ng help: 查看Angular相关命令:
	
		add：				为项目添加对外部库的支持。
	  	build（缩写 b）：	将Angular应用程序编译到给定输出路径中名为dist /的输出目录中。必须从工作空间目录中执行。
	  	config：			在工作空间的angular在工作空间的angular.json文件中检索或设置Angular配置值。
	  	doc（缩写 d）：		在浏览器中打开官方Angular文档（angular在浏览器中打开官方Angular文档（angular.io），并搜索给定的关键字。
	  	e2e（缩写 e）：		构建并提供Angular应用程序，然后使用Protractor运行端到端测试。构建并提供Angular应用程序，然后使用Protractor运行端到端测试。
	  	generate（缩写 g）：生成基于原理图生成和/或修改文件。
	  	help：				列出可用命令及其简短描述。
	  	lint（缩写 l）：	在给定项目文件夹中的Angular应用程序代码上运行linting工具。
	  	new（缩写 n）：		创建一个新工作区和一个初始Angular应用程序。
	  	run：				使用项目中定义的可选自定义构建器配置运行Architect目标。
	  	serve（缩写 s）：	构建并提供应用程序，重建文件更改。
	  	test（缩写 t）：	在项目中运行单元测试。
	  	update：			更新您的应用程序及其依赖项。见https://update.angular.io/
	  	version（缩写 v）：	输出Angular CLI版本。
	  	xi18n：				从源代码中提取i18n消息。
	
	【以上命在使用前先加上ng 】

	
	
## 一、安装Angular Cli脚手架(如果已安装Angular Cli脚手架 此步略过)

	npm install -g @angular/cli 【注：是全局安装，所以要加上-g】
	
	或
	
	yarn global add @angular/cli
	
	
## 二、创建项目
	1、ng new 项目名 （此时会在当前目录创建一个以上面的项目名为文件夹名的项目文件夹（里面包含相应的项目目录、模块、配置文件等））
	
	【ng new 项目名 --skip-install】  // 由于默认是用npm安装很慢，加上--skip-install 后就是只创建项目而不安装依赖，等项目创建好后，
	
	【cd 项目名】再用 cnpm install 或 yarn install 来安装哦！
	
	2、Would you like to add Angular routing? Yes	//您想添加Angular路由吗？ 是
	
	3、Which stylesheet format would you like to use? CSS	//您想使用哪种样式表格式？CSS 选择css编译方式（原CSS、LASS、SASS）
	
	4、开始安装...
	
安装NG-ZORRO UI框架：

	cd 项目名 -> ng add ng-zorro-antd
	
创建组件：
	ng g			// 使用 ng g命令可以查看，可以通过命令来创建的组件、菜单、类、服务等
		appShell
		application
		class
		component
		directive
		enum
		guard
		interface
		library
		module
		pipe
		service
		serviceWorker
		universal
		webWorker

现在以创建header组件为例：
		ng g component components/header 			// 注：组件目录名(一般为components)
		ng g component components/menu				// 创建菜单组件
		
	注：通过以上两个命令后，系统会在src/app目录下生成一个components目录，而目录下就是刚创建的两个组件 header 和 menu，目录下分别是 结构：html, 样式：css，业务逻辑：ts，单元测试：ts 这4个文件
	
	
## 三、运行、打包【注：以下命令要在项目根目录执行】
	0、cd 项目名
	
	1、运行（启动）：
		ng serve 或 npm start  (默认监听 http://localhost:4200 )
	
	
	2、打包（构建）：
		ng build 或 npm build （此时会在项目根目录生成一个叫dist的文件夹，这个里面的内容就是打包好的文件，可以直接在浏览器运行！）
		
		npm run-script build

		【注：打包后 路径错误导致页面404    解决：ng build  --base-href ./     //就是在ng build 后面加上 --base-href ./ 】
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	