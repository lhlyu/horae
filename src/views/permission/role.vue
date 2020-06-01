<template>
    <div class="u-container">
      <el-row :gutter="12">
          <el-card shadow="never">
            <el-select v-model="value" size="mini" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-card>
          <el-card shadow="never">
            <el-table
              size="mini"
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                type="selection">
              </el-table-column>
              <el-table-column
                type="index">
              </el-table-column>
              <el-table-column
                label="Date"
                prop="date">
              </el-table-column>
              <el-table-column
                label="Name"
                prop="name">
              </el-table-column>
              <el-table-column
                align="right">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    plain
                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    plain
                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <el-card shadow="never">
            <el-pagination
              :small="true"
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </el-card>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
              options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              value: '',
              tableData: [{
                date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎2',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎3',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎4',
                address: '上海市普陀区金沙江路 1516 弄'
              }]
            }
        },
        methods: {
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          }
        }
    }
</script>
