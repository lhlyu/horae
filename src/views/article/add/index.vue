<template>
  <div class="u-container">
    <el-card shadow="never">
      <el-tabs tab-position="left" style="min-height: 500px">
        <el-tab-pane label="基本信息">
          <el-card shadow="never">
            <el-form size="mini" label-width="80px">
              <el-form-item label="标题 *">
                <el-input v-model="req.title" show-word-limit clearable maxlength="50"></el-input>
              </el-form-item>
              <el-form-item label="摘要">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  show-word-limit
                  clearable
                  maxlength="100"
                  v-model="req.summary">
                </el-input>
              </el-form-item>
            </el-form>
            <el-form size="mini" :inline="true" label-width="80px">
              <el-form-item label="分类">
                <el-select
                  v-model="req.category"
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请选择文章分类">
                </el-select>
              </el-form-item>
              <el-form-item label="标签">
                <el-select
                  v-model="req.labels"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请选择文章标签">
                </el-select>
              </el-form-item>
              <el-form-item label="类型">
                <el-select v-model="req.kind" clearable placeholder="请选择">
                  <el-option
                    v-for="item in []"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="状态">
                <el-select v-model="req.state" clearable placeholder="请选择">
                  <el-option
                    v-for="item in []"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="req.password"  show-password show-word-limit clearable maxlength="20"></el-input>
              </el-form-item>
              <el-form-item label="评论类型">
                <el-select v-model="req.commentState" clearable placeholder="请选择">
                  <el-option
                    v-for="item in []"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-form size="mini" label-width="80px">
              <el-form-item label="排序">
                <el-input-number v-model="req.sort" controls-position="right" :min="0"></el-input-number>
              </el-form-item>
              <el-form-item label="备注">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  show-word-limit
                  clearable
                  maxlength="100"
                  v-model="req.remark">
                </el-input>
              </el-form-item>
              <el-form-item size="mini">
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="文章内容">
          <div id="vditor"></div>
        </el-tab-pane>
        <el-tab-pane label="高级设置">
          <el-card shadow="never">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取封面</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

  import Vditor from 'vditor'

  export default {
    name: 'index',
    data () {
      return {
        contentEditor: null,
        req:{
          title: '',
          summary: '',
          contenet: '',
          category: 0,
          labels: '',
          kind: '',
          state: '',
          password: '',
          commentState: '',
          sort: 0,
          cover: '',
          remake: ''
        }
      }
    },
    mounted () {

    },
    methods: {
      init(){
        this.contentEditor = new Vditor('vditor', {
          mode: 'sv',
          minHeight: 500
        })
      }
    }
  }
</script>
