<template>
<div class="w-screen " :class="[fixedNav]">
    <div class="container mx-auto flex items-center py-1 justify-between">
        <h1 class="text-2xl text-gray-600 font-medium">
            <router-link to="/">PICKA</router-link>
        </h1>
        <div>
            <base-button buttonLabel="+ New Case"  textColor="text-gray-600" borderColor="border-transparent" v-if="$route.path==='/case'" @click="changeAddItemClicked"/>
            <router-link to="/case" v-else>
               <base-button buttonLabel="Case"  textColor="text-gray-600" borderColor="border-transparent"/> 
            </router-link>
            <router-link to="/about"  >
            <base-button  buttonLabel="Member"  textColor="text-gray-600 " borderColor="border-transparent"/> 
            </router-link>
            
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['fixedNav',],
    emits: ['add-clicked'],
    data() {
        return {
            addItemClicked: false
        }
    },
    methods: {
        changeAddItemClicked() {
            this.addItemClicked = true;
            this.$emit('add-clicked',this.addItemClicked);
            this.addItemClicked = false;
        }
    } 
}
</script>