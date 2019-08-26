# Restaurant Review App Project

## Table of Contents

* [Project Overview: Stage 1](#project-overview)
* [Getting Started](#getting-started)
* [Leaflet.js and Mapbox](#leaflet-and-mapbox)
* [Note about ES6](#note-about-ES6)
* [Author](#author)
* [Acknowledgement](#acknowledgement)

<a name="project-overview"></a>
## Project Overview: Stage 1

For the **Restaurant Reviews** projects, incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

<a name="getting-started"></a>
### Getting Started

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. Visit the site: `http://localhost:8000`


<a name="leaflet-and-mapbox"></a>
## Leaflet.js and Mapbox

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

<a name="note-about-ES6"></a>
### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code.

<a name="author"></a>
## Author

Shafeeza Hussain

<a name="acknowledgement"></a>
## Acknowledgement

Tutorials from Udacity, w3schools, Mozilla developer documentations and a tutorial from https://www.youtube.com/watch?v=ksXwaWHCW6k&list=WL&index=2&t=742s were very helpful.
