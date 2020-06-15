import Time from '@/components/Time'

import { mapState,mapActions } from 'vuex'

export default {
  name: 'role',
  components: {
    Time
  },
  data () {
    return {
      searchVisible: true,
      addDialogVisible: false,
      editDialogVisible: false,
      treeProps: {
        children: 'children',
        label: 'name'
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      tabCol: {
        seq: true,
        id: true,
        thirdId: false,
        account: true,
        nickName: true,
        role: {
          name: true
        },
        avatar: false,
        source: false,
        url: false,
        bio: false,
        state: true,
        lastIp: false,
        lastAt: true,
        createdAt: false,
        updatedAt: false
      },
      item: null,
      items: [],
      selectReq: {
        ids: []
      },
      dateRange: '',
      req: {
        value: '',
        id: '',
        roleId: null,
        start: '',
        end: '',
        source: '',
        pageSize: 10,
        pageNum: 1,
        total: 0
      },
      addReq: {

      },
      editReq: {
        viewMode: false,
        title: '编辑用户',
        id: 0
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
      resetThrottling: {
        callback: this.reset,
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
    ...mapActions(['SET_ROLE_LIST','SET_USER_STATE_LIST','SET_SOURCE_LIST']),
    // 初始化
    init () {
      this.load()
    },
    initData () {
      this.SET_ROLE_LIST()
      this.SET_USER_STATE_LIST()
      this.SET_SOURCE_LIST()
    },
    // 加载数据
    load () {
      if (this.dateRange && this.dateRange.length) {
        this.req.start = +this.dateRange[0]
        this.req.end = +this.dateRange[1]
      }
      const resp = this.$request.fetchUserPage(this.req)
      resp.then(v => {
        if (!v.code) {
          this.items = v.data.list
          this.req.pageNum = v.data.page.pageNum
          this.req.pageSize = v.data.page.pageSize
          this.req.total = v.data.page.total
        }
      })
    },
    isEmpty(data){
      if(data && data.length){
        return false
      }
      return true
    },
    resetReq () {
      this.dateRange = ''
      this.req = {
        value: '',
        id: '',
        roleId: null,
        start: '',
        end: '',
        source: ''
      }
      this.initData()
    },
    handlerChangeSize (val) {
      this.req.pageSize = val
      this.load()
    },
    handleAdd () {
      this.addReq = {
        account: '',
        password: '',
        roleId: 1,
        state: 'normal'
      }
      this.addDialogVisible = true
    },
    handleEdit (index, row) {
      this.editReq = {
        id: row.id,
        account: row.account,
        avatar: row.avatar,
        source: row.source,
        url: row.url,
        thirdId: row.thirdId,
        nickName: row.nickName,
        bio: row.bio,
        roleId: row.role.id,
        state: row.state,
        lastAt: row.lastAt,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt
      }
      this.editDialogVisible = true
    },
    handleSelectionChange (val) {
      if (val && val.length) {
        const items = []
        for (let i = 0, length = val.length; i < length; i++) {
          items.push(val[i].id)
        }
        this.selectReq.ids = items
        return
      }
      this.selectReq.ids = []
    },
    del (index, row) {
      this.$confirm(`此操作将删除该用户『${row.account}』, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$request.fetchDelUser({id:row.id}).then(v => {
          if (v.code) {
            this.$message.warning('删除失败！')
            return
          }
          this.$message.success('删除成功！')
          this.load()
        })
      })
    },
    delSelection () {
      this.$confirm('此操作将删除所有选中的用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$request.fetchDelRoles(this.selectReq.ids).then(v => {
          if (v.code) {
            this.$message.warning('删除失败！')
            return
          }
          this.$message.success('删除成功！')
          this.selectReq.ids = []
          this.load()
        })
      })
    },
    reset () {
      this.$prompt('输入新密码', '重置密码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[a-zA-Z0-9_]+/,
        inputErrorMessage: '密码不能为空 (大小写字母、数字和下划线)',
        type: 'primary'
      }).then(({ value }) => {
        this.$request.fetchDelRoles(this.selectReq.ids).then(v => {
          if (v.code) {
            this.$message.warning('重置失败！')
            return
          }
          this.$message.success('重置成功！')
          this.selectReq.ids = []
          this.load()
        })
      })
    },
    add(){
      if(this.isEmpty(this.addReq.account)){
        this.$message.warning(`账号不能空！`)
        return
      }
      if(this.isEmpty(this.addReq.password)){
        this.$message.warning(`密码不能空！`)
        return
      }
      this.$request.fetchEditRole(this.addReq).then(v => {
        if (v.code) {
          this.$message.warning(`新增失败！`)
          return
        }
        this.$message.success(`新增成功！`)
        this.load()
      })
    },
    edit () {
      this.$request.fetchEditRole(this.editReq).then(v => {
        if (v.code) {
          this.$message.warning(`修改失败！`)
          return
        }
        this.$message.success(`修改成功！`)
        this.load()
      })
    }
  },
  computed:{
    ...mapState({
      roleList: state => state.quanta.roleList,
      sourceList: state => state.quanta.sourceList,
      userStateList: state => state.quanta.userStateList,
    })
  }
}
