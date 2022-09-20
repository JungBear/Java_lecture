package firstJavaProject;
import java.util.Scanner;
public class day0920 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub		
//		if(isChose(inputNum1,inputNum2)==true) {
//			System.out.println("깔끔쓰");
//		}else {
//			System.out.println("노깔끔쓰");
//		}
//		System.out.println(isChose());
//		if (isOdd(inputNum)==true) {
//			System.out.println("홀수");
//		}else {
//			System.out.println("짝수");
//		}
//		scanner.close();
//		System.out.println(isOdd(inputNum));
//		System.out.println(getLength());
//		System.out.println(inputTwoNum());
		
//		String[] plant = {"수","금","지","화","목","토","천","해","명"};
//		plant[0] = "수";
//		for (int i=0;i<plant.length;i++) {
//			if(plant[i].equals("명")) {
//				plant[i]="";
//			}
//		}
//		for(String 행성 : plant) {
//			System.out.println(행성);
//		}
		// 2차원 배열
		// 가로3, 세로5의 배열
//			//가로1 : 포유류
//		String[][] animals = new String[][] {
//			{"고래","원숭이","독수리","오리","호랑이"},
//			{"퓨마","사자","호랑이","삵","표범"},
//			{"스코티시필드","코리안숏컷","먼치킨","터키시","샴"}
//		};
//		for(int i = 0; i < animals.length;i++) {
//			for(int j=0; j<animals[i].length;j++) {
//				System.out.println(animals[i][j]);
//			}
//		}
		//객체
		프로그래머 steveJobs = new 프로그래머("스티브잡스","아이폰");
//		System.out.println(steveJobs.get현직장());
//		steveJobs.setGender("남자");
//		System.out.println(steveJobs.getGender());
		steveJobs.setAge(10);
		System.out.println(steveJobs.getAge());
		// private으로 선언된 변수를 public으로 되어있는 함수로 값을 정해주면
		// 작성자가 원하는 값으로 검사를 시킬수 있다.
		// 오버로딩
		프로그래머 billgates = new 프로그래머("빌게이츠","윈도우");
		프로그래머 hongseunggi = new 프로그래머("홍승기");
		
		
		

	}
	public static boolean isOdd(int num) {
		if(num%2==1) {
			return true;
		}else {
			return false;
		}
	}
	public static boolean isChose() {
		Scanner scanner = new Scanner(System.in);
		System.out.print("숫자 1을 입력해주세요 : ");
		int inputNum1 = scanner.nextInt();
		System.out.print("숫자2를 입력해주세여 : ");
		int inputNum2 = scanner.nextInt();
		if(inputNum1%inputNum2==0) {
			return true;
		}else {
			return false;
		}
		
		
	}
	public static int getLength() {
		String input = "";
		Scanner sc = new Scanner(System.in);
		System.out.print("길이를 분석할 문자열을 입력하시오: ");
		input = sc.nextLine();
		return input.length();
	}
	public static int inputTwoNum() {
		int sum = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("숫자 두개를 입력하시오: ");
		int input = sc.nextInt();
		int input2 = sc.nextInt();
		sum = input + input2;
		return sum;
	}
	
	

}