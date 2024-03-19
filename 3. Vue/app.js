new Vue({
    el: '#info',  //el means Element
    data: {

        title: "This is nice image.",

        image_src: "https://picsum.photos/200/300",
        image_alt: "Nice Image",

        office_like: "http://picsum.photos/",

        my_text: "If you click on this link, you will gon a website.",

        friend_name: "<strong>Md Tuhin Ahmed</strong>",

        age: 18,

        rakib_age: 27,
        rijon_age: 18,
        emon_age: 14,

    },
    
    methods: {
        nidPermissionRakib(){
            return this.rakib_age >= this.age ? true : false;
        }, 

        nidPermissionRijon(){
            return this.rijon_age >= this.age ? true : false;
        },

        nidPermissionEmon(){
            return this.emon_age >= this.age ? '<span class="bg-success text-light px-4 py-2">True</span>' : '<span class="bg-danger text-light px-4 py-2">False</span>';
        }
    },
});