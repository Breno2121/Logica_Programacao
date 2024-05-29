
package pkg01.aula.operadores;


public class AulaOperadores {


    public static void main(String[] args) {
    //------------------------------------
    //ARITMETICOS
    int a = 10 + 1;
    int b = a + 10;    
    int c = b * 3;
    int d = c / 2;
    
    a += 10;
    b -= 1;
    c *= 1;
    d /= 5;
    
        System.out.println("O valor de A: " + a);
        System.out.println("O valor de B: " + b);
        System.out.println("O valor de c: " + c);
        System.out.println("O valor de D: " + d);
        //--------------------------------------
        //LOGICOS
        boolean ehMaior = 100 > 20;
        boolean ehMenor = 10 < 20;
        boolean ehMenorigual = 10 <= 20;
        boolean ehMaiorigual = 10 >= 20;
        boolean ehigual = 10 == 10;
        boolean ehDiferente = 10 != 20;
        
        System.out.println("Maior: " + ehMaior);
        System.out.println("Menor: " + ehMenor);
        System.out.println("Maior ou igual: " + ehMaiorigual);
        System.out.println("Menor ou igual: " + ehMenorigual);
        System.out.println("É igual " + ehigual);
        System.out.println("É diferente: " + ehDiferente);
        
        //-------------------------------------------------
        //LOGICOS
        
        boolean valor = (10 > 9) && (5 > 1);
        boolean valor1 = true && true;
        boolean valor2 = false && true;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = 10 > 9 || 5 > 1;
        
        boolean negacao = !true;
        boolean negacao2 = !false;
       
    }
}
