package exercicio001;

import java.util.Scanner;

public class exercicio001 {
      public static void main(String[] args) {
       Scanner leia = new Scanner (System.in);
       int number = 0;
        int number1 = 0;
         int number2 = 0;
          int number3 = 0;
           int number4 = 0;

        System.out.println("Digite um numero: ");    
        number = leia.nextInt();
        System.out.println("Digite um numero: ");    
        number1 = leia.nextInt(); 
        System.out.println("Digite um numero: ");    
        number2 = leia.nextInt();
        System.out.println("Digite um numero: ");    
        number3 = leia.nextInt();
        System.out.println("Digite um numero: ");    
        number4 = leia.nextInt();

        System.out.println("Seus numeros sao: " + number);
         System.out.println("Seus numeros sao: " + number1);
          System.out.println("Seus numeros sao: " + number2);
           System.out.println("Seus numeros sao: " + number3);
            System.out.println("Seus numeros sao: " + number4);
      }
}
