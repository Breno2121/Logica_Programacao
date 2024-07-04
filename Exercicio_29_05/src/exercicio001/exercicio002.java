package exercicio001;

import java.util.Arrays;
import java.util.Scanner;

public class exercicio002 {
      public static void main(String[] args) {
       Scanner leia = new Scanner (System.in);
       int[] vetor = new int[10];
       int[] vetorinv = new int[10];
       int j = 0;
       
       for(var i = 0; i < vetor.length; i++){
           System.out.println("Digite um numero: ");
           vetor[i] = leia.nextInt();
       }
       for(var i = 9; i >= 0; i--){
           vetorinv[i] = vetor[j];
           j++;
       }
          System.out.println(Arrays.toString(vetor));
           System.out.println(Arrays.toString(vetorinv));
      }
}
