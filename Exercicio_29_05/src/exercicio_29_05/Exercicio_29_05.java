
package exercicio_29_05;

import java.util.Scanner;

public class Exercicio_29_05 {

    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Digite um numero :");
        int numero = leia.nextInt();
        
        numero = (--numero);
        
        System.out.println(numero);
    }
    
}
