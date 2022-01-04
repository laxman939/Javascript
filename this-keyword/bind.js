//submit function
function submit(name) {
  console.log("submitted by " + name);
}

//userComponent
const UserComponent = {
  render: function () {
    this.submit();
  },
};
//1. UserComponent.render(); //error-- this.submit is not a function

//1. result -- using bind method
let result = submit.bind(UserComponent, "Ram");
result(); //submitted -- no error

//bind --> creates a new function and sets the "this" keyword to the specified object
//syntax --> function.bind(thisArg, optionalArguments)
