<script>
export default {
    data() {
        return {
            goods: [
                { name: "matebook x", price: 8999.00, amount: 2 },
                { name: "xiaomi book", price: 6999.00, amount: 2 }
            ]
        }
    },
    computed: {
        totalPrice(){
            let sum = 0;
            for(let i = 0; i < this.goods.length; i++ ) {
                let g = this.goods[i];
                let subTotal = g.price * g.amount;
                sum = sum + subTotal;
            }
            return sum;
        }
    }
}
</script>

<template>
    <div>
        <h5>购物车</h5>
        <el-table :data="goods">
            <el-table-column type="index" label="序号" width="100"/>
            <el-table-column label="商品名称" prop="name"/>
            <el-table-column label="单价" prop="price"/>
            <el-table-column label="数量" prop="amount"/>
            <el-table-column>
                <template #header>小计</template>
                <template #default="{row}">{{row.price*row.amount}}</template>
            </el-table-column>
        </el-table>
        <p>总价: {{ totalPrice }}</p>
    </div>
</template>