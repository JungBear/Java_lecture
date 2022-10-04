<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>로그인에 성공하셨습니다!</h1>
	<%
	Object getid = session.getAttribute("id");
	Object getpwd = session.getAttribute("pwd");
	
	String userId = (String)getid;
	String userPwd = (String)getpwd;
	%>
	<br>
	<h3>당신의 아이디는 <%=userId%>이고 비밀번호는 <%=userPwd%>입니다.</h3>
	
	
</body>
</html>