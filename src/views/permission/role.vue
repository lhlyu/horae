<template>
    <div class="u-container">
      <el-row :gutter="12">
          <el-card shadow="never">
            <el-select v-power="1202" v-model="req.value" size="mini" placeholder="请选择角色">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button v-power="120201" type="primary" size="mini" plain @click="handleAdd">新增角色</el-button>
          </el-card>
          <el-card shadow="never">
            <el-table
              size="mini"
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                align="center"
                type="index">
              </el-table-column>
              <el-table-column
                align="center"
                label="名字"
                prop="name">
              </el-table-column>
              <el-table-column
                align="center"
                label="备注"
                prop="remark">
              </el-table-column>
              <el-table-column
                align="center"
                label="是否启用">
                <template slot-scope="scope">
                  <span v-if="scope.row.enable === 0">启用</span>
                  <span v-else>未启用</span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="创建时间">
                <template slot-scope="scope">
                  <i class="el-icon-time" style="margin-right: 5px"></i>
                  <span><Time type="datetime" :time="scope.row.createdAt"></Time> </span>
                </template>
              </el-table-column>
              <el-table-column
                align="center"
                label="更新时间">
                <template slot-scope="scope">
                  <i class="el-icon-time" style="margin-right: 5px"></i>
                  <span><Time type="datetime" :time="scope.row.updatedAt"></Time> </span>
                </template>
              </el-table-column>
              <el-table-column
                align="right">
                <template slot-scope="scope">
                  <el-button
                    v-power="120202"
                    size="mini"
                    type="primary"
                    plain
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    v-power="120203"
                    size="mini"
                    type="warning"
                    plain
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
          <el-card shadow="never">
            <el-pagination
              :small="true"
              background
              layout="prev, pager, next"
              @current-change="init"
              :page-size="req.pageSize"
              :current-page="req.pageNum"
              :total="req.total">
            </el-pagination>
          </el-card>
      </el-row>

      <el-dialog
        :title="editReq.title"
        :append-to-body="true"
        :visible.sync="dialogVisible">
        <el-form ref="form" :model="editReq" label-position="left" label-width="80px">
          <el-form-item label="角色名字">
            <el-input v-model="editReq.name"></el-input>
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="editReq.remark" type="textarea" :rows="2"></el-input>
          </el-form-item>
          <el-form-item label="权限">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="editReq.powers" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="power in powers" :label="power.id" :key="power.id">{{power.name}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="是否启用">
            <el-switch
              v-model="editReq.enable"
              :active-value="0"
              active-text="启用"
              inactive-text="不启用">
            </el-switch>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" size="mini" plain @click="dialogVisible = false">取 消</el-button>
          <el-button type="warning" size="mini" plain @click="edit">确 定</el-button>
        </span>
      </el-dialog>

    </div>
</template>

<script>

    import Time from "@/components/Time"

    export default {
      name: "role",
      components:{
        Time
      },
      data() {
        return {
          req:{
            value: 0,
            pageSize: 10,
            pageNum: 1,
            total: 100
          },
          editReq: {
            title: "编辑角色",
            id: 0,
            name:"",
            remark:"",
            powers: [],
            enable: 0
          },
          dialogVisible: false,
          checkAll: false,
          isIndeterminate: true,
          powers:[{
            id: 10,
            name:"角色页面",
          },{
            id: 1010,
            name:"角色添加",
          },{
            id: 1011,
            name:"角色编辑",
          },{
            id: 1012,
            name:"角色删除",
          }],
          options: [{
            value: 0,
            label: "请选择角色"
          },{
            value: 1,
            label: "管理者"
          },{
            value: 2,
            label: "测试者"
          }],
          tableData: [{
            id:1,
            name: "管理者",
            remark:"普通管理者",
            enable: 0,
            createdAt: +new Date(),
            updatedAt: +new Date(),
          },{
            id:2,
            name: "测试者",
            remark:"测试系统",
            enable: 0,
            createdAt: +new Date(),
            updatedAt: +new Date(),
          }]
        }
      },
      mounted() {
        this.init()
      },
      methods: {
        init(){
          let items = []
          for(let i = 1; i < 11;i ++){
            let item = {
              id:i,
              name: "管理者" + i,
              remark:"普通管理者" + i,
              enable: 0,
              powers: [],
              createdAt: +new Date() - i * 10 * 36000,
              updatedAt: +new Date() - i *10 * 600
            }
            items.push(item)
          }
          this.tableData = items
        },
        handleAdd(){
          this.editReq = {
            title: "添加角色",
            id: 0,
            name: "",
            remark: "",
            powers: [10],
            enable: 0
          }
          this.dialogVisible = true
        },
        handleEdit(index, row) {
          this.editReq = {
            title: "编辑角色",
            id: row.id,
            name: row.name,
            remark: row.remark,
            powers: row.powers,
            enable: row.enable
          }
          this.dialogVisible = true
        },
        handleDelete(index, row) {
          this.$confirm(`此操作将删除该角色『${row.name}』, 是否继续?`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
        },
        handleCheckAllChange(val) {
          this.editReq.powers = val ? this.powers.map(({id}) => id) : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.editReq.powers.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.powers.length;
        },
        edit(){
          this.$message({
            showClose: true,
            type: "success",
            message: "修改完成"
          });
          this.dialogVisible = false
        }
      }
    }
</script>
