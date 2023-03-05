<!-- 
v-bind可以用來動態改變html標籤的屬性值
vbind:id => :id  這是簡寫 
-->
<template>
    <h2>可以換圖片！！！！！！</h2>
    <div class="container">
        <div class="border" @click="change" title="可以換圖片喔">
            <img :src="pictureImg" alt="XXX">
        </div>
    </div>

    <hr>

    <div>
        <h2>請勿超過10個字</h2>
        <label for="type">Type: </label>
        <input type="text" id="type" v-model="msg" v-bind:class="{error: isValide}">
        <!-- :class="{}" 裡面放的class為true的時候, 標籤就會被套上class樣式 -->
        <!-- <input type="text" id="type" v-model="msg" v-bind:class="{error: msg.length > 10}"> -->
    </div>

    <hr>

    <div>
        <!-- :style={}可以動態變更css樣式 -->
        <h2 :style="{color: fontColor}">我可以更換樣式喔！！！！</h2>
        <div>
            Color
            <select v-model="fontColor">
                <option>black</option>
                <option>red</option>
                <option>green</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: "cat.jpg",
            msg: "",
            fontColor: "black"
        }
    },
    methods: {
        change() {
        if(this.imgSrc === "dog.jpg") this.imgSrc = "cat.jpg"
        else this.imgSrc = "dog.jpg"
        }
    },
    computed: {
        isValide() {
            return this.msg.length > 10
        },
        pictureImg() {
            // 為了要抓到圖片的相對路徑
            return require("../assets/" + this.imgSrc)
        } 
    }

}
</script>

<style scoped>
    .error {
        border: red solid 1px;
        color: red
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
    }
    .border {
        border: 1px solid black;
        width: 200px;
        transition: 0.8s;
        padding: 10px;
    }
    .border:hover {
        cursor: pointer;
        border: 2px solid red;
        transition: 0.5s;
        transform: scale(1.1);
    }
    img {
        width: 100%;
    }
</style>