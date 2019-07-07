<?php
	header("Content-Type: text/html;charset=utf-8");
	//学生信息查询组件
	$sql = "SELECT * FROM results WHERE theclass = '一班'";
	$data = $dao->fetchAll($sql);
	
	$sql = "SELECT * FROM results WHERE theclass = '二班'";
	$data = $dao->fetchAll($sql);
	
	$sql = "SELECT * FROM results WHERE theclass = '三班'";
	$data = $dao->fetchAll($sql);
?>