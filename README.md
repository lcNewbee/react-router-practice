## 运行

`npm install`

`npm run start`

## 问题1：

### 问题复现：

#### step1

在`src/pages/RoutePage.js`文件中，注释掉以下代码：

```js
<Route path="/about" component={About} />
<Route path="/user/:id" component={UserInfo} />
<Route path="/articles/:category" component={ArticleCatePage} />
```

同时打开如下代码：

```js
<PrivateRoute path="/about" component={About} />
<PrivateRoute path="/user/:id" component={UserInfo} />
<PrivateRoute path="/articles/:category" component={ArticleCatePage} />
```

#### step2：

1. 刷新页面，点击任意链接
2. 登录页填写姓名，点击登录

### 现象描述：

#### 期望：
1. 登录之后，页面跳转到未登录之前点击的链接页
2. 带有参数的路由也能正常跳转，浏览器url显示正常

#### 实际结果：
1. 页面重定向之后显示空白
2. 带有参数的路由页，浏览器参数显示异常，参数未能被替换

## 问题2：

### 问题复现：

#### step1:

`src/store/login/actionCreator.js`文件下，注释以下代码：

```js
dispatch(setIsLogin(isLogin))
dispatch(setLoginTime())
dispatch(setUserName(username))
```
同时打开如下代码：

```js
return new Promise((resolve) => {
  setTimeout(() => {
    dispatch(setIsLogin(isLogin))
    dispatch(setLoginTime())
    dispatch(setUserName(username))
    resolve(true)
  }, 1000)
})
```

#### step2:

刷新页面，进入登录页，填写姓名登录，查看action执行的日志

### 现象描述：

#### 期望：
1. 登录之后，等待一秒（模仿后端登录延迟），操作可正常修改store中的登录状态、登录时间，以及用户姓名
2. 操作日志打印各action执行正常。

#### 实际结果：
1. action执行出错，未能完成登录操作

