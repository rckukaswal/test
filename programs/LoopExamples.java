package programs;

public class LoopExamples {
    public static void main(String[] args) {
        // For Loop
        System.out.println("For Loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }

        // While Loop
        System.out.println("\nWhile Loop:");
        int j = 1;
        while (j <= 5) {
            System.out.println("j = " + j);
            j++;
        }

        // Do-While Loop
        System.out.println("\nDo-While Loop:");
        int k = 1;
        do {
            System.out.println("k = " + k);
            k++;
        } while (k <= 5);
    }
}
