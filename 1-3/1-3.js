/*
1-3) In your lecture note 5, the functionalities of "apply", "call", and "bind" 
     have been discussed. Through node.js environment, test them and, then add 
     two more simple examples for each. 
*/

function userInform(height, weight) {
    console.log("--------------------------------------");
    console.log("User Full Name: " + this.firstName + " " + this.lastName);
    console.log("User Height: " + height + "m");
    console.log("User Weight: " + weight + "kg");
} 

//丢失 this
userInform(1.77, 90);

let user1 = {
    firstName: "Mike",
    lastName: "Li"
}

//使用call绑定this, call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔
userInform.call(user1, 1.88, 100);

//使用apply 绑定this，apply 所有参数都必须放在一个数组里面传进去 
userInform.apply(user1, [1.99, 110]);

//使用bind 绑定this, bind 返回一个可以调用的函数
let bindedUserInform = userInform.bind(user1, 2.18, 120);
bindedUserInform();
