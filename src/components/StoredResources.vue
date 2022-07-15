<template>
    <ul>
         <learning-resources 

            v-for="res in resources" 
            :key="res.id" 
            :title='res.title'
            :id='res.id'
            :description="res.description"
            :link="res.link"
            ></learning-resources>
   </ul>
</template>

<script>
import LearningResources from './LearningResource.vue'
export default {
    inject:['resources'],
    components:{
        LearningResources
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0 auto;
        padding: 0;
        max-width: 43rem;
    }
</style>