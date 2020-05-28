export default {
    components: {},
    data() {
        return {
            scrollTimeout:null,
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        scrollCtrl(isNext){
            clearTimeout(this.scrollTimeout)
            this.scrollTimeout=setTimeout(()=>{
                if(isNext){
                    this.$refs.carousel.next()
                }else{
                    this.$refs.carousel.prev()
                }
            },200)
        },
       
    },
}