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
	int num1 = Integer.parseInt(request.getParameter("num1"));
	int num2 = Integer.parseInt(request.getParameter("num2"));
	String arithmetic = request.getParameter("arithmetic");
	switch(arithmetic){
	case "sum":
		int sum = num1 + num2;
		out.println("<h3>"+sum+"</h3>");
		break;
	case "minus":
		int minus = num1 - num2;
		out.println("<h3>"+minus+"</h3>");
		break;
	case "multiply":
		int multiply = num1 * num2;
		out.println("<h3>"+multiply+"</h3>");
		break;
	case "divide":
		int divide = num1 / num2;
		out.println("<h3>"+divide+"</h3>");
		break;
	}
	%>
	
	
</body>
</html>