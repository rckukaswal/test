package programs;

class Car {
    String brand;
    int year;

    Car(String b, int y) {
        brand = b;
        year = y;
    }

    void display() {
        System.out.println("Car: " + brand + " (" + year + ")");
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Car c1 = new Car("Tesla", 2023);
        Car c2 = new Car("BMW", 2021);

        c1.display();
        c2.display();
    }
}
