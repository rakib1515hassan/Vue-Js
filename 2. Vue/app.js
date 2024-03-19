new Vue({
    el: '#info',  //el means Element
    data: {
        first_name: "Md Rakib",
        last_name: "Hassan",

        title: "I am a profetional Python Developer.",

        pc: 1,
        laptop: 1,
        phone: 2,

    },
    methods: {

        // Define Old Methods 
        age: function() {
            return "I am 27 year's old."
        },

        // Define New ES6 Methods
        experience(){
            return "I have 1+ Year Experience."
        },
        
        description(){
            return this.title
        },
        
        full_name(){
            return this.first_name + " " + this.last_name
        },

        device(){
            return this.pc + this.laptop + this.phone
        },
    },
});