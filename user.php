<?php 
		header("Content-Type: text/html;charset=utf-8");
		//初始化
		require './lib/init.php';
		
		require './studentsinfo.php';
		
		session_start();
		// 开启一个session
			
		//是请求验证还是登录
		$action = isset($_GET['a']) ? $_GET['a'] : 'login';

		if($action == 'login'){

			require TMP_PATH . 'login.html';
			exit;
		}else if ($action == 'check') {
			
			//判断账号密码和角色是否为空
				$username = empty($_POST['username']) ? '' : $_POST['username'];
				$password = empty($_POST['password']) ? '' : $_POST['password'];
				$option = empty($_POST['options']) ? '' : $_POST['options'];
				
				if($username == '' || $password == ''){
						
						
						header('refresh: 3; url=user.php?a=login');
						echo 'Your password or account number is incorrect! Please re-enter!';
						echo '你的账号或密码错误！请重新输入！';
						exit;
					} else if ($option == '') {
						header('refresh: 3; url=user.php?a=login');
						echo '你的身份是不是忘了选了？';
						exit;
					}
					
					
					
					
					//学生登录入口
				if($option == 'students'){
					$sql = "SELECT * FROM `student` WHERE studentid = '$username'";
					
					
					if($user = $dao->fetchRow($sql)){
						if($user['password'] == ($password)){
							$_SESSION['type'] = $user['type'];						
							$sql = "SELECT * FROM results WHERE studentid = '$username'";
							$clssinfo = $dao->fetchRow($sql);						
							require TMP_PATH . 'home.html';
							exit;
						}else{
							//密码错误
							header('refresh: 3; url=user.php?a=login');
							echo 'Your password or account number is incorrect! Please re-enter!';
							echo '你的账号或密码错误！请重新输入！';
							exit;
						}
						}else{
							header('refresh: 3; url=user.php?a=login');
							echo 'Your password or account number is incorrect! Please re-enter!';
							echo '你的账号或密码错误！请重新输入！';
							exit;
						}
					
					
					
					
					//教师登录入口
				}else if ($option == 'teacher' ){
					$sql = "SELECT * FROM `staff` WHERE Jobnumber = '$username'";
					
					if($user = $dao->fetchRow($sql)){
					
						if($user['password'] == ($password)){
							$_SESSION['type'] = $user['type'];
							require TMP_PATH . 'home.1.html';
							exit;
						}else{
							//密码错误
							header('refresh: 3; url=user.php?a=login');
							echo 'Your password or account number is incorrect! Please re-enter!';
							echo '你的账号或密码错误！请重新输入！';
							exit;
						}
						}else{
							header('refresh: 3; url=user.php?a=login');
							echo 'Your password or account number is incorrect! Please re-enter!';
							echo '你的账号或密码错误！请重新输入！';
							exit;
						}
						
						
						
						
					// 管理员登录入口
				}else {
					$sql = "SELECT * FROM `admin` WHERE account = '$username'";
					
					if($user = $dao->fetchRow($sql)){
					
						if($user['password'] == ($password)){
							$_SESSION['type'] = $user['type'];
							require TMP_PATH . 'home.2.html';
							exit;
						}else{
							//密码错误
							header('refresh: 3; url=user.php?a=login');
							echo 'Your password or account number is incorrect! Please re-enter!';
							echo '你的账号或密码错误！请重新输入！';
							exit;
						}
						}else{
							header('refresh: 3; url=user.php?a=login');
							echo 'Your password or account number is incorrect! Please re-enter!';
							echo '你的账号或密码错误！请重新输入！';
							exit;
						}
				}
				
			
			
		}

		//判断退出登录
		if($action == 'logout'){
			echo "<script> alert('你以退出登录!') </script>";
			header('refresh: 0; url=user.php?a=login');
			
		}








?>