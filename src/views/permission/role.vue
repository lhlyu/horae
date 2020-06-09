<template>
  <div class="u-container">
    <el-row :gutter="12">
      <el-card shadow="never">
        <el-row>
          <el-col :span="5">
            <el-input v-power="localPower.view" placeholder="请输入内容" v-model="req.value" size="mini"></el-input>
          </el-col>
          <el-col :span="19">
            <el-button v-power="localPower.view" type="primary" size="mini" plain @click="load">查询</el-button>
          </el-col>
        </el-row>
      </el-card>
      <!-- 数据表格 start -->
      <el-card shadow="never">

        <el-row justify="space-between">
          <el-col :span="22">
            <el-button v-power="localPower.add" type="primary" size="mini" icon="el-icon-plus" plain @click="handleAdd">新增</el-button>
            <el-button :disabled="delReq.ids.length == 0" v-power="localPower.del" icon="el-icon-delete" v-throttling="delThrottling" type="warning" size="mini" plain>
              删除{{delReq.ids.length == 0 ? '' : ' * ' + delReq.ids.length}}
            </el-button>
          </el-col>
          <el-col :span="2">
            <el-button v-throttling="refreshThrottling" type="success" size="mini" icon="el-icon-refresh" circle plain>
            </el-button>
            <el-popover
              style="margin-left: 10px"
              placement="bottom"
              trigger="click">
              <el-checkbox v-model="tabCol.seq">序号</el-checkbox><br>
              <el-checkbox v-model="tabCol.name">名字</el-checkbox><br>
              <el-checkbox v-model="tabCol.remark">备注</el-checkbox><br>
              <el-checkbox v-model="tabCol.enable">是否启用</el-checkbox><br>
              <el-checkbox v-model="tabCol.createdAt">创建时间</el-checkbox><br>
              <el-checkbox v-model="tabCol.updatedAt">更新时间</el-checkbox>
              <el-button slot="reference" type="success" size="mini" icon="el-icon-s-operation" circle plain>
              </el-button>
            </el-popover>
          </el-col>
        </el-row>
        <br>
        <el-table
          stripe
          border
          size="mini"
          row-class-name="u-transition"
          cell-class-name="u-transition"
          header-row-class-name="u-transition"
          header-cell-class-name="u-transition"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          :data="roles">
          <el-table-column
            fixed="left"
            type="selection"
            width="50">
          </el-table-column>
          <el-table-column
            v-if="tabCol.seq"
            align="center"
            label="序号"
            type="index">
          </el-table-column>
          <el-table-column
            v-if="tabCol.name"
            align="center"
            label="名字"
            prop="name">
          </el-table-column>
          <el-table-column
            v-if="tabCol.remark"
            align="center"
            label="备注"
            prop="remark">
          </el-table-column>
          <el-table-column
            v-if="tabCol.enable"
            align="center"
            width="120"
            label="是否启用">
            <template slot-scope="scope">
              <span v-if="scope.row.enable === 0"><el-tag effect="dark" size="mini">启用</el-tag></span>
              <span v-else><el-tag effect="dark" size="mini" type="info">禁用</el-tag></span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tabCol.createdAt"
            align="center"
            label="创建时间">
            <template slot-scope="scope">
              <i class="el-icon-time" style="margin-right: 5px"></i>
              <span><Time type="datetime" :time="scope.row.createdAt"></Time> </span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tabCol.updatedAt"
            align="center"
            label="更新时间">
            <template slot-scope="scope">
              <i class="el-icon-time" style="margin-right: 5px"></i>
              <span><Time type="datetime" :time="scope.row.updatedAt"></Time> </span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="180"
            fixed="right"
            align="center">
            <template slot-scope="scope">
              <el-button
                v-power="localPower.upd"
                size="mini"
                type="primary"
                plain
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                v-power="localPower.del"
                size="mini"
                type="warning"
                plain
                icon="el-icon-delete"
                @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 数据分页 start -->
        <div style="margin-top: 15px">
          <el-pagination
            layout="prev , pager , next , jumper , total, sizes"
            @size-change="handlerChangeSize"
            @current-change="load"
            :page-sizes="[5, 10, 15, 20, 50]"
            :page-size="req.pageSize"
            :current-page="req.pageNum"
            :total="req.total">
          </el-pagination>
        </div>
        <!-- 数据分页 end -->

      </el-card>
      <!-- 数据表格 end -->
    </el-row>

    <!-- 弹出层 start -->
    <el-dialog
      @close="handlerClose"
      :title="editReq.title"
      :append-to-body="true"
      :visible.sync="dialogVisible">
      <el-row :gutter="10">
        <el-col :span="8">
          <el-form label-position="top" label-width="80px"size="mini">
            <el-form-item label="权限树">
              <el-tree
                ref="tree"
                :data="powerTree"
                show-checkbox
                node-key="id"
                :default-checked-keys="editReq.powers"
                :default-expanded-keys="editReq.powers"
                :props="treeProps">
              </el-tree>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="16">
          <el-form label-position="top" label-width="80px"size="mini">
            <el-form-item label="角色名字">
              <el-input v-model="editReq.name"></el-input>
            </el-form-item>
            <el-form-item label="角色描述">
              <el-input v-model="editReq.remark" type="textarea" :rows="2"></el-input>
            </el-form-item>

            <el-form-item label="是否启用">
              <el-switch
                v-model="editReq.enable"
                :active-value="0"
                active-text="启用"
                inactive-text="禁用">
              </el-switch>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" plain @click="dialogVisible = false">取 消</el-button>
        <el-button type="warning" size="mini" plain v-throttling="editThrottling">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 弹出层 end -->
  </div>
</template>

<script>
  import Time from '@/components/Time'

  export default {
    name: 'role',
    components: {
      Time
    },
    data () {
      return {
        // 当前页包含的权限值：访问 添加 删除 修改
        localPower: {
          view: 1202,
          add: 120201,
          del: 120202,
          upd: 120203
        },
        treeProps: {
          children: 'children',
          label: 'name'
        },
        tabCol: {
          seq: true,
          name: true,
          remark: true,
          enable: true,
          createdAt: true,
          updatedAt: true
        },
        dialogVisible: false,
        checkAll: false,
        isIndeterminate: true,
        powerTree: [],
        roles: [],
        delReq: {
          ids: []
        },
        req: {
          value: '',
          pageSize: 10,
          pageNum: 1,
          total: 0
        },
        editReq: {
          title: '编辑角色',
          id: 0,
          name: '',
          remark: '',
          powers: [],
          enable: 0
        },
        // 节流
        editThrottling: {
          callback: this.edit,
          time: 2000
        },
        delThrottling: {
          callback: this.delSelection,
          time: 2000
        },
        refreshThrottling: {
          callback: () => {
            this.initData()
            this.init()
          },
          time: 2000
        }
      }
    },
    methods: {
      // 初始化
      init () {
        this.load()
      },
      // 初始数据
      initData () {
        const powerTree = this.$request.fetchPowerTree()
        powerTree.then(v => {
          this.powerTree = v.data
        })
      },
      // 加载数据
      load () {
        const roles = this.$request.fetchRoles(this.req)
        roles.then(v => {
          if (!v.code) {
            this.roles = v.data.list
            this.req.pageNum = v.data.page.pageNum
            this.req.pageSize = v.data.page.pageSize
            this.req.total = v.data.page.total
          }
        })
      },
      handlerChangeSize (val) {
        this.req.pageSize = val
        this.load()
      },
      handlerClose () {
        this.$refs.tree.setCheckedKeys([])
      },
      handleAdd () {
        this.editReq = {
          title: '添加角色',
          id: 0,
          name: '',
          remark: '',
          powers: [],
          enable: 0
        }
        this.dialogVisible = true
      },
      handleEdit (index, row) {
        this.editReq = {
          title: '编辑角色',
          id: row.id,
          name: row.name,
          remark: row.remark,
          powers: row.powers,
          enable: row.enable
        }
        this.dialogVisible = true
      },
      handleSelectionChange (val) {
        if (val && val.length) {
          const items = []
          for (let i = 0, length = val.length; i < length; i++) {
            items.push(val[i].id)
          }
          this.delReq.ids = items
          return
        }
        this.delReq.ids = []
      },
      del (index, row) {
        this.$confirm(`此操作将删除该角色『${row.name}』, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$request.fetchDelRole(this.editReq).then(v => {
            if (v.code) {
              this.$message.warning('删除失败！')
              return
            }
            this.$message.success('删除成功！')
            this.load()
          })
        }).catch(() => {
          this.$message.error('删除异常！')
        })
      },
      delSelection () {
        this.$confirm('此操作将删除所有选中的角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$request.fetchDelRoles(this.delReq.ids).then(v => {
            if (v.code) {
              this.$message.warning('删除失败！')
              return
            }
            this.$message.success('删除成功！')
            this.delReq.ids = []
            this.load()
          })
        }).catch(() => {
          this.$message.error('删除异常！')
        })
      },
      edit () {
        if (this.editReq.name.trim() === '') {
          this.$message.warning('角色名字不能为空！')
          return
        }
        const tip = this.editReq.id === 0 ? '新增' : '修改'
        this.$request.fetchEditRole(this.editReq).then(v => {
          if (v.code) {
            this.$message.warning(`${tip}失败！`)
            return
          }
          this.$message.success(`${tip}成功！`)
          this.load()
        })
      }
    }
  }
</script>
