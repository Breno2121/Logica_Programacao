
package exercicio_29_05;

import java.util.Scanner;

public class exercicio05 {
        public static void main(String[] args) {
        Scanner leia = new Scanner (System.in);
    
    System.out.println("Digite a temperatura em °C: ");
    float temp = leia.nextInt();
    
    int TF = (int) ((temp * 9/5) + 32);
    float TK = (float) (temp + 273.15);
    
        System.out.println("Temperatura em Fahrenheit: " + TF + "°F");
        System.out.println("Temperatura em Kelvin: " + TK + "K");
    }
}
