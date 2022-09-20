package firstJavaProject;

public class cat {
	private String name;
	private int age;
	private double weight;
	private String kind;
	
	
	// 생성자
	
	public cat(String name, int age) {
		// TODO Auto-generated constructor stub
		this.name = name;
		this.age = age;
	}
	// getset
	public double getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	
	// 함수
	public String walk() {
		return "사푼사푼";
	}
	public String jump() {
		return "껑충";
	}
	public String cry() {
		return "냐옹";
	}
	
}
