<script>
//采用选项式API书写
export default {
    // 数据项
    data() {
        return {
            counter:0,
            counter2:0,
            message:''
        }
    },
    // 定义方法
    methods: {
        increment() {
            this.counter++;
        },
        increment2() {
            this.counter2++;
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    }
}
</script>
<template>
    <p>Home</p>
    <el-button type="primary" v-on:click="increment">你已经点了{{counter}}次</el-button>
    <el-button type="danger" v-on:click="increment2">你已经点了{{counter2}}次</el-button>
    <div>
        <el-input v-model="message" style="width: 240px" placeholder="Please input" />
        <p>{{ message }}</p>
    </div>
</template>