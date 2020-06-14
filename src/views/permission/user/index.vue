<template>
  <div class="u-container">
    <el-row :gutter="12">
      <el-collapse-transition>
        <el-card shadow="never" v-show="searchVisible">
          <el-row>
            <el-form :inline="true" size="mini">
              <el-form-item label="关键字">
                <el-input v-model="req.value" show-word-limit clearable maxlength="20"></el-input>
              </el-form-item>
              <el-form-item label="ID">
                <el-input v-model="req.id" show-word-limit clearable maxlength="11"></el-input>
              </el-form-item>
              <el-form-item label="角色">
                <el-select v-model="req.roleId" filterable placeholder="请选择">
                  <el-option
                    v-for="v in roleList"
                    :key="v.id"
                    :label="v.name"
                    :value="v.id">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="来源">
                <el-select v-model="req.source" filterable placeholder="请选择">
                  <el-option
                    v-for="(v,i) in sources"
                    :key="i"
                    :label="v"
                    :value="v">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="创建时间">
                <el-date-picker
                  v-model="dateRange"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
              <el-form-item size="mini">
                <el-button type="primary" size="mini" @click="load">搜索</el-button>
                <el-button type="info" size="mini" @click="resetReq">重置</el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-card>
      </el-collapse-transition>
      <!-- 数据表格 start -->
      <el-card shadow="never">

        <el-row justify="space-between">
          <el-col>
            <el-button v-power="$codes.user.add" type="primary" size="mini" icon="el-icon-plus" plain @click="handleAdd">新增</el-button>
            <el-button :disabled="selectReq.ids.length == 0" v-power="$codes.user.del" icon="el-icon-delete" v-throttling="delThrottling" type="warning" size="mini" plain>
              删除{{selectReq.ids.length == 0 ? '' : ' * ' + selectReq.ids.length}}
            </el-button>
            <el-button :disabled="selectReq.ids.length == 0" v-power="$codes.user.upd" icon="el-icon-refresh-left" v-throttling="resetThrottling" type="info" size="mini" plain>
              重置密码{{selectReq.ids.length == 0 ? '' : ' * ' + selectReq.ids.length}}
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
                <el-checkbox v-model="tabCol.thirdId">第三方ID</el-checkbox><br>
                <el-checkbox v-model="tabCol.account">账号</el-checkbox><br>
                <el-checkbox v-model="tabCol.nickName">昵称</el-checkbox><br>
                <el-checkbox v-model="tabCol.role.name">角色</el-checkbox><br>
                <el-checkbox v-model="tabCol.avatar">头像</el-checkbox><br>
                <el-checkbox v-model="tabCol.source">来源</el-checkbox><br>
                <el-checkbox v-model="tabCol.url">地址</el-checkbox><br>
                <el-checkbox v-model="tabCol.bio">签名</el-checkbox><br>
                <el-checkbox v-model="tabCol.state">状态</el-checkbox><br>
                <el-checkbox v-model="tabCol.lastIp">最后登陆IP</el-checkbox><br>
                <el-checkbox v-model="tabCol.lastAt">最后登陆时间</el-checkbox><br>
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
            v-if="tabCol.thirdId"
            align="center"
            label="第三方ID"
            prop="thirdId">
          </el-table-column>
          <el-table-column
            v-if="tabCol.account"
            align="center"
            label="账号"
            prop="account">
          </el-table-column>
          <el-table-column
            v-if="tabCol.nickName"
            align="center"
            label="昵称"
            prop="nickName">
          </el-table-column>
          <el-table-column
            v-if="tabCol.role.name"
            align="center"
            label="角色"
            prop="role.name">
          </el-table-column>
          <el-table-column
            v-if="tabCol.avatar"
            align="center"
            label="头像">
            <template slot-scope="scope">
              <el-avatar :size="45" :src="scope.row.avatar">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
              </el-avatar>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tabCol.source"
            align="center"
            label="来源"
            prop="source">
          </el-table-column>
          <el-table-column
            v-if="tabCol.url"
            align="center"
            label="地址"
            prop="url">
            <template slot-scope="scope">
              <el-link v-if="scope.row.url.length" :href="scope.row.url" target="_blank" type="primary">个人网站</el-link>
              <el-link v-else disabled>暂无网站</el-link>
            </template>
          </el-table-column>
          <el-table-column
            v-if="tabCol.bio"
            align="center"
            label="签名"
            prop="bio">
          </el-table-column>
          <el-table-column
            v-if="tabCol.state"
            align="center"
            label="状态"
            prop="state">
          </el-table-column>
          <el-table-column
            v-if="tabCol.lastIp"
            align="center"
            label="最后登陆IP"
            prop="lastIp">
          </el-table-column>
          <el-table-column
            v-if="tabCol.lastAt"
            align="center"
            label="最后登陆时间">
            <template slot-scope="scope">
              <i class="el-icon-time" style="margin-right: 5px"></i>
              <span><Time :time="scope.row.lastAt"></Time> </span>
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
                v-power="$codes.user.view"
                size="mini"
                type="text"
                icon="el-icon-view"
                @click="handleView(scope.$index, scope.row)">查看</el-button>
              <el-button
                v-power="$codes.user.upd"
                size="mini"
                type="text"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                v-power="$codes.user.del"
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
        <el-tabs tab-position="right">
          <el-tab-pane label="基本信息">
            <el-form size="mini" label-position="left" label-suffix="：">
              <el-col :span="4">
                <el-form-item label="">
                  <el-avatar shape="square" :size="50" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="ID">
                  <span>2313</span>
                </el-form-item>
                <el-form-item label="账号">
                  <span>Ax12313</span>
                </el-form-item>
                <el-form-item label="来源">
                  <span>Github</span>
                </el-form-item>
                <el-form-item label="个人网站">
                  <span><el-link href="http://github.com" target="_blank" type="primary">链接</el-link></span>
                </el-form-item>
                <el-form-item label="更新时间">
                  <span><Time type="datetime" :time="1589017294016"></Time> </span>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="第三方ID">
                  <span>957</span>
                </el-form-item>
                <el-form-item label="昵称">
                  <span>张三</span>
                </el-form-item>
                <el-form-item label="个性签名">
                  <span>起风了 唯有努力生存</span>
                </el-form-item>
                <el-form-item label="最后访问时间">
                  <span><Time :time="1589017294016"></Time> </span>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span><Time type="datetime" :time="1589017294016"></Time> </span>
                </el-form-item>
              </el-col>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="高级设置">
            <el-form size="mini" label-position="left" label-suffix="：">
              <el-col :span="12">
                <el-form-item label="角色">
                  <el-select v-model="req.roleId" filterable placeholder="请选择">
                    <el-option
                      v-for="v in roleList"
                      :key="v.id"
                      :label="v.name"
                      :value="v.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="状态">
                  <el-select v-model="req.roleId" filterable placeholder="请选择">
                    <el-option
                      v-for="v in roleList"
                      :key="v.id"
                      :label="v.name"
                      :value="v.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item size="mini">
                  <el-button type="primary" size="mini" plain>取 消</el-button>
                  <el-button type="warning" size="mini" plain>确 定</el-button>
                </el-form-item>
              </el-col>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="最近事件">
            <div>
              <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
              <el-divider></el-divider>
              <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <span slot="footer" v-if="!editReq.viewMode" class="dialog-footer">
        <el-button type="primary" size="mini" plain @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <!-- 弹出层 end -->
  </div>
</template>

<script src="./index.js"></script>
