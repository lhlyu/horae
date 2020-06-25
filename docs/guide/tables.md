# 表设计

## 用户表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| account        | varchar(20)   | 账号  |
| nick_name      | varchar(20)   | 昵称  |
| password       | varchar(32)   | 密码  |
| salt           | varchar(8)    | 盐值  |
| source         | varchar(20)   | 来源  |
| avatar         | varchar(200)  | 头像  |
| bio            | varchar(200)  | Bio  |
| url            | varchar(200)  | 个人地址  |
| ip             | varchar(50)   | IP  |
| role_id        | int           | 角色  |
| state          | tinyint       | 用户状态  |
| last_at        | bigint        | 最近登陆  |
| created_at     | bigint        | 创建时间戳 |
| updated_at     | bigint        | 更新时间戳 |

## 文章表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| title          | varchar(100)  | 标题  |
| summary        | varchar(200)  | 摘要  |
| cover          | varchar(200)  | 封面  |
| top            | int           | 置顶值，越大越靠前  |
| category_id    | int           | 分类ID  |
| tags           | varchar(100)  | 标签，英文逗号隔开  |
| password       | varchar(32)  | 浏览密码  |
| content        | text          | 文章内容，取决于存储方式  |
| author_id      | int           | 作者ID |
| view_count     | int           | 浏览次数 |
| comment_count  | int           | 评论数量 |
| kind           | tinyint       | 文章类型 |
| store_mode     | tinyint       | 存储方式 |
| state          | tinyint       | 文章状态 |
| comment_state  | tinyint       | 评论状态 |
| created_at     | bigint        | 创建时间戳 |
| updated_at     | bigint        | 更新时间戳 |

## 分类表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| name          | varchar(20)    | 分类名   |
| count         | int            | 关联文章数量  |
| state          | tinyint       | 分类状态 |
| created_at     | bigint        | 创建时间戳 |
| updated_at     | bigint        | 更新时间戳 |

## 角色表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| name          | varchar(20)    | 角色名   |
| enable        | tinyint       | 启用 |
| power_ids     | varchar(200)   | 权限值，英文逗号隔开 |
| created_at     | bigint        | 创建时间戳 |
| updated_at     | bigint        | 更新时间戳 |

## 权限表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| pid            | int           | 父级ID  |
| name          | varchar(20)    | 权限名字|
| created_at     | bigint        | 创建时间戳 |
| updated_at     | bigint        | 更新时间戳 |

## 字典表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| target         | varchar(30)   | 目标字段(表名:字段名)  |
| key            | varchar(20)   | Key   |
| value          | varchar(20)   | Value |
