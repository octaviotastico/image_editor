# NocheEnCordoba-Frontend

	Comproba todo lo que esta escrito y cambia lo que este mal o se pueda mejorar. No des nada por verdadero sin comprobarlo primero.


# Descargar y abrir:

	$ git clone https://gitlab.com/Los15DelFamaf/NocheEnCordoba-Frontend
	$ cd NocheEnCordoba-Frontend
	$ sudo npm install
	$ sudo react-native run-android


# Comandos:

	Instalar node_modules (despues de clonar hace falta): sudo npm install

	Instalar un paquete: npm install nombre@version (-s: save, -g: global) ejemplo: 'sudo npm install --save react-native-vectorial-icons'

	Compilar y correr: react-native run-android

	Iniciar servidor: react-native start


# Archivos: (algunos)

	package.json -> contiene los paquetes que se quieren o ya se instalaron por el npm con sus versiones, si se edita tenes que correr 'npm install'

	Carpetas:

		App -> archivos que se pueden editar
			Components -> Componentes que son o no 'tontos'
				-> Cada componente tiene su propia carpeta con sus archivos tales como el componente en si y sus estilos. Luego se exportan el el index.
			navigation -> Contenedores de navegaciones
			screens -> Contenedores de componentes
			stores -> Stores de mobx o estados
			theme -> Todas las constantes de estilos (colores, medidas, etc.)
			services -> funciones auxiliares



# Node.js

	Pagina oficial:
	https://nodejs.org/en/


# React-native:

	Documentacion oficial:
	https://facebook.github.io/react-native/

	Videos:
	Hay por todos lados


# React-navigation: Navegacion

	Documentacion oficial:
	https://reactnavigation.org/docs/en/getting-started.html

	Videos:
	https://www.youtube.com/watch?v=ocnxJtZ6JOg&list=PLy9JCsy2u97nMDX-_YM6gaDcRREEqkuA0


# MobX: State Management

	Documentacion oficial:
	https://mobx.js.org
	https://github.com/mobxjs/mobx-react

	Videos:
	https://www.youtube.com/watch?v=ZAVSxBXnTr4
	https://www.youtube.com/watch?v=snBvYS6eC2E

	Mas:
	(Piola para entenderlo) https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254 (Ingles)


# React-native-elements: Componentes UI

	Documentacion oficial:
	https://github.com/react-native-training/react-native-elements

	Prueba de componentes (Con expo):
	https://expo.io/@monte9/react-native-elements-app

	Documentacion componentes:
	https://react-native-training.github.io/react-native-elements/docs/0.19.0/overview.html


# Native-base: Componentes UI (Usando)

	Documentacion oficial:
	https://nativebase.io

	Prueba de componentes (con expo):
	https://expo.io/@geekyants/nativebasekitchensink

	Documentacion de componentes:
	https://docs.nativebase.io/Components.html#ref-components-headref


# React-native-vector-icons:

	https://github.com/oblador/react-native-vector-icons

	$ sudo npm install --save react-native-vector-icons
	$ sudo react-native link react-native-vector-icons

	Buscador de iconos: https://oblador.github.io/react-native-vector-icons/


# React-native-easy-grid

	https://github.com/GeekyAnts/react-native-easy-grid


# React Native Debugger:

	https://github.com/jhen0409/react-native-debugger
	
# Versiones de Java

    Comando para administrar las versiones instaladas: sudo update-alternatives --config java
    Pagina recomendada: https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04

# Lo que falta:

	* Orden de las carpetas, hacer y documantar
	* Como hacer API request
	* Usar y dar ejemplo de todo
	* Hacer UI simple
	* Implementar API (Todavia no esta)

# Errores que siempre me pasan:

	> SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable
		Solucion:
			$ nano ./android/local.properties
			y le pones la direccion del Sdk con 'sdk.dir=', generelmente
			Linux-> sdk.dir = /home/usuario/Android/Sdk
			macOS-> sdk.dir = /Users/usuario/Library/Android/sdk
			Windows-> sdk.dir = C:/Users/USERNAME/AppData/Local/Android/sdk
			cambiando usuario

	> Algo se estaba ejecutando
		Solucion:
			$ sudo lsof -i :8081
			Va a aparecer una lista y buscas el PID del proceso que queres asesinar
			$ kill -9 PID

	Otra posible solucion:
		https://facebook.github.io/react-native/docs/running-on-device.html

	> A non-recoverable condition has triggered.  Watchman needs your help!
		The triggering condition was at timestamp=1407695600: inotify-add-watch(/my/path) -> Cannot allocate memory
		All requests will continue to fail with this message until you resolve
		the underlying problem.  You will find more information on fixing this at
		https://facebook.github.io/watchman/docs/troubleshooting.html#poison-inotify-add-watch

	Reinicia watchman:
		$ watchman watch-del-all
		$ watchman shutdown-server

	Aumentar limite a watcham:
		$ sudo sysctl fs.inotify.max_user_watches
		--Eso devuelve un numero y hay que ponerle mas--
		$ sudo sysctl fs.inotify.max_user_watches=NUMEROMASGRANDE
		
	Otra solucion:
	    $ echo fs.inotify.max_user_instances=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
	    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
	    $ echo fs.inotify.max_queued_events=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
	    

	Conectar adb:
		$ adb reverse tcp:8081 tcp:8081
		
#Abrir emulador android desde terminal:

    Abrir terminal en ~/Android/sdk/tools 
    Para poder ver que emuladores tengo disponibles:
    $ emulator -list-avds
    Para correr emulador
    $ emulator @EMULATORNAME
    APRETAR R dos veces para recargar la app
    Ctrl + M para opciones (iniciar debugger, dev settings, etc)
    Mas informacion en: https://developer.android.com/studio/run/emulator-commandline 
    ---------------------------------------------------------------------------------
    Para cuando corro la aplicacion desde el cel
    adb shell input text "RR" // con esto recargo desde terminal
    -------------------------------------------------------------------
    https://stackoverflow.com/questions/7789826/adb-shell-input-events
    

#DOCUEMTA TODO NO SEAS CULIADO

