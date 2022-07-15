<template>
    <base-card>
        <base-button :mode="storeResButtonMode" @click="setSelectTab('stored-resources')">Stored Resources</base-button>
        <base-button  :mode="addResButtonMode" @click="setSelectTab('add-resource')">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectTab"></component>
    </keep-alive>

   
</template>
<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
    data(){
      return{
            selectTab: 'stored-resources',
            storeResources:[
                {
                id:'official-guide',
                title: 'Official Guide',
                description: 'The Official Vue.js documentation',
                link:'https://vuejs.org'
                },
                {
                id:'google',
                title: 'Google',
                description: 'Learn to google.....',
                link:'https://google.org'
                }
            ]
      }
    },
    provide(){
        return{
            resources: this.storeResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    methods:{
        setSelectTab(tab){
            this.selectTab = tab;
        },
        addResource(title, description, link){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            };
            this.storeResources.unshift(newResource);
            this.selectTab = 'stored-resources';

        },
        removeResource(resId){
            const resIndex = this.storeResources.findIndex(res => res.id == resId);

            this.storeResources.splice(resIndex, 1);
        }
    },
    computed:{
        storeResButtonMode(){
            return this.selectTab === 'stored-resources' ? null : 'flat';
        },
         addResButtonMode(){
            return this.selectTab === 'add-resource' ? null : 'flat';
        }
    },
    components:{
        StoredResources,
        AddResource
    }
}
</script>