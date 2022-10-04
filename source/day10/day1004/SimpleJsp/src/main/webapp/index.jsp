<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	hello world
	<br>
	안녕 세상아
	<br>
	<%
		for (int i=1;i<=6;i++){
			out.print("<h"+i+">");
			out.print("동적");
			out.print("</h"+i+">");
		}
	%>
	<%
		request.setCharacterEncoding("utf-8");
		String id = request.getParameter("id");
		String pwd = request.getParameter("pwd");
		String name = request.getParameter("name");
		String age = request.getParameter("age");
		
		out.println("<h3>"+name+"님 환영합니다 </h3>");
	
	
	
	%>
</body>
</html>