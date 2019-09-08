<template>
	<header class="header-nav">
		<el-row>
			<el-col :span="6" class='logo-container'>
				<div class="collapse-btn" @click="open">
					<i class="el-icon-menu icon-btn"></i>
				</div>
				<span class="title">Horae - 管理后台</span>
			</el-col>
			<el-col :span="6" class="user">
				<div class="userinfo">
					<img class="avatar" src="../assets/horizon.jpg">
					<div class="welcome">
						<p class="name avatarname">lhlyu</p>
					</div>
					<span class='username'>
						<el-dropdown trigger="click">
							<span class="el-dropdown-link">
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command='info'>个人信息</el-dropdown-item>
								<el-dropdown-item command='logout' @click.native="logout">退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</span>
				</div>
			</el-col>
		</el-row>
	</header>
</template>

<script>
	export default {
		name: 'header-nav',
		data() {
			return {
				collapse: false //菜单栏是否闭合
			}
		},
		computed: {

		},
		methods: {
			logout:function(){
				this.$router.push({path : "/"})
			},
			open(){
				this.collapse = !this.collapse
				this.$emit('collapse',this.collapse)
			}
		}
	}
</script>
<style scoped>
	.header-nav {
		width: 100%;
		color: #000;
		overflow: hidden;
		line-height: 60px;
		background-color: rgba(255,255,255,0.8);
	}
	.logo-container{
		line-height: 60px;
		min-width: 400px;
		padding: 0 5px;
	}
	.icon-btn {
		font-size: 36px;
		vertical-align: middle;
		cursor: pointer;
	}
	.collapse-btn {
		width: 50px;
		margin-left: 15px;
		display: inline-block;
	}
	.title {
		vertical-align: middle;
		font-size: 22px;
		font-family: "Microsoft YaHei";
		letter-spacing: 3px;
	}
	.user {
		text-align: right;
		float: right;
	}
	@media screen and (max-width: 650px) {
		.user{
			display: none;
		}
	}
	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 10px;
		display: inline-block;
	}
	.welcome {
		display: inline-block;
		width: auto;
		vertical-align: middle;
		padding: 0 5px;
	}
	.name {
		line-height: 20px;
		text-align: center;
		font-size: 14px;
	}
	.avatarname {
		color: #000;
		font-weight: bolder;
	}
	.username {
		cursor: pointer;
		margin-right: 40px;
	}
	.icon-font i {
		font-size: 20px;
	}
</style>
