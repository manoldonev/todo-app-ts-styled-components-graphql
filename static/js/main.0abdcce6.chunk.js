(this["webpackJsonptodo-app-ts-styled-components-graphql"]=this["webpackJsonptodo-app-ts-styled-components-graphql"]||[]).push([[0],{63:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n.n(o),a=n(27),c=n.n(a),d=(n(63),n(8)),s=n(49),u=n(31),l=n(5),p=n(11),f=n.n(p),m=n(18);function g(e,t){return Object(m.a)(f.a.mark((function n(){var r,o,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakeql.com/graphql/0bfe961b5d76d8f8ae63d882a1fadb8b",{method:"POST",body:JSON.stringify({query:e,variables:t})});case 2:return r=n.sent,n.next=5,r.json();case 5:if(!(o=n.sent).errors){n.next=9;break}throw i=o.errors[0].message,new Error(i);case 9:return n.abrupt("return",o.data);case 10:case"end":return n.stop()}}),n)})))}!function(e){e.Ceil="CEIL",e.Floor="FLOOR",e.Round="ROUND"}(r||(r={}));var h,b,j,y=function(e,t){return Object(d.useQuery)(void 0===e?["Todos"]:["Todos",e],g("\n    query Todos($page: Int, $limit: Int, $input: TodosWhere, $sort: String, $direction: String) {\n  todos(page: $page, limit: $limit, where: $input, sort: $sort, dir: $direction) {\n    id\n    task\n    done\n  }\n}\n    ",e),t)},x=n(15),v=n(20),w=n(19),O=n(16),T=n(2),I=l.a.div.withConfig({displayName:"SwipeToDelete__Wrapper",componentId:"sc-1nl5h0w-0"})(["position:relative;overflow:hidden;width:100%;"]),C=l.a.div.withConfig({displayName:"SwipeToDelete__BackgroundLayer",componentId:"sc-1nl5h0w-1"})(["position:absolute;z-index:0;width:100%;height:100%;display:flex;align-items:center;padding:0 1.5rem;color:white;background-color:#c70000;"," ",""],(function(e){return e.swipeDirection===v.LEFT&&"\n    justify-content: flex-end;\n  "}),(function(e){return e.swipeDirection===v.RIGHT&&"\n    justify-content: flex-start;\n  "})),_=l.a.div.withConfig({displayName:"SwipeToDelete__ForegroundLayer",componentId:"sc-1nl5h0w-2"})(["position:relative;z-index:1;height:100%;width:100%;background-color:#fff;display:flex;align-items:center;"]),P=function(e){var t=e.children,n=e.threshold,r=void 0===n?.3:n,i=e.onSwiped,a=e.onTap,c=Object(o.useRef)(null),d=Object(o.useRef)(null),s=Object(o.useState)(v.LEFT),u=Object(x.a)(s,2),l=u[0],p=u[1],f=Object(v.useSwipeable)({trackMouse:!1,preventDefaultTouchmoveEvent:!0,onTap:a,onSwipeStart:function(){c.current&&(c.current.style.transition="",c.current.style.transform="")},onSwiping:function(e){if(c.current){var t="translateX(".concat(e.deltaX,"px)");c.current.style.transform=t}if(d.current){var n=Math.min(Math.abs(e.deltaX)/100,1);d.current.style.opacity=n.toFixed(2)}p(e.dir)},onSwiped:function(e){if(c.current){var t=e.deltaX,n=c.current.offsetWidth;Math.abs(t)>=n*r?(t=e.dir===v.LEFT?2*-n:n,i&&i(e)):t=0,c.current.style.transition="transform 0.5s ease-out",c.current.style.transform="translateX(".concat(t,"px)")}}});return Object(T.jsxs)(I,{children:[Object(T.jsx)(C,{ref:d,swipeDirection:l,children:Object(T.jsx)(w.a,{icon:O.e,fixedWidth:!0})}),Object(T.jsx)(_,{onMouseDown:f.onMouseDown,ref:function(e){f.ref(e),c.current=e},children:t})]})},S=l.a.li.withConfig({displayName:"TodoItem__ListItem",componentId:"sc-51iy91-0"})(["background-color:#fff;border:none;border-bottom:0.1rem solid #ddd;&:last-child{border-bottom:none;}",""],(function(e){return e.done&&"\n    text-decoration: line-through;\n    color: #aaa;  \n    "})),k=l.a.div.withConfig({displayName:"TodoItem__Wrapper",componentId:"sc-51iy91-1"})(["display:flex;margin:1rem 0;min-height:2rem;"]),M=l.a.input.attrs({type:"checkbox"}).withConfig({displayName:"TodoItem__Checkbox",componentId:"sc-51iy91-2"})(["flex:1 0 auto;margin:0 1.5rem;height:2rem;width:2rem;"]),N=l.a.label.withConfig({displayName:"TodoItem__Label",componentId:"sc-51iy91-3"})(["margin-right:auto;display:flex;align-items:center;"]),F=function(e){var t,n=e.data,r=n.id,o=n.task,i=n.done,a=Object(d.useQueryClient)(),c=(t={onSuccess:function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.invalidateQueries("Todos"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Object(d.useMutation)("updateTodo",(function(e){return g("\n    mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {\n  updateTodo(id: $id, input: $input) {\n    id\n    task\n    done\n  }\n}\n    ",e)()}),t)),s=c.mutate,u=function(e){return Object(d.useMutation)("deleteTodo",(function(e){return g("\n    mutation deleteTodo($id: ID!) {\n  deleteTodo(id: $id)\n}\n    ",e)()}),e)}({onSuccess:function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.invalidateQueries("Todos"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),l=u.mutate;return Object(T.jsx)(S,{done:i,children:Object(T.jsx)(P,{onSwiped:function(){l({id:r})},onTap:function(){s({id:r,input:{done:!i}})},children:Object(T.jsx)(k,{children:Object(T.jsxs)(N,{htmlFor:r,children:[Object(T.jsx)(M,{id:r,checked:i}),o]})})})})},D=n(37),A=n(32);!function(e){e[e.TogglePage=0]="TogglePage",e[e.ToggleFilter=1]="ToggleFilter",e[e.ToggleMode=2]="ToggleMode",e[e.SearchItem=3]="SearchItem"}(h||(h={})),function(e){e.All="all",e.Active="active",e.Done="done"}(b||(b={})),function(e){e[e.Add=0]="Add",e[e.Search=1]="Search",e[e.None=2]="None"}(j||(j={}));var $=i.a.createContext(null),L=i.a.createContext(null);function E(e,t){switch(t.type){case h.TogglePage:return Object(A.a)(e,(function(e){if(null==t.numericPayload)throw new Error("".concat(t.type,": payload not specified"));e.currentPage=t.numericPayload}));case h.ToggleFilter:return Object(A.a)(e,(function(e){var n=t.stringPayload;if(null==n||!(n in b))throw new Error("".concat(t.type,": filter ").concat(n," not found"));e.filterMode=b[n],e.currentPage=1}));case h.ToggleMode:return Object(A.a)(e,(function(e){var n=t.numericPayload;if(null==n||!(n in j))throw new Error("".concat(t.type,": input mode ").concat(n," not found"));e.inputMode!==n&&(e.inputMode=n,e.filterMode=b.All,e.currentPage=1)}));default:throw new Error("Unhandled action type")}}var q,z=function(e){var t=e.children,n=e.reducer,r=void 0===n?E:n,o=i.a.useReducer(r,{currentPage:1,pageSize:5,hasMore:!1,filterMode:b.All,inputMode:j.Add,query:""}),a=Object(x.a)(o,2),c=a[0],d=a[1];return Object(T.jsx)($.Provider,{value:c,children:Object(T.jsx)(L.Provider,{value:d,children:t})})};function Q(){var e=i.a.useContext($);if(null===e)throw new Error("useTodoState hook works in the context of a TodoProvider");return e}function W(){var e=i.a.useContext(L);if(null===e)throw new Error("useTodoDispatch hook works in the context of a TodoProvider ");return e}!function(e){e.Ascending="asc",e.Descending="desc"}(q||(q={}));var R,B=function(){var e,t=Q(),n=t.currentPage,r=t.pageSize,o=t.filterMode,i=null;o===b.Active?i={done_eq:!1}:o===b.Done&&(i={done_eq:!0});var a={page:n,limit:r,input:i,sort:"id",direction:q.Descending},c=y(a,{keepPreviousData:!0,staleTime:5e3}),d=c.data,s=c.isFetching,u=c.isPreviousData,l=y(Object(D.a)(Object(D.a)({},a),{},{page:n+1})).data;return{data:d,isFetching:s,isPreviousData:u,hasMoreData:null!=(null===l||void 0===l||null===(e=l.todos)||void 0===e?void 0:e.length)&&l.todos.length>0}},X=l.a.h1.withConfig({displayName:"Header__StyledHeader",componentId:"sc-jmby8c-0"})(["margin:0;padding-bottom:2rem;text-align:center;text-transform:uppercase;"]),U=function(){return Object(T.jsx)(X,{children:"Things to do"})},H=l.a.button.attrs({type:"button"}).withConfig({displayName:"ImageButton",componentId:"sc-yfcf41-0"})(["background-color:transparent;border:0;font-size:calc(max(2rem,20px));transition:0.3s all;opacity:0.4;&:enabled{cursor:pointer;}&:hover:enabled{opacity:1;}"]),J=l.a.ul.withConfig({displayName:"Actions__ActionList",componentId:"sc-1a4n6g3-0"})(["flex:0 0 auto;list-style-type:none;border-right:0.1rem solid #ccc;margin-right:1.8rem;padding:0;"]),G=l.a.li.withConfig({displayName:"Actions__ActionItem",componentId:"sc-1a4n6g3-1"})(["display:inline;"]),K=Object(l.a)(H).withConfig({displayName:"Actions__ActionButton",componentId:"sc-1a4n6g3-2"})(["margin:0 0.3rem;",""],(function(e){return e.active&&"opacity: 1;"})),V=Object(l.a)(w.a).withConfig({displayName:"Actions__StyledFontAwesomeIcon",componentId:"sc-1a4n6g3-3"})(["font-size:2.7rem;"]),Y=function(){var e=Q().inputMode,t=W(),n=function(e){t({type:h.ToggleMode,numericPayload:parseInt(e.currentTarget.value,10)})};return Object(T.jsxs)(J,{children:[Object(T.jsx)(G,{children:Object(T.jsx)(K,{active:e===j.Add,value:j.Add,"aria-label":"Create Mode",onClick:n,children:Object(T.jsx)(V,{icon:O.c,fixedWidth:!0})})}),Object(T.jsx)(G,{children:Object(T.jsx)(K,{active:e===j.Search,value:j.Search,"aria-label":"Search Mode",onClick:n,children:Object(T.jsx)(V,{icon:O.d,fixedWidth:!0})})})]})},Z=l.a.ul.withConfig({displayName:"Filter__FilterList",componentId:"sc-160ur2e-0"})(["flex:0 0 auto;list-style-type:none;padding-left:0;"]),ee=l.a.li.withConfig({displayName:"Filter__FilterItem",componentId:"sc-160ur2e-1"})(["display:inline;margin:0.5rem;"]),te=l.a.button.attrs({type:"button"}).withConfig({displayName:"Filter__Button",componentId:"sc-160ur2e-2"})(["font-size:1.8rem;text-transform:capitalize;background-color:transparent;color:inherit;padding:0.3rem 0.7rem;text-decoration:none;border:0.1rem solid transparent;border-radius:0.3rem;&:hover{border-color:rgba(175,47,47,0.1);}",""],(function(e){return e.active&&"\n    border-color: rgba(175, 47, 47, 0.2);\n  "})),ne=function(){var e=Q().filterMode,t=W();return Object(T.jsx)(Z,{children:Object.entries(b).map((function(n){var r=Object(x.a)(n,2),o=r[0],i=r[1];return Object(T.jsx)(ee,{children:Object(T.jsx)(te,{active:i===e,onClick:function(){return function(e){t({type:h.ToggleFilter,stringPayload:e})}(o)},children:i})},o)}))})},re=l.a.div.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-odef2i-0"})(["display:flex;align-items:center;margin-right:auto;"]),oe=l.a.ul.withConfig({displayName:"Pagination__PaginationList",componentId:"sc-odef2i-1"})(["margin-right:auto;list-style-type:none;padding:0;"]),ie=l.a.li.withConfig({displayName:"Pagination__PaginationItem",componentId:"sc-odef2i-2"})(["display:inline;"]),ae=Object(l.a)(w.a).withConfig({displayName:"Pagination__StyledFontAwesomeIcon",componentId:"sc-odef2i-3"})(["font-size:2.7rem;"]),ce=function(){var e=Q().currentPage,t=W(),n=B(),r=n.isPreviousData,o=n.hasMoreData;return Object(T.jsxs)(re,{children:["Current page: ",e,Object(T.jsxs)(oe,{children:[Object(T.jsx)(ie,{children:Object(T.jsx)(H,{"aria-label":"Previous Page",onClick:function(){return t({type:h.TogglePage,numericPayload:Math.max(e-1,1)})},disabled:1===e,children:Object(T.jsx)(ae,{icon:O.a,fixedWidth:!0})})}),Object(T.jsx)(ie,{children:Object(T.jsx)(H,{"aria-label":"Next Page",onClick:function(){return t({type:h.TogglePage,numericPayload:o?e+1:e})},disabled:r||!o,children:Object(T.jsx)(ae,{icon:O.b,fixedWidth:!0})})})]})]})},de=l.a.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1a3cbzi-0"})(["display:flex;flex-wrap:wrap;align-items:center;border-top:0.1rem solid #ddd;background-color:#f4fce8;margin:0 -2rem -1rem -2rem;padding:0 2rem;color:#707070;"]),se=function(){return Object(T.jsxs)(de,{children:[Object(T.jsx)(Y,{}),Object(T.jsx)(ce,{}),Object(T.jsx)(ne,{})]})},ue=l.a.input.attrs({type:"text"}).withConfig({displayName:"InputBox__StyledInput",componentId:"sc-26uffi-0"})(["display:block;width:100%;height:3.4rem;padding:0.6rem 1.2rem;font-size:1.4rem;line-height:1.42857143;color:#555;background-color:#fff;border:1px solid #ccc;"]),le=function(){var e,t=Object(o.useState)(""),n=Object(x.a)(t,2),r=n[0],i=n[1],a=W(),c=Object(d.useQueryClient)(),s=(e={onSuccess:function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.invalidateQueries("Todos"),i(""),a({type:h.TogglePage,numericPayload:1});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Object(d.useMutation)("createTodo",(function(e){return g("\n    mutation createTodo($input: CreateTodoInput!) {\n  createTodo(input: $input) {\n    id\n    task\n    done\n  }\n}\n    ",e)()}),e)),u=s.mutate;return Object(T.jsx)(ue,{placeholder:"Add New",value:r,onChange:function(e){return i(e.target.value)},onKeyUp:function(e){"Enter"===e.code&&u({input:{task:r.trim(),done:!1,user_id:"1"}})}})},pe=function(){var e=Q().query,t=W();return Object(T.jsx)(ue,{placeholder:"Search",value:e,onChange:function(e){var n=e.target.value;t({type:h.SearchItem,stringPayload:n})}})},fe=function(){switch(Q().inputMode){case j.Add:return Object(T.jsx)(le,{});case j.Search:return Object(T.jsx)(pe,{});default:return null}},me=l.a.section.withConfig({displayName:"TodoList__Section",componentId:"sc-1pak9km-0"})(["background-color:#fff;padding:2rem 2rem 1rem 2rem;border:0.1rem solid #ddd;border-radius:0.2rem;margin:3rem auto;min-width:32rem;max-width:60rem;position:relative;"]),ge=l.a.ul.withConfig({displayName:"TodoList__StyledList",componentId:"sc-1pak9km-1"})(["list-style-type:none;padding-left:0;"]),he=function(){var e,t=B().data;return Object(T.jsxs)(me,{children:[Object(T.jsx)(U,{}),Object(T.jsx)(fe,{}),Object(T.jsx)(ge,{children:null===t||void 0===t||null===(e=t.todos)||void 0===e?void 0:e.map((function(e){return e&&Object(T.jsx)(F,{data:e},e.id)}))}),Object(T.jsx)(se,{})]})},be=new d.QueryClient({queryCache:new d.QueryCache({onError:function(e){return u.b.error("Something went wrong: ".concat(e.message))}})}),je=function(){return Object(T.jsxs)(d.QueryClientProvider,{client:be,children:[Object(T.jsx)(z,{children:Object(T.jsx)(he,{})}),Object(T.jsx)(u.a,{}),Object(T.jsx)(s.ReactQueryDevtools,{initialIsOpen:!0})]})};c.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(je,{})}),document.getElementById("root")),R&&R instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(R),n(R),r(R),o(R),i(R)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.0abdcce6.chunk.js.map