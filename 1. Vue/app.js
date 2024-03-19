new Vue({
    el: '#info',  //el means Element
    data: {
        name: "Md Rakib Hassan",
        work: "Python With Django",
        student: true,
        
        // Array
        skill : ["Python", "Django", "Vue" ],

        // Object
        address: {
            jila : "Chandpur",
            division : "Chitogong",
            country: "Bangladesh",
        },

        // ES6 Functions
        experience : ()=> {
            return "Total 1 Year of Experience.";
        }
    }
});