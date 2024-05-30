
package exercicio_29_05;

import java.util.Scanner;


public class exercicio03 {
     public static void main(String[] args) {
         Scanner leia = new Scanner(System.in);
      
         System.out.println("Digite a idade: ");
         int ano = leia.nextInt();
         System.out.println("Digite o meses: ");
         int mes = leia.nextInt();
         System.out.println("Digite os dias: ");
         int dia = leia .nextInt();
         
         int idade = ((ano * 365) + (mes * 30) + (dia));
         
         System.out.println(idade + "Dias");
         
     }    
}
