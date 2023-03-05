<!-- 
v-if和v-show十分相似, 差別是v-show只是隱藏但打開devtool可以看到此標籤, v-if是真的不會出現
v-for時常搭配key, vue為了渲染的效率, 常常保留此標籤不更換, 給予key確保vue的機制知道這些標籤是不一樣的
 -->
<template>
    <div>
        <!-- 可以打開devtool觀察一下, 當v-if和v-show為false的時候 -->
        <h2>v-if & v-show</h2>
        <p v-if="isDisplay">v-if</p>
        <p v-show="isDisplay">v-show</p>
        <button @click="isDisplay = !isDisplay">Click</button>
    </div>

    <hr>

    <div>
        <h2>v-else-if</h2>

        <select v-model="animal">
            <option value="" disabled>請選擇...</option>
            <option>Lion</option>
            <option>Elephant</option>
            <option>Dog</option>
            <option>Cat</option>
        </select>
       
        <p v-if="animal==='Lion'">獅子！！！吼吼吼</p>
        <p v-else-if="animal==='Elephant'">大象！！！哈哈哈哈</p>
        <p v-else-if="animal==='Dog'">狗狗！！！汪汪汪</p>
        <p v-else>貓咪！！！喵喵喵</p>
    </div>

    <hr>

    <div>
        <h2>Array</h2>
        <div class="dflex">
            <p v-for="number in numbers" :key="number" style="margin-right: 20px">{{ number }}</p>
        </div>

        <h2>single object</h2>
        <div class="dflex">
            <p v-for="(item, index) in objData" :key="index" style="margin-right: 20px">{{ item }}</p>
        </div>

        <h2>multiple object</h2>
        <div class="dflexmargin" v-for="item in multiObjData" :key="item">
            <p>Id: {{ item.id }}</p>
            <p>Name: {{ item.name }}</p>
            <p>Address: {{ item.address }}</p>
            <div style="width: 500px"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: "MyCondition",
    data() {
        return {
            isDisplay: true,
            animal: "",
            isName: true,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            objData: {
                id: "m0001",
                name: "阿魚",
                address: "新北市"
            },
            multiObjData: [
                {
                    id: "m0001",
                    name: "阿魚",
                    address: "新北市"
                },
                {
                    id: "m0002",
                    name: "佳佳",
                    address: "基隆市",
                },
                {
                    id: "m0003",
                    name: "米花",
                    address: "基隆市"
                },
                {
                    id: "m0004",
                    name: "小黑",
                    address: "桃園市"
                }
            ]
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
    }
    .dflexmargin {
        display: flex;
        justify-content: space-around;
    }
    .dflex {
        display: flex;
    }

</style>