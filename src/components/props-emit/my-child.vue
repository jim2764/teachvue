<template>
  <h2>Child</h2>

    <p>ChildId: {{ this.childId }}</p>

    <div>
        <h3>Information</h3>
        <p>Id: {{ objData.id }}</p>
        <p>Name: {{ objData.name }}</p>
        <p>Phone: {{ objData.phone }}</p>
        <p>Email: {{  objData.email }}</p>
    </div>

</template>

<script>
import axios from "axios"

export default {
    name: "MyChild",
    props: ["childId",],
    emits: ["update"],
    data() {
        return {
            id: this.childId,
            objData: {}
        }
    },
    watch: {
        async childId(val) {
            if (val > 10 || val < 1) {
                this.objData = {}
                this.$emit("update", "No Name")
            }
            else {
                this.id = val
                await this.callAjax(this.id);
                this.$emit("update", this.objData.name)
            }
        }
    },
    methods: {
        async callAjax(id) {
            await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => {
                    this.objData = response.data
                })
                .catch((error) => alert(error))
        }
    },
    async created() {
        await this.callAjax(this.id);
        this.$emit("update", this.objData.name)
    }
    
}
</script>

<style>

</style>