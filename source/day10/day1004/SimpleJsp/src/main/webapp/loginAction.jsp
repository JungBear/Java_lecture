<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");
	String dbId = "mod459";
	String dbPwd= "1233";
	String loginSuccess = null;
	
	String userId = request.getParameter("id");
	String userPwd = request.getParameter("pwd");
	
	if(dbId.equals(userId)){
		if(dbPwd.equals(userPwd)){
			session.setAttribute("id", userId);
			session.setAttribute("pwd", userPwd);
	 		response.sendRedirect("loginSuccess.jsp");
		}else{
			%>
			<script>
				alert("비밀번호가 틀렸습니다.");
				history.go(-1);			
			</script>
			<%
		}
		
	}else{
	%>
	<script>
		alert("아이디가 틀렸습니다.");
		history.go(-1);
	</script>
	<%
	}
	
	
	%>


</body>
</html>