<template>
 <div>
   <the-header :title="RememberMe"></the-header>
   <the-resource></the-resource>
 </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResource from './components/TheResource.vue'
export default {
 
  name: 'App',
  data(){
    return{
      RememberMe: 'RememberMe',
    }
    },

    components:{
      TheResource,
      TheHeader
    }
}
</script>

