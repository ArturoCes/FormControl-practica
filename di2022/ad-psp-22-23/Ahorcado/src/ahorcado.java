//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

import java.util.Scanner;

public class ahorcado {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int intentos = 5;
        int W = 0;
        boolean VD = true;
        boolean w = true;
        int rep = 0;
        System.out.println("Ingrese palabra");
        String palabra = sc.nextLine();
        System.out.println("\n\n");
        String[] letra = new String[5];
        String[] letras = palabra.split("");
        String[] intento = new String[letras.length];
        String[] ingresadas = new String[letras.length];
         W = letras.length - 1;

        int i;
        for(i = 0; i < 25; ++i) {
            System.out.println("");
        }

        for(i = 1; i < letras.length; ++i) {
            intento[i] = "_ ";
        }

        while(intentos > 0) {
            System.out.println("Ingrese letra");

            for(i = 1; i < letras.length; ++i) {
                System.out.print(intento[i]);
            }

            System.out.println("");
            letra[0] = sc.nextLine();
            rep = 0;
            boolean aviso = true;

            for( i = 1; i < letras.length; ++i) {
                w = true;
                if (letras[i].equals(letra[0])) {
                    if (!intento[i].equals(letra[0])) {
                        intento[i] = letra[0];
                        VD = false;
                        ++rep;
                        ingresadas[i] = letras[0];
                    } else {
                        aviso = false;
                        VD = false;
                    }
                }
            }

            if (!aviso) {
                System.out.println(" Aviso: Ya ingresaste esa letra ");
            }

            aviso = true;
            if (VD) {
                --intentos;
            } else {
                W -= rep;
            }

            System.out.println(" \nQuedan: " + intentos + " Intentos");
            impresion(intentos);
            if (intentos == 0) {
                System.out.println("\nLastima perdiste\nLa palabra es: " + palabra);
            }

            if (W <= 0) {
                System.out.println(palabra + "\nFelicidades ganaste, bien hecho.");
                intentos = 0;
            }

            VD = true;
             }

    }

    static void impresion(int vd) {
        if (vd == 5) {
            System.out.println("    -----   ");
            System.out.println("    |   |   ");
            System.out.println("    |   |   ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("------------");
        }

        if (vd == 4) {
            System.out.println("    -----   ");
            System.out.println("    |   |   ");
            System.out.println("    |   |   ");
            System.out.println("    |   0   ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("------------");
        }

        if (vd == 3) {
            System.out.println("    -----   ");
            System.out.println("    |   |   ");
            System.out.println("    |   |   ");
            System.out.println("    |   0   ");
            System.out.println("    |  /    ");
            System.out.println("    |       ");
            System.out.println("    |    \\ ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("------------");
        }

        if (vd == 2) {
            System.out.println("    -----   ");
            System.out.println("    |   |   ");
            System.out.println("    |   |   ");
            System.out.println("    |   0   ");
            System.out.println("    |  /|   ");
            System.out.println("    |   |   ");
            System.out.println("    |    \\ ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("------------");
        }

        if (vd == 1) {
            System.out.println("    -----   ");
            System.out.println("    |   |   ");
            System.out.println("    |   |   ");
            System.out.println("    |   0   ");
            System.out.println("    |   |\\ ");
            System.out.println("    |   |   ");
            System.out.println("    |  / \\   ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("------------");
        }

        if (vd == 0) {
            System.out.println("    -----   ");
            System.out.println("    |   |   ");
            System.out.println("    |   |   ");
            System.out.println("    |   0   ");
            System.out.println("    |  /|\\ ");
            System.out.println("    |   |   ");
            System.out.println("    |  / \\   ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("    |       ");
            System.out.println("------------");
        }

    }
}
