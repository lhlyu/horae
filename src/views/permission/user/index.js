import Time from '@/components/Time'

export default {
  name: 'role',
  components: {
    Time
  },
  data () {
    return {
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
        lastAt: false,
        createdAt: true,
        updatedAt: true
      },
      dialogVisible: false,
      powerTree: [],
      items: [],
      delReq: {
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