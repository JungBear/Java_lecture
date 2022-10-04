<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="계산기결과출력.jsp" method = "get">
	num1 : <input type = "text" name = "num1">
	<br>
	num2 : <input type = "text" name = "num2">
	<br>
	<input type = "radio" name = "arithmetic" value = "sum">sum
	<input type = "radio" name = "arithmetic" value = "minus">minus
	<input type = "radio" name = "arithmetic" value = "multiply">multiply
	<input type = "radio" name = "arithmetic" value = "divide">divide
	<br>
	<input type = "submit" value = "제출">
	</form>
</body>
</html>