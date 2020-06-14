import Time from '@/components/Time'

export default {
  name: 'role',
  components: {
    Time
  },
  data () {
    return {
      searchVisible: true,
      dialogVisible: false,
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
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
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
      roleList: [],
      sources: [],
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
    // 初始化
    init () {
      this.load()
    },
    async initData () {
      const roleListResult = await this.$request.fetchRoleList()
      const sourcesResult = await this.$request.fetchSources()
      if (!roleListResult.code) {
        this.roleList = roleListResult.data
      }
      if (!sourcesResult.code) {
        this.sources = sourcesResult.data
      }
    },
    // 加载数据
    load () {
      if (this.dateRange && this.dateRange.length) {
        this.req.start = +this.dateRange[0]
        this.req.end = +this.dateRange[1]
      }
      console.log(this.req)
      const resp = this.$request.fetchUsers(this.req)
      resp.then(v => {
        if (!v.code) {
          this.items = v.data.list
          this.req.pageNum = v.data.page.pageNum
          this.req.pageSize = v.data.page.pageSize
          this.req.total = v.data.page.total
        }
      })
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
    handlerClose () {
      this.$refs.tree.setCheckedKeys([])
    },
    handleAdd () {
      this.editReq = {
        viewMode: false,
        title: '添加角色',
        id: 0,
        name: '',
        remark: '',
        powers: [],
        enable: 0
      }
      this.dialogVisible = true
    },
    handleView (index, row) {
      this.editReq = {
        viewMode: true,
        title: '查看角色',
        id: row.id,
        name: row.name,
        remark: row.remark,
        powers: row.powers,
        enable: row.enable
      }
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(row.powers)
      })
    },
    handleEdit (index, row) {
      this.editReq = {
        viewMode: false,
        title: '编辑角色',
        id: row.id,
        name: row.name,
        remark: row.remark,
        powers: row.powers,
        enable: row.enable
      }
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(row.powers)
      })
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
      this.$confirm(`此操作将删除该角色『${row.name}』, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$request.fetchDelUser(this.editReq).then(v => {
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
      this.$confirm('此操作将删除所有选中的角色, 是否继续?', '提示', {
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
