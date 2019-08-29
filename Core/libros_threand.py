import sys,time,json,queue,threading,glob,os


def guardarDatos(f):
  def wrapper(*args):
    datos.put(f(*args))
  return wrapper

@guardarDatos
def buscar_palabra_en_diccionario(nombre_libro,diccionario):
    contador={}
    with open(nombre_libro,encoding="utf-8") as archivo:#Abrimos el archivo
      for palabra_buscar in diccionario:
        contador[palabra_buscar]=0  
      for linea in archivo:#Linea por linea
        palabras= str(linea).split()
        for palabra in palabras:
          if (palabra in diccionario):
            contador[palabra]+=1
      
    return contador#Retrona un diccionario con la palabra y el numero de veces que se repite

   
datos = queue.Queue()
palabras=['or','on','regalos','besos','cachondeo','delicioso','compañia','confianza','comunicación','pasión','apoyo']
path = './libros/'#Path de la ruta 
numero_hilos=len(glob.glob(os.path.join(path, '*.txt')))
hilo = [None]*numero_hilos
abc=[None]*numero_hilos
for it,filename in enumerate(glob.glob(os.path.join(path, '*.txt'))):#Solo txt
  hilo[it]= threading.Thread(name="Hilo: %s" %it,target=buscar_palabra_en_diccionario,args=(filename,palabras))
  hilo[it].start()
  
for it,filename in enumerate(glob.glob(os.path.join(path, '*.txt'))):
  hilo[it].join()
  abc[it]=datos.get()

with open('data.json','w', encoding='utf-8') as f:
  json.dump(abc, f, ensure_ascii=False, indent=4)
  print("Termine")
sys.stdout.flush()   



    
