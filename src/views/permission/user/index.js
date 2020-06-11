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
      req: {
        value: '',
        id: 0,
        roleId: 0,
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
    // 加载数据
    load () {
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
        this.$request.fetchDelRole(this.editReq).then(v => {
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
      }).then(({value}) => {
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
