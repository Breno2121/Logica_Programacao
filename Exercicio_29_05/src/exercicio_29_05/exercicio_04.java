
package exercicio_29_05;

import java.util.Scanner;


public class exercicio_04 {
    public static void main(String[] args) {
     Scanner leia = new Scanner (System.in);
     
     System.out.println("Digite numero de eleitores: ");
     double eleitores = leia.nextInt();
     System.out.println("Digite o numero de votos em branco: ");
     double votob = leia.nextInt();
     System.out.println("Digite o numero de votos nulos: ");
     double voton = leia.nextInt();
     System.out.println("Digite numero de votos validos: ");
     double votov = leia.nextInt();
     
     double PVB = (votob * 100) / eleitores;
     double PVN = (voton * 100) / eleitores;
     double PVV = (votov * 100) / eleitores;
     
     System.out.println("Votos em branco: " + PVB + "%");
     System.out.println("Votos nulos: " + PVN + "%");
     System.out.println("Votos validos: " + PVV + "%");
    }
}
