export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    created() {
        window.addEventListener('mousewheel', e => {
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(e)
        })
        // Vue.directive('scroll', {
        //     // 当绑定元素插入到 DOM 中
        //     inserted: function (el,binding) {
        //       var cb = binding.value
        //       el.addEventListener('mousewheel',function(e){
        //         var direction = e.deltaY>0?'down':'up'
        //         cb(direction)
        //       })
        //     }
        //   })

        //   new Vue({
        //     el:'#app',
        //     methods:{
        //       scrollFn:function(direction){
        //         console.log(direction)
        //       }
        //     }
        //   })
    },
    mounted() {

    },
    methods: {

    },
}