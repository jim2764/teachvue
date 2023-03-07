<!-- 
props in, event out
輸入的值只能介於1 ~ 10 之間, 若不是範圍的的值, 則input右側跳錯誤
輸入範圍內的值, 藉由props傳入給child component, 再由此值利用axios call api
利用watch監控傳進來的值是否做改變
利用emit將child component的值, 傳遞給parent component
內層的component可以自訂event 
-->

<template>
    <h1>Parent</h1>

    <p>請輸入介於1 ~ 10之間</p>

    <div style="display:flex">
        <input type="number" v-model="parentId" style="margin-right:15px">
        <div class="error" v-show="isDisplay">X</div>
    </div>
    
    <p>Name From Child: {{ childName }}</p>

    <p>Parent Id: {{ parentId }}</p>

    <div class="border">
        <MyChild :childId="parentId"  @update="getName"></MyChild>
    </div>

</template>

<script>
import MyChild from "./my-child.vue"

export default {
    name: "MyParent",
    components: {
        MyChild
    },
    data() {
        return {
            parentId: 1,
            childName: ""
        }
    },
    computed: {
        isDisplay() {
            return (this.parentId <= 10 && this.parentId >= 1) ? false: true
        }
    },
    methods: {
        getName(val) {
            this.childName = val;
        }
    }
    
}
</script>

<style scoped>
    .error {
        border: 1px solid black;
        font-weight: bold;
        text-align: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: white;
        background-color: red;
    }
    .border {
        border: 1px solid black;
        padding: 10px;
    }
</style>