package programs;

public class GreatestNumber {
    public static void main(String[] args) {
        int a = 420, b = 780, c = 1022, d = 90;

        int greatest = a;

        if (b > greatest) greatest = b;
        if (c > greatest) greatest = c;
        if (d > greatest) greatest = d;

        System.out.println("Greatest number is: " + greatest);
    }
}
