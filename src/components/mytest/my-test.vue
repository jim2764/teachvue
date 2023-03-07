<template>
    <div class="border">
        <MyHeader></MyHeader>

        <main>
            <h1>My Test</h1>
            <div class="container">
                <router-link v-for="i in 5" :key="i" :to="{ name: 'photodetail', params: {parentId: `${i}`} }">
                    <MyPhoto :parentId="i"></MyPhoto>
                </router-link>
            </div>
        </main>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyHeader from "./my-header.vue"
import MyFooter from "./my-footer.vue"
import MyPhoto from "./my-photo.vue"

export default {
    name: "MyTest",
    components: {
        MyHeader, MyFooter, MyPhoto
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
    .border {
        padding: 20px
    }
    a {
        text-decoration: none;
    }
</style>