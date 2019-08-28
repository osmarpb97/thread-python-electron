<div align="center">
  <h1>Electron-Python App</h1>
</div>

<div align="center">
  <strong>Desktop app whit CORE on python and GUI made whit Electron.js </strong>
</div>

<br>

## Table of Contents
- [Instalación](#install)



## Prerequisitos
Before executing this project, you will need to install additional software on your computer.

## Python 3
The project requires Python 3.6 or higher. A version compatible is pre-installed with most of Linux systems .If this is not the case, consult the documentation of your distribution and the instructions for installing Python 3.6 or 3.7.

<h1 id="install" >Installation</h1>

#### 1. Clone the repository (or use your own fork):

```sh
$ git clone https://github.com/osmarpb97/thread-python-electron.git
```
#### 2. Enter the directory
```sh
    cd GUI
```
#### 3. Install all dependencies:

```sh
    npm install
```


#### 4. Define the environment variables.
For reasons of time, the script works by exporting UTF8 so in the terminal we export UTF8 for python.

```sh
    export PYTHONIOENCODING=utf8
```
#### 5. We create a json for data management:
At this moment we have a bug in electron that does not allow pass thread messages to the GUI as well as
the creation of files with the script, so we execute it manually, which will create data.json to graph the GUI.

```sh
    cd ../Core/
    python3 libros_threand.py
```

#### 6. Iniciamos la GUI :

```sh
    cd ../GUI/
    npm start
```

#### Crafted with ❤️ by [Osmar Pérez] for ESCOM
osmar@ixtlan.dev
<br>