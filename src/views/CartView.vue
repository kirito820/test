<script>
export default {
    data() {

    },
    computed: {
        totalPrice() {
            let sum=0;
            for(let i=0;i<this.goods.length;i++) {
                let g=this.goods[i];
                let subTotal
            }
        }
    }
}
</script>
<template>
    <div>
        <h5>购物车</h5>
        <el-table :data="goods">
            <el-table-column>
                <template #header>序号</template>
                <template #default>如之奈何？</template>
            </el-table-column>
            <el-table-column label="商品名称" prop="name"></el-table-column>
            <el-table-column label="单价" prop="price"></el-table-column>
            <el-table-column label="数量" prop="amount"></el-table-column>
            <el-table-column label="小计" prop=""></el-table-column>
            <el-table-column label="" prop=""></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
        </el-table>
    </div>
</template>