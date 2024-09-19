window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"navigationPathType":"path","baseUrl":"https://calebroenigk.github.io/randomMTA/"},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"backgroundColor":"#101010","alignItems":"center","width":{"value":100,"unit":"vw"},"height":{"value":100,"unit":"vh"},"paddingTop":{"value":64,"unit":"px"},"paddingLeft":{"value":64,"unit":"px"},"paddingRight":{"value":64,"unit":"px"},"paddingBottom":{"value":88,"unit":"px"}},"ports":[],"children":[{"id":"6608df9b-818e-b10a-50db-9ce628b4823d","type":"Group","parameters":{"justifyContent":"space-between","rowGap":{"value":8,"unit":"px"},"styleCss":"/* background-color: red; */\nalign-items: stretch;"},"ports":[],"children":[{"id":"b8f6e86f-6335-5c1c-e20f-2650eba78e8a","type":"Router","parameters":{"name":"main","pages":{"routes":["/Home","/Settings","/Progression"],"startPage":"/Home"},"clip":"contentHeight"},"ports":[],"children":[]},{"id":"2b7ebfd8-9791-84e9-df18-a7517e9052a0","type":"Group","parameters":{"styleCss":"height: fit-content;","opacity":0.25,"justifyContent":"space-between","flexDirection":"row","alignItems":"center","sizeMode":"contentHeight"},"ports":[],"children":[{"id":"2933d8f1-4a57-493e-3cc6-436c2de13d9e","type":"Text","parameters":{"sizeMode":"contentSize","color":"#f2f2f2","text":"Settings","styleCss":"white-space: nowrap;\ncursor: pointer;","fontSize":{"value":16,"unit":"px"},"fontFamily":"Helvetica","lineHeight":{"value":1,"unit":""}},"ports":[],"children":[]},{"id":"62cce157-4566-6653-83ed-47c6e027ba5e","type":"Text","parameters":{"sizeMode":"contentSize","color":"#f2f2f2","text":"Report an issue","styleCss":"white-space: nowrap;","fontSize":{"value":16,"unit":"px"},"fontFamily":"Helvetica","lineHeight":{"value":1,"unit":""}},"ports":[],"children":[]},{"id":"a0c88041-458a-15ce-61ca-7252905a7917","type":"Text","parameters":{"color":"#f2f2f2","fontFamily":"Helvetica","fontSize":{"value":24,"unit":"px"},"styleCss":"white-space: nowrap;\nwidth: fit-content;\nheight: fit-content;\ntransform: translateY(calc(calc(1em + 4px) * -1));","sizeMode":"contentSize","lineHeight":{"value":1,"unit":""},"position":"absolute","alignY":"top","alignX":"right"},"ports":[],"children":[]}]}]}]},{"id":"63f44a30-cfcb-8bd0-f0b5-8e25f1eda3b6","type":"RouterNavigate","parameters":{"router":"main","target":"/Settings"},"ports":[],"children":[]},{"id":"6ce94d6f-6f8d-f3f1-a271-2b61c86b2741","type":"Variable2","parameters":{"name":"OuterPad"},"ports":[],"children":[]},{"id":"0d3751ed-0412-b0e9-cfb2-9e1e81cb8a20","type":"Set Variable","parameters":{"setWith":"number","value":48},"ports":[],"children":[]},{"id":"c67fabd1-5f8c-7743-6ba3-8e8744bf3a57","type":"/Logic/Get Date String","parameters":{},"ports":[],"children":[]},{"id":"d6f0a090-0089-bb5f-11e6-4b0dc42ffceb","type":"Variable2","parameters":{"name":"PreviousPage"},"ports":[],"children":[]},{"id":"1686750c-4db5-4f59-1c7c-7a6db7ef041f","type":"Set Variable","parameters":{"name":"PreviousPage","setWith":"string","value":"home"},"ports":[],"children":[]},{"id":"7b8e40d7-ec88-7f98-6dd2-e3c870cdc667","type":"/Logic/Load Settings","parameters":{},"ports":[],"children":[]},{"id":"c3182b84-80a9-d818-5065-f73b3c64f9d6","type":"/Logic/New Visit","parameters":{},"ports":[],"children":[]}],"connections":[{"sourceId":"2933d8f1-4a57-493e-3cc6-436c2de13d9e","sourcePort":"onClick","targetId":"63f44a30-cfcb-8bd0-f0b5-8e25f1eda3b6","targetPort":"navigate"},{"sourceId":"6ce94d6f-6f8d-f3f1-a271-2b61c86b2741","sourcePort":"name","targetId":"0d3751ed-0412-b0e9-cfb2-9e1e81cb8a20","targetPort":"name"},{"sourceId":"246f9453-a119-ac78-171e-3806cf596ecc","sourcePort":"didMount","targetId":"0d3751ed-0412-b0e9-cfb2-9e1e81cb8a20","targetPort":"do"},{"sourceId":"6ce94d6f-6f8d-f3f1-a271-2b61c86b2741","sourcePort":"value","targetId":"246f9453-a119-ac78-171e-3806cf596ecc","targetPort":"paddingLeft"},{"sourceId":"6ce94d6f-6f8d-f3f1-a271-2b61c86b2741","sourcePort":"value","targetId":"246f9453-a119-ac78-171e-3806cf596ecc","targetPort":"paddingRight"},{"sourceId":"6ce94d6f-6f8d-f3f1-a271-2b61c86b2741","sourcePort":"value","targetId":"246f9453-a119-ac78-171e-3806cf596ecc","targetPort":"paddingTop"},{"sourceId":"6ce94d6f-6f8d-f3f1-a271-2b61c86b2741","sourcePort":"value","targetId":"246f9453-a119-ac78-171e-3806cf596ecc","targetPort":"paddingBottom"},{"sourceId":"c67fabd1-5f8c-7743-6ba3-8e8744bf3a57","sourcePort":"Text","targetId":"a0c88041-458a-15ce-61ca-7252905a7917","targetPort":"text"},{"sourceId":"246f9453-a119-ac78-171e-3806cf596ecc","sourcePort":"didMount","targetId":"1686750c-4db5-4f59-1c7c-7a6db7ef041f","targetPort":"do"},{"sourceId":"d6f0a090-0089-bb5f-11e6-4b0dc42ffceb","sourcePort":"name","targetId":"1686750c-4db5-4f59-1c7c-7a6db7ef041f","targetPort":"name"},{"sourceId":"246f9453-a119-ac78-171e-3806cf596ecc","sourcePort":"didMount","targetId":"7b8e40d7-ec88-7f98-6dd2-e3c870cdc667","targetPort":"Do"},{"sourceId":"246f9453-a119-ac78-171e-3806cf596ecc","sourcePort":"didMount","targetId":"c3182b84-80a9-d818-5065-f73b3c64f9d6","targetPort":"Do"}],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"623px","height":"630px"},"canvasPos":{"x":198.432422033227,"y":-15.874593762658161}}},{"name":"/Logic/Get Date String","nodes":[{"id":"ac602784-631a-dfce-1896-b21b4036c0f0","type":"Date To String","parameters":{"formatString":"{date},{year}"},"ports":[],"children":[]},{"id":"4bb17348-4a53-535c-0dfe-9d269cf93b45","type":"JavaScriptFunction","parameters":{"scriptOutputs":[{"id":"pxt4","label":"Date"}],"outtype-Date":"date","functionScript":"Outputs.Date = new Date();"},"ports":[{"name":"outtype-Date","displayName":"Type","editorName":"Date | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"pxt4","index":4},{"name":"out-Date","displayName":"Date","plug":"output","type":"date","group":"Outputs","index":5}],"children":[]},{"id":"a78056a5-33e5-a2d6-579e-12e29dc3f14f","type":"String Mapper","parameters":{"input 0":"01","input 1":"02","input 2":"03","input 3":"04","input 4":"05","input 5":"06","input 6":"07","input 7":"08","input 8":"09","input 9":"10","input 10":"11","input 11":"12","defaultMapping":"January","output 0":"January","output 1":"February","output 2":"March","output 3":"April","output 4":"May","output 5":"June","output 6":"July","output 7":"August","output 8":"September","output 9":"October","output 10":"November","output 11":"December"},"ports":[],"children":[]},{"id":"14f2754f-c8e6-ca41-06e3-2a6156cdd2f7","type":"Date To String","parameters":{"formatString":"{month}"},"ports":[],"children":[]},{"id":"b6d2a042-3681-54d4-7484-c118657fbcb6","type":"String Format","parameters":{"format":"{month} {date}"},"ports":[],"children":[]},{"id":"85c987d8-c5d1-d25d-fd0b-f54abeec0653","type":"Component Outputs","parameters":{},"ports":[],"children":[]}],"connections":[{"sourceId":"4bb17348-4a53-535c-0dfe-9d269cf93b45","sourcePort":"out-Date","targetId":"ac602784-631a-dfce-1896-b21b4036c0f0","targetPort":"input"},{"sourceId":"4bb17348-4a53-535c-0dfe-9d269cf93b45","sourcePort":"out-Date","targetId":"14f2754f-c8e6-ca41-06e3-2a6156cdd2f7","targetPort":"input"},{"sourceId":"14f2754f-c8e6-ca41-06e3-2a6156cdd2f7","sourcePort":"currentValue","targetId":"a78056a5-33e5-a2d6-579e-12e29dc3f14f","targetPort":"inputString"},{"sourceId":"ac602784-631a-dfce-1896-b21b4036c0f0","sourcePort":"currentValue","targetId":"b6d2a042-3681-54d4-7484-c118657fbcb6","targetPort":"date"},{"sourceId":"a78056a5-33e5-a2d6-579e-12e29dc3f14f","sourcePort":"mappedString","targetId":"b6d2a042-3681-54d4-7484-c118657fbcb6","targetPort":"month"},{"sourceId":"b6d2a042-3681-54d4-7484-c118657fbcb6","sourcePort":"formatted","targetId":"85c987d8-c5d1-d25d-fd0b-f54abeec0653","targetPort":"Text"}],"ports":[{"name":"Text","type":"string","plug":"output","index":0}],"roots":[]},{"name":"/Logic/New Visit","nodes":[{"id":"ce87e091-9fbc-ba15-49b8-8c7a94da2bbc","type":"Component Inputs","parameters":{},"ports":[],"children":[]},{"id":"de2f1e9b-0412-967e-2078-37798401daf3","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"c8c406d9-d28b-ca1f-835b-756800d05580","type":"JavaScriptFunction","parameters":{"scriptOutputs":[{"id":"jvvw","label":"Done"}],"outtype-Settings":"object","functionScript":"if(Inputs.CanStoreData) {\n    let userData = JSON.parse(localStorage.getItem('userData'));\n    userData['last-visit'] = new Date();\n\n    localStorage.setItem('userData', JSON.stringify(userData));\n}\n\nOutputs.Done();\n\n","outtype-Done":"signal","scriptInputs":[{"id":"dbu7","label":"CanStoreData"}],"intype-DarkMode":"boolean","intype-StoreData":"boolean","intype-FactID":"number","intype-CanStoreData":"boolean"},"ports":[{"name":"outtype-Done","displayName":"Type","editorName":"Done | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"jvvw","index":4},{"name":"out-Done","displayName":"Done","plug":"output","type":"signal","group":"Outputs","index":5},{"name":"intype-CanStoreData","displayName":"Type","editorName":"CanStoreData | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"}],"allowEditOnly":true},"default":"string","parent":"scriptInputs","parentItemId":"dbu7","index":6},{"name":"in-CanStoreData","displayName":"CanStoreData","plug":"input","type":"boolean","group":"Inputs","index":7}],"children":[]},{"id":"cf412830-1ca7-9219-2d1f-0e123d540cb4","type":"/Logic/Load Settings","parameters":{},"ports":[],"children":[]}],"connections":[{"sourceId":"ce87e091-9fbc-ba15-49b8-8c7a94da2bbc","sourcePort":"Do","targetId":"cf412830-1ca7-9219-2d1f-0e123d540cb4","targetPort":"Do"},{"sourceId":"cf412830-1ca7-9219-2d1f-0e123d540cb4","sourcePort":"Done","targetId":"c8c406d9-d28b-ca1f-835b-756800d05580","targetPort":"run"},{"sourceId":"cf412830-1ca7-9219-2d1f-0e123d540cb4","sourcePort":"Store Data","targetId":"c8c406d9-d28b-ca1f-835b-756800d05580","targetPort":"in-CanStoreData"},{"sourceId":"c8c406d9-d28b-ca1f-835b-756800d05580","sourcePort":"out-Done","targetId":"de2f1e9b-0412-967e-2078-37798401daf3","targetPort":"Done"}],"ports":[{"name":"Do","type":{"name":"signal","allowConnectionsOnly":true},"group":"Actions","plug":"input","index":0},{"name":"Done","type":"signal","plug":"output","index":1},{"name":"Dark Mode","type":"*","plug":"input","index":1},{"name":"Store Data","type":"*","plug":"input","index":2}],"roots":[]},{"name":"/Logic/Load Settings","nodes":[{"id":"e54bf405-2f82-4d33-c365-a26defed8293","type":"Component Inputs","parameters":{},"ports":[],"children":[]},{"id":"bcb959ff-dcb8-d3d1-e1ca-98ae2aa297e7","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"8c00a4a4-cae2-23e8-a064-53cd7e9b6567","type":"JavaScriptFunction","parameters":{"scriptOutputs":[{"id":"hp30","label":"Settings"},{"id":"jvvw","label":"Done"}],"outtype-Settings":"object","functionScript":"Outputs.Settings = JSON.parse(localStorage.getItem('settings'));\nOutputs.Done();","outtype-Done":"signal"},"ports":[{"name":"outtype-Settings","displayName":"Type","editorName":"Settings | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"hp30","index":4},{"name":"out-Settings","displayName":"Settings","plug":"output","type":"object","group":"Outputs","index":5},{"name":"outtype-Done","displayName":"Type","editorName":"Done | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"jvvw","index":6},{"name":"out-Done","displayName":"Done","plug":"output","type":"signal","group":"Outputs","index":7}],"children":[]},{"id":"15c95327-d31d-5797-20ef-d547a55455b5","type":"JavaScriptFunction","parameters":{"scriptOutputs":[{"id":"w1wy","label":"Exists"}],"outtype-Settings":"object","functionScript":"Outputs.Exists = Inputs.Settings != null;","scriptInputs":[{"id":"iuge","label":"Settings"}],"intype-Settings":"object","outtype-Settings Exists":"boolean","outtype-Exists":"boolean"},"ports":[{"name":"outtype-Exists","displayName":"Type","editorName":"Exists | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"w1wy","index":4},{"name":"out-Exists","displayName":"Exists","plug":"output","type":"boolean","group":"Outputs","index":5},{"name":"intype-Settings","displayName":"Type","editorName":"Settings | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"}],"allowEditOnly":true},"default":"string","parent":"scriptInputs","parentItemId":"iuge","index":6},{"name":"in-Settings","displayName":"Settings","plug":"input","type":"object","group":"Inputs","index":7}],"children":[]},{"id":"7ff37fa7-feb5-b765-cc1a-6f32cf4ba221","type":"JavaScriptFunction","parameters":{"scriptOutputs":[{"id":"090d","label":"DarkMode"},{"id":"yw42","label":"StoreData"},{"id":"kt9o","label":"Done"}],"outtype-Settings":"object","functionScript":"if(Inputs.Settings != null) {\n    Outputs.DarkMode = Inputs.Settings.darkmode;\n    Outputs.StoreData = Inputs.Settings.storeData;\n} else {\n    Outputs.DarkMode = true;\n    Outputs.StoreData = false;\n}\n\nOutputs.Done();\n","scriptInputs":[{"id":"iuge","label":"Settings"}],"intype-Settings":"object","outtype-Settings Exists":"boolean","outtype-Exists":"boolean","outtype-DarkMode":"boolean","outtype-StoreCookies":"boolean","outtype-StoreData":"boolean","outtype-Done":"signal"},"ports":[{"name":"outtype-DarkMode","displayName":"Type","editorName":"DarkMode | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"090d","index":4},{"name":"out-DarkMode","displayName":"DarkMode","plug":"output","type":"boolean","group":"Outputs","index":5},{"name":"outtype-StoreData","displayName":"Type","editorName":"StoreData | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"yw42","index":6},{"name":"out-StoreData","displayName":"StoreData","plug":"output","type":"boolean","group":"Outputs","index":7},{"name":"outtype-Done","displayName":"Type","editorName":"Done | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"},{"value":"signal","label":"Signal"}],"allowEditOnly":true},"default":"string","parent":"scriptOutputs","parentItemId":"kt9o","index":8},{"name":"out-Done","displayName":"Done","plug":"output","type":"signal","group":"Outputs","index":9},{"name":"intype-Settings","displayName":"Type","editorName":"Settings | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"}],"allowEditOnly":true},"default":"string","parent":"scriptInputs","parentItemId":"iuge","index":10},{"name":"in-Settings","displayName":"Settings","plug":"input","type":"object","group":"Inputs","index":11}],"children":[]}],"connections":[{"sourceId":"e54bf405-2f82-4d33-c365-a26defed8293","sourcePort":"Do","targetId":"8c00a4a4-cae2-23e8-a064-53cd7e9b6567","targetPort":"run"},{"sourceId":"8c00a4a4-cae2-23e8-a064-53cd7e9b6567","sourcePort":"out-Done","targetId":"15c95327-d31d-5797-20ef-d547a55455b5","targetPort":"run"},{"sourceId":"8c00a4a4-cae2-23e8-a064-53cd7e9b6567","sourcePort":"out-Settings","targetId":"15c95327-d31d-5797-20ef-d547a55455b5","targetPort":"in-Settings"},{"sourceId":"15c95327-d31d-5797-20ef-d547a55455b5","sourcePort":"out-Exists","targetId":"bcb959ff-dcb8-d3d1-e1ca-98ae2aa297e7","targetPort":"Settings Exists"},{"sourceId":"8c00a4a4-cae2-23e8-a064-53cd7e9b6567","sourcePort":"out-Settings","targetId":"7ff37fa7-feb5-b765-cc1a-6f32cf4ba221","targetPort":"in-Settings"},{"sourceId":"8c00a4a4-cae2-23e8-a064-53cd7e9b6567","sourcePort":"out-Done","targetId":"7ff37fa7-feb5-b765-cc1a-6f32cf4ba221","targetPort":"run"},{"sourceId":"7ff37fa7-feb5-b765-cc1a-6f32cf4ba221","sourcePort":"out-DarkMode","targetId":"bcb959ff-dcb8-d3d1-e1ca-98ae2aa297e7","targetPort":"Dark Mode"},{"sourceId":"7ff37fa7-feb5-b765-cc1a-6f32cf4ba221","sourcePort":"out-StoreData","targetId":"bcb959ff-dcb8-d3d1-e1ca-98ae2aa297e7","targetPort":"Store Data"},{"sourceId":"7ff37fa7-feb5-b765-cc1a-6f32cf4ba221","sourcePort":"out-Done","targetId":"bcb959ff-dcb8-d3d1-e1ca-98ae2aa297e7","targetPort":"Done"}],"ports":[{"name":"Do","type":{"name":"signal","allowConnectionsOnly":true},"group":"Actions","plug":"input","index":0},{"name":"Settings Exists","type":"boolean","plug":"output","index":1},{"name":"Store Data","type":"boolean","plug":"output","index":2},{"name":"Dark Mode","type":"boolean","plug":"output","index":3},{"name":"Done","type":"signal","plug":"output","index":4}],"roots":[]}],"componentIndex":{"b2-39291ac0db484fee":{"components":["/Home","/Components/Source","/Components/Tag","/Logic/Get Tag Color","/Logic/Format Sources","/Logic/Format Fact Copy","/Logic/Get Daily Fact","/Logic/Get Object Content","/Logic/Unlock Fact"],"dependencies":["b3-664c1ecb137d1a8f"]},"b3-664c1ecb137d1a8f":{"components":["/Components/Page Controls","/Logic/Get Facts","/Logic/Set Previous Page"],"dependencies":["b4-5e92766f763f388f"]},"b4-5e92766f763f388f":{"components":["/Components/Button"],"dependencies":[]},"b5-93fbfabaf563670d":{"components":["/Settings","/Components/Toggle Switch","/Logic/Save Settings","/Logic/Create User Data","/Logic/Clear All Data"],"dependencies":["b4-5e92766f763f388f"]},"b6-e1de5d3de3eacbbd":{"components":["/Progression","/Logic/Get Progress","/Logic/Load Unlocked Facts","/Logic/Create Network Graph Data"],"dependencies":["b3-664c1ecb137d1a8f","b4-5e92766f763f388f"]},"b7-de6bc3b2961aed58":{"components":["/Components/Cookie Window","/Logic/Unlock Fact copy"],"dependencies":[]}},"routerIndex":{"routers":[{"name":"main","pages":{"routes":["/Home","/Settings","/Progression"],"startPage":"/Home"},"clip":"contentHeight"}],"pages":[{"path":"home","title":"Home","component":"/Home"},{"path":"progression","title":"Progression","component":"/Progression"},{"path":"settings","title":"Settings","component":"/Settings"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Grey - 300":"#E9E9E9","Grey - 900":"#1F1F1F","Primary":"#F2F2F2","Primary Dark":"#3F22B8","Primary Subtle":"#C9BFFC","Primary Light":"#F7F5FF","Grey - 800":"#383838","Grey - 700":"#4C4C4C","Grey - 600":"#757575","Grey - 500":"#A5A5A5","Grey - 400":"#CECECE","Grey - 200":"#F4F4F4","Grey - 100":"#FBFBFB","Success":"#49AD7F","Notice":"#F2C441","Danger":"#F75A4F","White":"#FFFFFF","Black":"#000000"}}},"variants":[{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"name":"menu item","typename":"Text","parameters":{"textStyle":"Body Text","color":"Light Gray","text":"Page 1","marginRight":{"value":32,"unit":"px"},"styleCss":"cursor:pointer;"},"stateParameters":{"hover":{"color":"Primary Light"}},"stateTransitions":{}},{"name":"Menu Item","typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentSize","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":22,"unit":"px"},"iconSpacing":{"value":6,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Button Label","paddingTop":{"value":2,"unit":"px"},"paddingLeft":{"value":0,"unit":"px"},"paddingRight":{"value":0,"unit":"px"},"paddingBottom":{"value":24,"unit":"px"},"color":"#FFFFFF","fontFamily":"fonts/Roboto/Roboto-Medium.ttf","marginLeft":{"value":0,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"transparent","sizeMode":"contentSize","color":"Primary Light"},"pressed":{"backgroundColor":"transparent","color":"Primary Light","sizeMode":"contentSize"},"disabled":{"backgroundColor":"Light Gray"}},"stateTransitions":{},"defaultStateTransitions":{}},{"name":"Page Container","typename":"Group","parameters":{"flexDirection":"row","paddingLeft":{"value":48,"unit":"px"},"paddingRight":{"value":48,"unit":"px"},"paddingTop":{"value":80,"unit":"px"},"paddingBottom":{"value":24,"unit":"px"},"justifyContent":"center","alignItems":"center"},"stateParameters":{},"stateTransitions":{}}]};
