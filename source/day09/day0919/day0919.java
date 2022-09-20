package firstJavaProject;


public class day0919 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		printDan(5);
		String drink = "펩시콜라";
		int num1 = 5;
		int num2 = 10;
		int num3 = 51;
		System.out.println(isCola(drink));
		System.out.println(sigma(num1));
		System.out.println(calcHypot(num1,num2));
		isBigger(num1,num2,num3);
	}
	//1. printDan(int dan) 입력받은 단만 출력
	public static void printDan(int dan) {
		for(int i = 1; i<10; i++) {
			System.out.printf("%d * %d= %d\n",dan,i,dan*i);
		}
	}
	//2. isCola(String 음료) 음료이름에 콜라가있으면 true를 리턴
	public static boolean isCola(String drink) {
		if (drink.contains("콜라")==true){
			return true;
		}else {
			return false;
		}
	}
	
	//3. sigma(int 숫자)  1부터 해당숫자까지 1씩 더하면서 모두 합친후
	public static int sigma(int num) {
		int count = 0;
		for (int i=0;i<=num;i++) {
			count += i;
		}
		return count;
	}
	//4. calcHypot(가로,세로) 삼각형의 빗변구하기 루트(가로제곱+세로제곱)
	public static double calcHypot(int width, int height) {
		return Math.sqrt((width*width)+(height*height));
	}
	//5. is Bigger(숫1,숫2,숫3) 숫자1과 숫자2의 곱이 숫자3중 뭐가더큰지 입력
	public static void isBigger(int num1, int num2, int num3) {
		if (num1*num2>num3) {
			System.out.printf("%d가 %d보다 큽니다",num1*num2,num3);
		}else if(num1*num2<num3) {
			System.out.printf("%d가 %d보다 작습니다",num1*num2,num3);
		}else {
			System.out.printf("%d와 %d는 같다",num1*num2,num3);
		}
	}
	public static int pickOneNum() {
		double randomNum = Math.random()*45+1;
		return (int)(randomNum);
	}
	
	public static void yut() {
		double randomyut = Math.random()*5;
		int yut = (int)(randomyut);
		switch (yut) {
		case 0:
			System.out.println("도");
			break;
		case 1:
			System.out.println("개");
			break;
		case 2:
			System.out.println("걸");
			break;
		case 3:
			System.out.println("옻");
			break;
		case 4:
			System.out.println("모");
			break;
		}
			
	}
	public static boolean yunyear(int year) {
		if(year%4==0) {
			return true;
		}else {
			return false;
		}
			
	}
	public static void rockSissorPaper(String 내가낸거) {//0 주먹 1가위 2보
		int com = (int)(Math.random()*3);
		System.out.println(com);
		if(com==0) {
			 switch(내가낸거) {
			 case "주먹":
				 System.out.println("비김");
				 break;
			 case "가위":
				 System.out.println("짐");
				 break;
			 case "보":
				 System.out.println("이김");
				 break;
			 }
		}
		if(com==1) {
			 switch(내가낸거) {
			 case "주먹":
				 System.out.println("이김");
				 break;
			 case "가위":
				 System.out.println("비김");
				 break;
			 case "보":
				 System.out.println("짐");
				 break;
			 }
		}
		if(com==2) {
			 switch(내가낸거) {
			 case "주먹":
				 System.out.println("짐");
				 break;
			 case "가위":
				 System.out.println("이김");
				 break;
			 case "보":
				 System.out.println("비김");
				 break;
			 }
		}
		
	}
	
	
	
}
