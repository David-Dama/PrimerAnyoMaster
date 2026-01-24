# 1. Escribe una función que reciba una cadena de texto como parámetro y devuelva un diccionario con las frecuencias de cada letra en la cadena. Los espacios no deben ser considerados.

def contar_letras(texto):
    #Creamos un diccionario vacio
    letras = {}

    #Hacemos un blucle para recorrer todo el texto
    for letra in texto:
        if letra != " ": #Si es un espacio en blanco no lo guardamos
            if letra in letras:
                letras[letra] += 1 #Si la letra estaba guardada, +1
            else:
                letras[letra] = 1 #Sino, la guardamos con 1

    return letras

# 2. Dada una lista de números, obtén una nueva lista con el doble de cada valor. Usa la función map().

print(list(map(lambda x: x*2, lista)))

# 3. Escribe una función que tome una lista de palabras y una palabra objetivo como parámetros. La función debe devolver una lista con todas las palabras de la lista original que contengan la palabra objetivo.

def buscar_palabra(lista_palabras, palabra_buscar):
    lista_encontrados = [palabra for palabra in lista_palabras if palabra_buscar in palabra]

    return lista_encontrados

# 4. Genera una función que calcule la diferencia entre los valores de dos listas. Usa la función map().

def diferencia_valores(lista1, lista2):
    return list(map(lambda x, y: x - y, lista1, lista2))

# 5. Escribe una función que tome una lista de números como parámetro y un valor opcional nota_aprobado (por defecto 5). La función debe calcular la media de los números en la lista y determinar si la media es mayor o igual que nota_aprobado. Si es así, el estado será "aprobado"; de lo contrario, "suspenso". La función debe devolver una tupla que contenga la media y el estado.

def lista_alumos (notas, nota_aprobado=5):
    """Con el operador := guardamos la media, ya que asigna y compara en la misma linea,
       sum(notas) hace la suma de todas las notas guardadas en la lista y lo devidimos entre len(notas), que calcula el numero de notas que hay,
       , para la segunda parte de la tupla, y condicional"""
    return (media := sum(notas)/len(notas), "aprobado" if media >= nota_aprobado else "suspenso")

# 6. Escribe una función que calcule el factorial de un número de manera recursiva.

def calcular_factorial(num):
    #Ponemos como caso base el 0
    if num == 0:
        return 1
    else:
        return num * calcular_factorial(num - 1)

# 7. Genera una función que convierta una lista de tuplas a una lista de strings. Usa la función map().

def tuplas_a_string(lista):
    return list(map(lambda p: " ".join(p), lista))

# 8. Escribe un programa que pida al usuario dos números e intente dividirlos. Si el usuario ingresa un valor no numérico o intenta dividir por cero, maneja esas excepciones de manera adecuada y muestra un mensaje indicando si la división fue exitosa o no.

num1 = input("Ingrese el primer número: ")
num2 = input("Ingrese el segundo número: ")
try:
    num1 = float(num1)
    num2 = float(num2)
    print(num1/num2)
#Manejo de excepciones
except ZeroDivisionError:
    print("No se puede dividir por 0")
except ValueError:
    print("Debe ingresar únicamente numeros")

# 9. Escribe una función que tome una lista de nombres de mascotas como parámetro y devuelva una nueva lista excluyendo ciertas mascotas prohibidas en España. La lista de mascotas a excluir es ["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]. Usa la función filter().

def animales_permitidos(lista):
    lista_excluidos = ["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]
    return list(filter(lambda animal: animal not in lista_excluidos, lista))

# 10. Escribe una función que reciba una lista de números y calcule su promedio. Si la lista está vacía, lanza una excepción personalizada y maneja el error adecuadamente.

class ListaVaciaException(Exception):
    pass

def calcular_promedio(lista):
    if not lista:  # comprobamos si la lista está vacía
        raise ListaVaciaException("La lista no debe estar vacía")
    return sum(lista) / len(lista)

# Manejo del error
numeros = []

try:
    print(calcular_promedio(numeros))
except ListaVaciaException as e:
    print(f"Error: {e}")

# 11. Escribe un programa que pida al usuario que introduzca su edad. Si el usuario ingresa un valor no numérico o un valor fuera del rango esperado (por ejemplo, menor que 0 o mayor que 120), maneja las excepciones adecuadamente.

class EdadFueraDeRangoException(Exception):
    pass

edad = input("Introduzca su edad: ")

try:
    edad = int(edad)
except ValueError:
    print("Debe introducir un número")

try:
    if edad < 0 or edad > 120:
        raise EdadFueraDeRangoException("Edad fuera de rango")
except EdadFueraDeRangoException as e:
    print (f"{e}")
else:
    print(f"Su edad es {edad} años")

# 12. Genera una función que, al recibir una frase, devuelva una lista con la longitud de cada palabra. Usa la función map().

def longitud_de_palabras_lista(frase):
    palabras = frase.split()
    return list(map(len, palabras))

longitud_de_palabras_lista("Hola soy David")

# 13. Genera una función que, para un conjunto de caracteres, devuelva una lista de tuplas con cada letra en mayúsculas y minúsculas. Las letras no pueden estar repetida. Usa la función map().

def generar_tuplas_mayus_minus(lista):
    #Para limpiar en el caso de que estén duplicados, lo comvertimos en un set
    no_repetidas = set(lista)

    return sorted(list(map(lambda x: (x.upper(), x.lower()), no_repetidas)))

generar_tuplas_mayus_minus(["a", "b", "c"])

# 14. Crea una función que retorne las palabras de una lista que comiencen con una letra en específico. Usa la función filter().

def filtrar_por_primera_letra(lista, letra):
    letra = letra.upper()
    return list(filter(lambda x: x.upper().startswith(letra), lista))

filtrar_por_primera_letra(["Hola", "Holis", "Adios"], "a")

# 15. Crea una función lambda que sume 3 a cada número de una lista dada.

list(map(lambda x: x+3, [1, 2, 3]))

# 16. Escribe una función que tome una cadena de texto y un número entero n como parámetros y devuelva una lista de todas las palabras que sean más largas que n. Usa la función filter().

def mas_largas(frase, n):
    lista = frase.split()
    return list(filter(lambda x: len(x) > n, lista))

mas_largas("Hola me llamo David", 3)

# 17. Crea una función que tome una lista de dígitos y devuelva el número correspondiente. Por ejemplo, [5,7,2] corresponde al número 572. Usa la función reduce().

from functools import reduce

def juntar_lista(lista):
    return int(reduce(lambda acumulador, x: acumulador + str(x), lista, ""))

juntar_lista([1,2,3])

# 18. Escribe un programa en Python que cree una lista de diccionarios con información de estudiantes (nombre, edad, calificación) y use filter para extraer a los estudiantes con una calificación mayor o igual a 90.

def calificacion_mas_de_noventa(lista):
    return list(filter(lambda x: x.get("calificacion") >= 90, lista))

# 19. Crea una función lambda que filtre los números impares de una lista dada.

list(filter(lambda x: x % 2 == 1, [1,2,3,4,5]))

# 20. Para una lista con elementos de tipo integer y string, obtén una nueva lista solo con los valores int. Usa la función filter().

def tipo_int(lista):
    return list(filter(lambda x: type(x) == int, lista))

# 21. Crea una función que calcule el cubo de un número dado mediante una función lambda.

print((lambda x: x**3)(num))

# 22. Dada una lista numérica, obtén el producto total de los valores. Usa la función reduce().

from functools import reduce

def producto_total(lista):
    return int(reduce(lambda x, y: x*y, lista))

# 23. Concatena una lista de palabras. Usa la función reduce().

from functools import reduce

def concaternar_palabras(lista):
    return str(reduce(lambda x, y: x + y, lista))

# 24. Calcula la diferencia total en los valores de una lista. Usa la función reduce().

from functools import reduce

print(float(reduce(lambda x, y: x-y, lista)))

# 25. Crea una función que cuente el número de caracteres en una cadena de texto dada.

def contar_numero_caracteres(cadena):
    # Limpiamos la cadena de caracacteres de espacios en blanco
    cadena = cadena.replace(" ", "")

    #Usamos la funcion len para contar cuantos caracteres tiene
    return len(cadena)

# 26. Crea una función lambda que calcule el resto de la división entre dos números dados.

resto = lambda x, y: x % y

# 27. Crea una función que calcule el promedio de una lista de números.

def calcular_promedio(lista):
    return sum(lista) / len(lista)

# 28. Crea una función que busque y devuelva el primer elemento duplicado en una lista dada.

def primer_valor_duplicado(lista):
    guardar = set()
    for letra in lista:
        if letra in guardar:
            return letra
        else:
            guardar.add(letra)
    return "No hay valores duplicados"

# 29. Crea una función que convierta una variable en una cadena de texto y enmascare todos los caracteres con el carácter '#' excepto los últimos cuatro.

def variable_a_str_oculta(variable):
    variable = str(variable)

    #en el caso de que el tamaño sea 4, devolvemos la variable
    if len(variable) <= 4:
        return variable

    ocultar = len(variable) - 4

    #Ponemos el número de # calculados con ocultar y ponemos el final de la palabra utilizando la indexacion
    return ("#" * ocultar) + variable[-4:]

# 30. Crea una función que determine si dos palabras son anagramas, es decir, si están formadas por las mismas letras pero en diferente orden.

def son_anagramas(palabra1, palabra2):
    palabra1 = sorted(palabra1.lower())
    palabra2 = sorted(palabra2.lower())

    if palabra1 == palabra2:
        return "Son anagramas"
    else:
        return "No son anagramas"

# 31. Crea una función que solicite al usuario ingresar una lista de nombres y luego un nombre para buscar en esa lista. Si el nombre está en la lista, imprime un mensaje indicando que fue encontrado; de lo contrario, lanza una excepción.

class NoEncontradoException(Exception):
    pass

def buscar_nombre(lista, nombre):
    for i in lista:
        if nombre == i:
            return "Nombre encontrado"
    raise NoEncontradoException("Nombre no encontrado")

try:
    print(buscar_nombre(["David", "Rodrigo", "Javier"], "David"))
except NoEncontradoException as e:
    print(e)

# 32. Crea una función que tome un nombre completo y una lista de empleados, busque el nombre en la lista y devuelva el puesto del empleado si se encuentra; de lo contrario, devuelve un mensaje indicando que la persona no trabaja aquí.

def puesto_de_trabajo(diccionario, nombre):
    return diccionario.get(nombre, "No trabaja aquí")

# 33. Crea una función lambda que sume elementos correspondientes de dos listas dadas.
list(map(lambda x, y: x + y, lista1, lista2))

"""34. Crea la clase Arbol
    Define un árbol genérico con un tronco y ramas como atributos.
    Métodos disponibles: crecer_tronco, nueva_rama, crecer_ramas, quitar_rama, info_arbol.
    Código a seguir:
    Inicializar un árbol con un tronco de longitud 1 y una lista vacía de ramas.
    Implementar el método crecer_tronco para aumentar la longitud del tronco en una unidad.
    Implementar el método nueva_rama para agregar una nueva rama de longitud 1 a la lista de ramas.
    Implementar el método crecer_ramas para aumentar en una unidad la longitud de todas las ramas existentes.
    Implementar el método quitar_rama para eliminar una rama en una posición específica.
    Implementar el método info_arbol para devolver información sobre la longitud del tronco, el número de ramas y sus longitudes.

    Caso de uso:
        a. Crear un árbol.
        b. Hacer crecer el tronco una unidad.
        c. Añadir una nueva rama.
        d. Hacer crecer todas las ramas una unidad.
        e. Añadir dos nuevas ramas.
        f. Retirar la rama situada en la posición 2.
        g. Obtener información sobre el árbol."""

class Arbol:
    def __init__(self):
        self.longitud_tronco = 1
        self.ramas = []

    def crecer_tronco(self):
            self.longitud_tronco += 1

    def nueva_rama(self):
        self.ramas.append(1)

    def crecer_ramas(self):
        for i in range(len(self.ramas)):
            self.ramas[i] += 1

    """Hay dos formas de quitar una rama, una es pidiendo la rama que se desea quitar al usuario dentro de la propia función, y otra es pasando por parametro la rama que se desea quitar, por lo que se pide antes de hacer la llamada a la función, haré ambas aunque usaré la primera"""
    def quitar_rama_op1(self):
        if len(self.ramas):
            try:
                rama_a_quitar = input("Introduzca la rama que desea quitar:")
                self.ramas.pop(int(rama_a_quitar))
            except ValueError:
                print("Debes introducir un número")
            except IndexError:
                print("La posición no existe")
        else :
            print("No hay ramas que quitar")

    def quitar_rama_op2(self, rama_a_quitar):
        if 0 <= rama_a_quitar < len(self.ramas):
            self.ramas.pop(rama_a_quitar)
        else:
            print("Posición de rama no válida")


    def info_arbol(self):
        return f"La longitud del tronco es de {self.longitud_tronco}, el número de ramas es {len(self.ramas)} y el tamaño de las ramas es de {list(self.ramas)}"

#Creacion del arbol
ar = Arbol()
print(ar.info_arbol())

#Crecer el tronco
ar.crecer_tronco()
print(ar.info_arbol())

#Añadir rama
ar.nueva_rama()
print(ar.info_arbol())

#Crecer ramas
ar.crecer_ramas()
print(ar.info_arbol())

#2 ramas nuevas
ar.nueva_rama()
ar.nueva_rama()
print(ar.info_arbol())

#Quitar rama 2
ar.quitar_rama_op1()
print(ar.info_arbol())

"""Ya he hecho la salida de información del árbol después de cada llamada para comprobar que las funciones hacen su cometido"""

"""35. Crea la clase UsuarioBanco
    Representa a un usuario de un banco con su nombre, saldo y si tiene o no cuenta corriente.
    Métodos: retirar_dinero, transferir_dinero, agregar_dinero.

    Código a seguir:
    Inicializar un usuario con nombre, saldo y un indicador (True o False) de cuenta corriente.
    Implementar retirar_dinero para sustraer dinero del saldo, lanzando un error si no es posible.
    Implementar transferir_dinero para transferir dinero desde otro usuario, lanzando un error en caso de fallo.
    Implementar agregar_dinero para aumentar el saldo del usuario.

    Caso de uso:
        a. Crear dos usuarios: "Alicia" con saldo inicial de 100 y "Bob" con saldo inicial de 50, ambos con cuenta corriente.
        b. Agregar 20 unidades al saldo de Bob.
        c. Transferir 80 unidades de Bob a Alicia.
        d. Retirar 50 unidades del saldo de Alicia."""

class RetirarDineroException(Exception):
    pass

class UsuarioBanco:
    def __init__(self, nombre, saldo, cuenta_corriente):
        self.nombre = nombre
        self.saldo = saldo
        self.cuenta_corriente = cuenta_corriente

    #Retirar dinero y aumentar dinero es igual que las de retirar_rama del ejercicio anterior, esta vez unicamente haré la opción uno
    def retirar_dinero(self):
        try:
            saldo_a_retirar = float(input("Ingrese cuanto saldo desea retirar:"))
        except ValueError:
            print("Por favor, introduce un número válido (para decimales utilizar el '.').")
        else:
            if self.saldo > saldo_a_retirar:
                self.saldo -= saldo_a_retirar
            else:
                raise RetirarDineroException(f"No puedes retirar más dinero del que tienes. Su saldo es de {self.saldo}")

    def aumentar_dinero(self, dinero_a_aumentar = -1):
        if dinero_a_aumentar == -1:
            try:
                dinero_a_aumentar = float(input("Ingrese el dinero a aumentar: "))
            except ValueError:
                print("Por favor, introduce un número válido (para decimales utilizar el '.').")
            else:
                if dinero_a_aumentar < 0:
                    print("Debes de intorducir un número mayor que 0")
                else:
                    self.saldo += dinero_a_aumentar
        else:
            self.saldo += dinero_a_aumentar

    def transferir_dinero(self, persona_a_transferir):
        try:
            dinero_a_transferir = float(input("Ingrese el dinero a aumentar: "))
        except ValueError:
            print("Por favor, introduce un número válido (para decimales utilizar el '.').")
        else:
            if self.saldo > dinero_a_transferir:
                self.saldo -= dinero_a_transferir
                persona_a_transferir.aumentar_dinero(dinero_a_transferir)
            else:
                raise RetirarDineroException(f"No puedes retirar más dinero del que tienes. Su saldo es de {self.saldo}")

#Creamos dos usuarios
Alicia = UsuarioBanco("Alicia", 100, True)
Bob = UsuarioBanco("Bob", 50, True)

#Agregar 20 a Bob
Bob.aumentar_dinero()

#Transferimos 20 a Alicia desde la cuenta de Bob
try:
    Bob.transferir_dinero(Alicia)
except RetirarDineroException as e:
    print(e)
#Quitar 50 a Alicia
try:
    Alicia.retirar_dinero()
except RetirarDineroException as e:
    print(e)

"""36. Crea una función llamada procesar_texto
        Procesa un texto según la opción especificada: contar_palabras, reemplazar_palabras o eliminar_palabra.

        Código a seguir:
            Crear una función contar_palabras que cuente el número de veces que aparece cada palabra en el texto y devuelva un diccionario.
            Crear una función reemplazar_palabras para sustituir una palabra_original por una palabra_nueva en el texto y devolver el texto modificado.
            Crear una función eliminar_palabra que elimine una palabra del texto y devuelva el texto sin ella.
            Crear la función procesar_texto que reciba un texto, una opción ("contar", "reemplazar", "eliminar") y un número variable de argumentos según la opción elegida.

        Caso de uso:
            Verificar el funcionamiento completo de procesar_texto."""
#Como apreciación, sería una buena práctica crear una función llamada limpiar_texto que limpie y pase el texto a una lista, ya que se repite esa línea de código en las tres funciones

class FueraDeRangoException(Exception):
    pass

def procesar_texto():
    #Inicializamos op en 4 para entrar en el primer condicional del while y en el propio while e inicializamos la variable texto en None
    texto = None
    op = 4
    while 1 <= op < 5:

        #Pedimos el texto si el usuario desea cambiar este
        if op == 4:
            texto = str(input("Introduzca un texto:"))

        #Pedimos que escoja una opción del menú, y en el caso de que no introduzca un número o introduzca un número fuera de rango, lanzamos una excepción
        try:
            op = int(input("Escoja una opción:\n\t1. Contar palabras\n\t2. Reemplazar palabras\n\t3. Eliminar palabras\n\t4. Cambiar texto\n\t5. Salir\n\n"))
            if not (1 <= op <= 5):
                raise FueraDeRangoException("El número debe de estar entre 1 y 5")
        except ValueError:
            print("Únicamente se pueden introducir números")
        except FueraDeRangoException as e:
            print(e)
        else: #Usamos el else para no seguir con el codigo en caso de excepcion
            #Condicionales para llamar a una u otra función dependiendo de lo que el usuario desee
            if op == 1:
                print(contar_palabras(texto))
            elif op == 2:
                palabra_original = str(input("Introduzca la palabra que desea reemplazar:"))
                palabra_nueva = str(input("Introduzca la palabra por la que desea reemplazar:"))
                texto = reemplazar_palabras(texto, palabra_original, palabra_nueva)
                print(texto)
            elif op == 3:
                palabra_eliminar = input("Introduzca la palabra a eliminar:")
                texto = eliminar_palabras(texto, palabra_eliminar)
                print(texto)
            elif op == 5:
                print("Cerrando...")


def contar_palabras(texto):
    #Creamos un diccionario vacío
    dicc = {}

    #Con la función split dividimos el texto en un array de strings, pero antes eliminamos los caracteres especiales más comunes con la función replace
    texto = texto.replace(",", "").replace(".", "").split()

    #Con un bucle for recorremos la lista creada y con la misma idea del ejercicio 1, si no encontramos una clave con esa palabra la creamos y si la encontramos sumamos 1
    for i in texto:
        if i in dicc:
            dicc[i] += 1
        else:
            dicc[i] = 1

    return dicc

def reemplazar_palabras(texto, palabra_original, palabra_nueva):
    #Limpiamos el texto y lo convertimos en una lista
    texto = texto.replace(",", "").replace(".", "").split()

    #Recorremos la lista, si encontramos la palabra la reemplazamos
    for i in range(len(texto)):
        if texto[i] == palabra_original:
            texto[i] = palabra_nueva


    #Devolvemos el texto unido
    return " ".join(texto)


def eliminar_palabras(texto, palabra_eliminar):
    #Limpiamos el texto y lo convertimos en una lista
    texto = texto.replace(",", "").replace(".", "").split()

    #Recorremos la lista, si encontramos la palabra la borramos
    texto = [palabra for palabra in texto if palabra != palabra_eliminar]

    #Devolvemos el texto unido
    return " ".join(texto)


#Iniciar el programa
procesar_texto()

# 37. Genera un programa que nos indique si es de noche, de día o de tarde según la hora proporcionada por el usuario.

import datetime

try:
    hora = int(input("Introduce la hora (0-23): "))

    if not 0 <= hora <= 23:
        print("Hora fuera de rango")
    elif 0 <= hora <= 5 or 21 <= hora <= 23:
        print("Es de noche")
    elif 6 <= hora <= 13:
        print("Es de día")
    else:
        print("Es de tarde")

except ValueError:
    print("Debes introducir un número entero")

""" 30. Escribe un programa que determine qué calificación en texto tiene un alumno según su calificación numérica.
    Reglas:
        0 - 69: insuficiente
        70 - 79: bien
        80 - 89: muy bien
        90 - 100: excelente"""

def calificacion(nota):
    if 0 <= nota <= 69:
        return "Insudiciente"
    elif 70 <= nota <= 79:
        return "Bien"
    elif 80 <= nota <=89:
        return "Muy bien"
    elif 90<= nota <= 100:
        return"Excelente"
    else:
        return "Número fuera de rango"

# 39. Escribe una función que tome dos parámetros: figura (una cadena que puede ser "rectangulo", "circulo" o "triangulo") y datos (una tupla con los datos necesarios para calcular el área de la figura).

import math

def calcular_area(figura, datos):
    if figura == "cuadrado":
        lado, = map(float, datos)
        return lado * lado
    elif figura == "rectangulo":
        base, altura = map(float, datos)
        return base * altura
    elif figura == "triangulo":
        base, altura = map(float, datos)
        return (base * altura) / 2
    elif figura == "circulo":
        radio, = map(float, datos)
        return math.pi * radio**2
    else:
        print("Figura no válida")
        return None

"""40. Escribe un programa en Python que utilice condicionales para determinar el monto final de una compra en una tienda en línea, después de aplicar un descuento. El programa debe:
    a. Solicitar al usuario el precio original de un artículo.
    b. Preguntar si tiene un cupón de descuento (respuesta sí o no).
    c. Si la respuesta es sí, solicitar el valor del cupón de descuento.
    d. Aplicar el descuento al precio original, siempre que el valor del cupón sea válido (mayor a cero).
    e. Mostrar el precio final de la compra, considerando o no el descuento.
    f. Usar estructuras de control de flujo (if, elif, else) para llevar a cabo las acciones."""

def solicitud_de_precio():
    while True:
        try:
            precio = float(input("Introduzca el precio original del artículo: "))
            if precio <= 0:
                raise FueraDeRangoException("El producto no puede tener un precio negativo o igual a 0")
            break
        except ValueError:
            print("Introduzca un número decimal.")
    return precio

def solicitar_descuento():
    while True:
        respuesta = input("¿Tiene descuento? (si o no): ").lower()
        if respuesta == "si":
            try:
                descuento = float(input("Introduzca el descuento (%): "))
                if 0 < descuento <= 100:
                    return descuento
                else:
                    print("El valor del cupón debe estar entre 0 y 100 (0 no incluido).")
            except ValueError:
                print("Introduzca un número válido.")
        elif respuesta == "no":
            return 0
        else:
            print("Debe introducir únicamente 'si' o 'no'.")

def aplicar_descuento(precio, descuento):
    return precio * (1 - descuento / 100)

def mostrar_info(precio, descuento, precio_descontado):
    print(f"El precio inicial del producto es de: {precio}\n"
          f"El precio con descuento es de {precio_descontado}\n"
          f"El descuento era de {descuento}")

#APP
try:
    precio = solicitud_de_precio()
    descuento = solicitar_descuento()
except FueraDeRangoException as e:
    print(e)
else:
    precio_descontado = aplicar_descuento(precio, descuento)
    mostrar_info(precio, descuento, precio_descontado)