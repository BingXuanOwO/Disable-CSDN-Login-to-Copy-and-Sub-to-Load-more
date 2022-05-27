// ==UserScript==
// @name         取消CSDN登录复制和关注加载更多
// @namespace    https://www.bing-xuan.xyz/
// @version      0.1
// @description  写的十分垃圾的脚本
// @author       冰轩OwO
// @match        https://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    //取消关注加载
    let articleContainer = document.getElementById('article_content');
    articleContainer.setAttribute('style','');

    let subTip = document.getElementsByClassName('hide-article-box hide-article-pos text-center');
    if(subTip.length){
        subTip[0].setAttribute('style','display:none;');
    }


    //取消登录复制
    let style = document.createTextNode('\
                                            #content_views pre{\
                                                -webkit-user-select: text;\
                                                -khtml-user-select: text;\
                                                -moz-user-select: text;\
                                                -ms-user-select: text;\
                                                user-select: text;\
                                            }\
                                            #content_views pre code{\
                                                -webkit-user-select: text;\
                                                -khtml-user-select: text;\
                                                -moz-user-select: text;\
                                                -ms-user-select: text;\
                                                user-select: text; \
                                            }');
    let styleNode = document.createElement('style');
    styleNode.appendChild(style);
    document.head.appendChild(styleNode);
})();