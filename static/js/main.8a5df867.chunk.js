(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(1),c=o.n(a),r=o(8),s=o.n(r),i=o(7),d=o(2),l=o(3),p=o(5),u=o(4),h=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("li",{className:"todo-item",children:[Object(n.jsx)("input",{type:"checkbox",checked:this.props.todo.completed,onChange:function(){return t.props.handleChangeProps(t.props.todo.id)}}),Object(n.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(t.props.todo.id)},children:"Delete"}),Object(n.jsx)("span",{style:this.props.todo.completed?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null,children:this.props.todo.title})]})}}]),o}(a.Component),j=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{children:this.props.todos.map((function(e){return Object(n.jsx)(h,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps},e.id)}))})}}]),o}(a.Component);function b(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{style:{fontSize:"25px",marginBottom:"15px"},children:"Simple Todo App"}),Object(n.jsx)("p",{style:{fontSize:"19px"},children:"Please add to-dos item(s) through the input field"})]})}var m=o(9),O=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoProps(t.state.title),t.setState({title:""})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(n.jsx)("input",{type:"text",placeholder:"Add Todo..",value:this.state.title,name:"title",onChange:this.onChange,className:"input-text"}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"input-submit"})]})}}]),o}(a.Component),f=o(18),v=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:Object(f.a)(),title:"Analyze",completed:!0},{id:Object(f.a)(),title:"Develop",completed:!0},{id:Object(f.a)(),title:"Deploy",completed:!1}]},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}})),console.log("Clicked",e)},t.deleteTodo=function(e){t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))}),console.log("Delete",e)},t.addTodoItem=function(e){var o={id:Object(f.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(i.a)(t.state.todos),[o])})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b,{}),Object(n.jsx)(O,{addTodoProps:this.addTodoItem}),Object(n.jsx)(j,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.deleteTodo})]})}}]),o}(c.a.Component);o(15);s.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a5df867.chunk.js.map