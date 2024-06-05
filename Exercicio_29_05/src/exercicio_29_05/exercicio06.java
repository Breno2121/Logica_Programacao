
package exercicio_29_05;

public class exercicio06 {
    public static void main(String[] args) {
    int A = 50;
    int B = 30;
    int AX;
        
        AX = A;
        A = B;
        B = AX;
    
    System.out.println("Valor de A: " + A);
    System.out.println("Valor de B: " + B);
        System.out.println("O valor de a + b é: " + (A + B));
    }
}

