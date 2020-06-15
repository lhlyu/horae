<template>
  <div class="u-container">
    <el-row :gutter="12">
      <el-collapse-transition>
        <el-card shadow="never" v-show="searchVisible">
          <el-row>
            <el-col :span="12">
              <el-input v-power="$codes.role.view" placeholder="请输入内容" v-model="req.value" size="mini"></el-input>
            </el-col>
            <el-col :span="12">
              <el-button v-power="$codes.role.view" type="primary" size="mini" plain @click="load">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-collapse-transition>
      <!-- 数据表格 start -->
      <el-card shadow="never">

        <el-row justify="space-between">
          <el-col>
            <el-button v-power="$codes.role.add" type="primary" size="mini" icon="el-icon-plus" plain @click="handleAdd">新增</el-button>
            <el-button :disabled="selectReq.ids.length == 0" v-power="$codes.role.del" icon="el-icon-delete" v-throttling="delThrottling" type="warning" size="mini" plain>
              删除{{selectReq.ids.length == 0 ? '' : ' * ' + selectReq.ids.length}}
            </el-button>
            <div class="u-float-right">
              <el-button @click="searchVisible = !searchVisible" type="info" size="mini" icon="el-icon-search" circle plain>
              </el-button>
              <el-button v-throttling="refreshThrottling" type="info" size="mini" icon="el-icon-refresh" circle plain>
              </el-button>
              <el-popover
                style="margin-left: 10px;"
                placement="bottom"
                trigger="click">
                <el-checkbox v-model="tabCol.seq">序号</el-checkbox><br>
                <el-checkbox v-model="tabCol.id">ID</el-checkbox><br>
                <el-checkbox v-model="tabCol.name">名字</el-checkbox><br>
                <el-checkbox v-model="tabCol.remark">备注</el-checkbox><br>
                <el-checkbox v-model="tabCol.enable">是否启用</el-checkbox><br>
                <el-checkbox v-model="tabCol.createdAt">创建时间</el-checkbox><br>
                <el-checkbox v-model="tabCol.updatedAt">更新时间</el-checkbox>
                <el-button slot="reference" type="info" size="mini" icon="el-icon-s-operation" circle plain>
                </el-button>
              </el-popover>
            </div>
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
          :data="items">
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
            v-if="tabCol.id"
            align="center"
            label="ID"
            prop="id">
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
              <span v-if="scope.row.enable === 0"><el-tag effect="light" size="mini">启用</el-tag></span>
              <span v-else><el-tag effect="light" size="mini" type="info">禁用</el-tag></span>
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
                v-power="$codes.role.view"
                size="mini"
                type="text"
                icon="el-icon-view"
                @click="handleView(scope.$index, scope.row)">查看</el-button>
              <el-button
                v-power="$codes.role.upd"
                size="mini"
                type="text"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                v-power="$codes.role.del"
                size="mini"
                type="text"
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
          <el-form label-position="top" size="mini"  label-suffix="：" :disabled="editReq.viewMode">
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
          <el-form label-position="top" disabled label-width="80px"size="mini" :disabled="editReq.viewMode">
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

      <span slot="footer" v-if="!editReq.viewMode" class="dialog-footer">
        <el-button type="primary" size="mini" plain @click="dialogVisible = false">取 消</el-button>
        <el-button type="warning" size="mini" plain v-throttling="editThrottling">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 弹出层 end -->
  </div>
</template>

<script src="./index.js"></script>
