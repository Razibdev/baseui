<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default >
            <p>Unforchunatly, at least one input value is Invalid</p>
            <p>Please check all inputs and make sure you enter  at least few characters into each input fields</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">
                ok
            </base-button>
        </template>
    </base-dialog>
   <base-card>
    <form action="" @submit.prevent="submitData">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" ref="inputTitle">
        </div>

        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="3" ref="inputDescription"></textarea>
        </div>
        

        <div class="form-control">
            <label for="link">Link</label>
            <input type="url" name="link" id="link" ref="inputLink" >
        </div>
        <div>
            <base-button type="submit">Add Resource</base-button>
        </div>

    </form>
   </base-card>
</template>

<script>
import BaseDialog from './UI/BaseDialog.vue';
export default {
  components: { BaseDialog },
    inject:['addResource'],
    data(){
        return{
            inputIsInvalid:false
        }
    },
    methods:{
        submitData(){
            const enterTitle = this.$refs.inputTitle.value;
            const enterDescription = this.$refs.inputDescription.value;
            const enterLink = this.$refs.inputLink.value;
            if(enterTitle.trim() =='' || enterDescription.trim() == '' || enterLink.trim() == ''){
                this.inputIsInvalid = true;
                return;
            }
            this.addResource(enterTitle, enterDescription, enterLink);

        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
 label{
     font-weight: bold;
     display: block;
     margin-bottom: 0.5rem;
 }
 input,
 textarea{
     display: block;
     width: 100%;
     font:inherit;
     padding: 0.15rem;
     border: 1px solid #ccc;
 }
 .form-control{
     margin: 1rem 0;
 }
</style>