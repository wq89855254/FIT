export default {
  components: {},
  data() {
    return {
      scrollTimeout: null,
      showLogin:true,
      showUser:false,
      nowPage:0 //当前幻灯片的页码
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    scrollCtrl(isNext) {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        if (isNext) {
          this.$refs.carousel.next();
        } else {
          this.$refs.carousel.prev();
        }
      }, 200);
    },
    changeCarousel(nowPage,oldPage){
        this.nowPage=nowPage
    },
    toLogin() {
      this.$refs.loginCircle.classList.add("active");
      setTimeout(() => {
        this.$refs.loginCircle.classList.remove("active");
        this.$refs.left.style.transform='translateX(-8000px)'
        this.$refs.right.style.transform='translateX(8000px)'
        setTimeout(()=>{
            this.showLogin=false
            let width = this.$refs.block.offsetWidth
            let height = this.$refs.block.offsetHeight
            console.log(width,height)
            //改变三角形宽高
            this.$nextTick(()=>{
                this.$refs.topTriangle[0].style.borderTop=height+'px solid transparent'
                this.$refs.topTriangle[0].style.borderLeft=width+'px solid #84dc8b59'
                setTimeout(()=>{
                    this.$refs.topTriangle[0].style.transform='translateX(0)'
                },0)
                setTimeout(()=>{
                    this.showUser=true
                },2000)

                this.$refs.bottomTriangle[0].style.borderBottom=height+'px solid transparent'
                this.$refs.bottomTriangle[0].style.borderRight=width+'px solid #e871be7d'
                setTimeout(()=>{
                    this.$refs.bottomTriangle[0].style.transform='translateX(0)'
                },0)


            })

        },300)

      }, 500);
    },
  },
};
