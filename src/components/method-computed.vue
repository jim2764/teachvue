<!-- 
Method和Computed的差異
computed: 
  - 呼叫時不用()
  - 會將結果暫存, 若function的值沒有改變, 則不會再次執行
  - 
method:
  - 和C#相似, 因此不多做贅述
-->
<template>
<!-- 
    畫面執行結果一樣
    But!!!!
    打開browser的console來看, 發現computed只執行一次 
-->
  <div>
    <h1>Method</h1>
    <p>{{ methodCal() }}</p>
    <p>{{ methodCal() }}</p>
    <p>{{ methodCal() }}</p>
    <h1>Computed</h1>
    <p>{{ computedCal }}</p>
    <p>{{ computedCal }}</p>
    <p>{{ computedCal }}</p>
  </div>

  <hr>

  <!-- 我自己認為computed的function很像是某種變數, 可以將某些value mapping到新的value -->
  <!-- 動態將number加進array當中, computed的值也會跟著改變 -->
  <div>
    <div>
        <input type="text" v-model="tmp">
        <button @click="addNumber">Add to Array</button>
    </div>

    <p>All Number: {{ numbers }}</p>
    <p>Even Number: {{ evenNumbers }}</p>
  </div>

</template>

<script>
// 在method和computed使用data當中的variable要記得加上"this"
export default {
    name: "MethodComputed",
    data() {
        return {
            price: 200,
            quantity: 5,
            tmp: 0,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    methods: {
        methodCal() {
            console.log("Method")
            return this.price * this.quantity;
        },
        // 將input的value加進array當中
        addNumber() {
            this.numbers.push(Number(this.tmp));
            this.tmp = 0
        }
    },
    computed: {
        computedCal() {
            console.log("Computed")
            return this.price * this.quantity;
        },
        evenNumbers() {
            return this.numbers.filter(x => x % 2 === 0)
        }
    }
}
</script>

<style>

</style>