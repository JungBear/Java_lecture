package generic;

//Box클래스를 생성할때 전달한 데이터타입을 T라는 이름으로 쓰겠다.
public class Box <T>{
	private T t;

	public T get() {
		return t;
	}

	public void set(T t) {
		this.t = t;
	}
	
}
