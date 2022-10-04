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
	int age = Integer.parseInt(request.getParameter("age"));
	if (age<20){
	%>
	<script>
		alert("20세 미만은 입장이 불가합니다.");
		history.go(-1);
	</script>
	<%
	}else{
		RequestDispatcher rd = request.getRequestDispatcher("forwardResult.jsp");
		rd.forward(request, response);
	}
	%>
	
</body>
</html>