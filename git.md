markdown


git
Software
Controlar versiones

->commit
    Puntos de guardado en el historial de nuestro proyecto


->branch / ramas
    Versiones alternativas de nuestro proyecto

Repositorio -> Carpeta donde se encuentran todos los cambios, el historial completo y todas las versiones de nuestro proyecto

Repositorios locales -> almacenados en nuestra computadora

working directory -> Cambios hechos en el proyecto
staging area -> Los cambios se preparan para ser añadidos al repositorio local
repositorio -> Lugar donde se almacenan los cambios




-----COMANDOS-----
git init :  Inicializa un repositorio vacio. Crea una carpeta oculta en el proyecto llamada '.git'
git status : Nos da información sobre el estado del repositorio
git add -A : Añade TODOS los archivos que se encuentren en el working directory al staging area
git commit -m "mensaje de commit": Genera un commit. Guarda todo lo que se encuentra en el staging area en el repositorio local
git checkout -b "nombre-rama": Crea una nueva rama con el nombre señalado y nos mueve hacia ella
git checkout "rama" : Nos mueve hacia la rama señalada. Guardar modificaciones antes.
git branch -a : Lista TODAS las ramas
git merge "rama-origen": Trae todos los cambios que haya en la rama de origen hacia la rama de destino. NOTA: Debemos encontrarnos 'parados' en la rama hacia la cual queremos traer los cambios
git log : Nos muestra un listado con los diferentes commits realizados
git reset --soft "id-commit" : Deshace los commits posteriores a el commit señalado. Los cambios que se encontraban en el repositorio regresan al staging area
git reset --mixed "id-commit" : Deshace los commits posteriores a el commit señalado. Los cambios que se encontraban en el repositorio regresan al working directory
git reset --hard "id-commit" : Deshace los commits posteriores a el commit señalado. Los cambios que se encontraban en el repositorio se eliminan


git remote add origin urlRepositorioRemoto : Establece un repositorio remoto de destino
git push -u origin main : Define la rama remota de destino y sube cambios en el repositorio local
git push : Sube cambios al repositorio remoto desde el repositorio local
git fetch : Baja cambios desde el repositorio remoto hacia el repositorio local 

git stash : Guarda cambios temporalmente que aun no estamos listos para 'commitear'


git config --global user.email "you@example.com"
git config --global user.name "Your Name"

github
Plataforma
