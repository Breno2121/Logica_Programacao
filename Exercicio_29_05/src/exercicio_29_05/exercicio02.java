
package exercicio_29_05;

import java.util.Scanner;


public class exercicio02 {
    
     public static void main(String[] args) {
     Scanner leia = new Scanner (System.in);
     
         System.out.println("Digite a largura");    
         int largura = leia.nextInt();
         System.out.println("Digite a altura");
         int altura = leia.nextInt();
         
         int area = (largura * altura);
         
         System.out.println("Area é: " + area + "m²");
     }
     
}
