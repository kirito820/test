<script>
export default {
    data() {
        return {
            goods: [
                { id:250, name: "matebook x", price: 8999.00, amount: 2 },
                { id:222, name: "xiaomi book", price: 6999.00, amount: 2 }
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
    },
    methods: {
        remove(id) {
            for(let i=0;i<this.goods.length;i++) {
                let g=this.goods[i];
                if(g.id==id) {
                    this.goods.splice(i, 1);
                }
            }
        },
        increase(id) {
            for(let i=0;i<this.goods.length;i++) {
                let g=this.goods[i];
                if(g.id==id) {
                    this.goods[i].amount++;
                }
            }
        },
        decrease(id) {
            for(let i=0;i<this.goods.length;i++) {
                let g=this.goods[i];
                if(g.id==id) {
                    if(this.goods[i].amount-1 < 1) {
                        return;
                    }
                    this.goods[i].amount--;
                }
            }
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
            <!-- <el-table-column>
                <template #header>数量</template>
                <template #default="{row}">
                    <el-input-number v-model="row.amount" :min="1" :max="10" size="small"/>
                </template>
            </el-table-column> -->
            <el-table-column>
                <template #header>数量</template>
                <template #default="{row}">
                    <el-button size="small" @click="decrease(row.id)">-</el-button>
                    {{ row.amount }}
                    <el-button size="small" @click="increase(row.id)">+</el-button>
                </template>
            </el-table-column>
            <el-table-column>
                <template #header>小计</template>
                <template #default="{row}">{{row.price*row.amount}}</template>
            </el-table-column>
            <el-table-column>
                <template #default="{row}">
                    <el-button type="danger" size="small" @click="remove(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row>
            <el-col :span="6" :offset="18">总价: {{ totalPrice }}</el-col>
        </el-row>
    </div>
</template>