// IIFE -- Immediately Invoked Function Expression
(function(){
    //these should also be enclosed, but var's poorly behaved
    //var likes to hoist up everything to the top, make it GLOBAL
    //so we're using let instead so variables stay in-scope
    //and const, too

    //js types
    //number
    //string
    //boolean
    //object
    //any (loose typing - NEVER use)
    //and some others
    //js does type inference, it's all implicit

    /* STYLE GUIDE
     * we're using _varname to designate a constant
     */

    /* wouldn't it be nice if we could specify return types, etc. in
     * javascript?
     * that's where either Babel or Typescript come in
     * hence, change extension to .ts
     * problem: browsers don't understand Typescript
     * have to do transpile
     */
    let canvas = document.getElementById("canvas");
    //let stage: createjs.Stage;

    function Init() {
        console.log("Initialization Started");
    }

    function Start() {

    }

    function Update() {

    }

    function Main() {

    }

    window.onload = Init; // Init is event handler

})()