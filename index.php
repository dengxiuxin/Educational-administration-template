<?php
	 header("constant-type:text/html; charset=utf-8");
	//首页的php文件
	//取出所有的文章[调用数据库]然后显示出来。
	require './lib/init.php';


	// $sql = 'SELECT id,title,summary,create_ad,cover, tags, user_id from `tn_article`';
	//初始化数据

	// $article_list = $dao->fetchAll($sql);
	// 保存了获取到的数据
	// $sql = 'SELECT * FROM `tn_category`';
	//初始化数据
	
	// $category_list = $dao->fetchAll($sql);
	// 保存了获取到的数据
	
	//把内容显示在index.html模板上
	require TMP_PATH . 'login.html';
	
?>
