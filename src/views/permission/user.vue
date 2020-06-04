<template>
  <div class="u-container">
    <el-row :gutter="12">
      <el-card shadow="never">
        <el-row>
          <el-col :span="12">
            <el-input v-power="localPower.view" placeholder="请输入内容" v-model="req.value" size="mini"></el-input>
          </el-col>
          <el-col :span="12">
            <el-button v-power="localPower.view" type="primary" size="mini" plain @click="init">查询</el-button>
            <el-button v-power="localPower.add" type="primary" size="mini" plain @click="handleAdd">新增角色</el-button>
          </el-col>
        </el-row>

      </el-card>
      <el-card shadow="never">
        <el-table
          size="mini"
          :data="roles"
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
                v-power="localPower.upd"
                size="mini"
                type="primary"
                plain
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                v-power="localPower.del"
                size="mini"
                type="warning"
                plain
                @click="del(scope.$index, scope.row)">删除</el-button>
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

  import {mapMutations} from "vuex"

  export default {
    name: "user",
    components:{
      Time
    },
    data() {
      return {
        // 当前页包含的权限值：访问 添加 删除 修改
        localPower:{
          view: 1201,
          add: 120101,
          del: 120102,
          upd: 120103,
        },
        dialogVisible: false,
        checkAll: false,
        isIndeterminate: true,
        powers:[],
        roles: [],
        req:{
          value: "",
          pageSize: 10,
          pageNum: 1,
          total: 0
        },
        editReq: {
          title: "编辑角色",
          id: 0,
          name:"",
          remark:"",
          powers: [],
          enable: 0
        }
      }
    },
    methods: {
      ...mapMutations(["SET_LOADING"]),
      init(){
        this.SET_LOADING(true)
        let powers = this.$request.fetchPowers()
        let roles = this.$request.fetchRoles(this.req)
        powers.then(v => {
          this.powers = v.data
        })
        roles.then(v => {
          if(!v.code){
            this.roles = v.data.list
            this.req.pageNum = v.data.pageNum
            this.req.pageSize = v.data.pageSize
            this.req.total = v.data.total
          }
          this.SET_LOADING(false)
        })
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
      handleCheckAllChange(val) {
        this.editReq.powers = val ? this.powers.map(({id}) => id) : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.editReq.powers.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.powers.length;
      },
      del(index, row){
        this.$confirm(`此操作将删除该角色『${row.name}』, 是否继续?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$request.fetchDelRole(this.editReq).then(v => {
            if(!!v.code){
              this.$message.warning("删除失败！")
              return
            }
            this.$message.success("删除成功！")
            this.init()
          })
        }).catch(() => {
          this.$message.error("删除异常！")
        })
      },
      edit(){
        if(this.editReq.name.trim() === ""){
          this.$message.warning("角色名字不能为空！")
          return
        }
        let tip = this.editReq.id == 0 ? "新增" : "修改"
        this.$request.fetchEditRole(this.editReq).then(v => {
          if(!!v.code){
            this.$message.warning(`${tip}失败！`)
            return
          }
          this.$message.success(`${tip}成功！`)
          this.init()
        })
      }
    }
  }
</script>
