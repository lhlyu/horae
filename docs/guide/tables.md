# 表设计

## 用户表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |

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
| kind           | tinyint      | 文章类型 |
| store_mode      | tinyint      | 存储方式 |
| state           | tinyint      | 文章状态 |
| comment_state   | tinyint      | 评论状态 |
| created_at      | bigint       | 创建时间戳 |
| updated_at      | bigint       | 更新时间戳 |

## 字典表

| 字段            | 类型          | 描述  |
| :-------------:|:-------------:|:-----:|
| id             | int           | 主键  |
| target         | varchar(30)   | 目标字段(表名:字段名)  |
| key            | varchar(20)   | Key   |
| value          | varchar(20)   | Value |
