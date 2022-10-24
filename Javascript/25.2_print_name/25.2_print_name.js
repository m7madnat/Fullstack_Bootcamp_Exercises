let obj = {
    name : "Mohamed",
    printName : function(){
        console.log(this.name);
    },
    printNameDelay: function () {
        setTimeout(this.printName.bind(this), 1000);      
    }
}
obj.printNameDelay();


// Bind - to create a new func with the "this" replaced with…
// Use .bind() when you want that function to Later be calLed with a
// certain context, useful in events.
// Use .calL() or .apply() when you want to invoke the function
// immediately, and modify the context. 

