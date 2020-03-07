## Overview

This app is a sample app for React Native beginners to learn basic redux, 
asynchronous communication, component creation, etc.

With this app, you can search GitHub repositories.

## Constitution

This app uses Redux architecture. 
The Redux architecture features an unidirectional data flow. 
Its components are Store, Action, Reducer, Component, (+ Middleware).

```
----------source_tree----------

src
 - action
  - default_action
  - ui_action
  - model_action
 -component
  - Top
  - Header
  - Repo_SearchBar
  - Repo_FlatList
 - reducer
  - default_reducer
  - ui_reducer
  - model_reducer
 - middleware
  - center_middleware
  - watchFetchAction
  
  + configure_store.js 
  + index.js //this file is main file
```


## Finally

I'm a beginner even Javascript, not React Native. 
Therefore, there may be trivial notation mistakes, 
architectural design mistakes, and possibly serious mistakes. 
I would like to thank someone who points them out.

## TODO
- enable see defail of repositories (using webview)
