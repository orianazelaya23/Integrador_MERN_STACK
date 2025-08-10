# 📦 API REST - Gestión de Órdenes de Logística

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **MongoDB** para gestionar órdenes de logística.  
Permite **crear, listar, filtrar, actualizar y eliminar órdenes**, con validación de estado.

---

## 🚀 Características

- **CRUD completo** de órdenes (Create, Read, Update, Delete).
- **Filtrado por estado** (`Pendiente`, `En transito`, `Entregado`) usando parámetros de consulta (query params).
- **Validación de datos** con `mongoose` y uso de `enum` para restringir el estado.
- **Conexión a MongoDB** mediante Mongoose.

---

## 📂 Estructura del proyecto    
```plaintext
/mi-proyecto
├── app.js # Punto de entrada del servidor
├── /models
│ └── ordenmodel.js # Modelo Mongoose de Órdenes
├── /routes
│ └── ordenes.js # Rutas y controladores de órdenes
├── /config
│ └── db.js # Configuración y conexión a MongoDB
└── package.json



## 🛠️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/) (desarrollo)



## 📦 Instalación y uso

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo


2. **instalar dependencias**

npm init -y
npm install express mongoose
npm install --save-dev nodemon

Inicializar MongoDB en cmd mongod


3. **Configurar conexión a MongoDB**

await mongoose.connect("mongodb://localhost:27017/dbGestorOrdenesLogistica");



4. **Iniciar el servidor**
npm run dev   # con nodemon
http://localhost:3000


📌 Endpoints

Crear una orden
POST /ordenes
{
    "destino": "Buenos Aires",
    "contenido": "Electrodomésticos",
    "estado": "Pendiente"
}

Listar todas las órdenes
GET /ordenes

Filtrar por estado
GET /ordenes?estado=Pendiente

Obtener una orden por ID
GET /ordenes/:id

Actualizar una orden
PUT /ordenes/:id
Body (JSON):

{
    "estado": "Entregado"
}

Eliminar una orden
DELETE /ordenes/:id


 🧪 Datos de prueba
{
    "destino": "Córdoba",
    "contenido": "Ropa y accesorios",
    "estado": "En transito"
}

---
## **Créditos**
Desarrollado por [Oriana Olea Zelaya]

