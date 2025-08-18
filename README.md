# Fullstack Azure Task App

This is a **Full-Stack Azure Task application** deployed on **Azure App Service** using **Docker containers**.  

The project consists of:

- **Frontend:** HTML, CSS,  served via Nginx container  
- **Backend:** Python Flask API with CORS enabled  
- **Dockerized:** Separate Dockerfiles for frontend and backend  
- **Deployment:** Images pushed to **Azure Container Registry (ACR)** and deployed via **App Service**  

The frontend dynamically connects to the backend API using environment configuration. This setup allows for a scalable full-stack application fully hosted on Azure.  

---

## Project Structure

azure_fullstack_app/
├─ frontend/ # Frontend code and Dockerfile
├─ backend/ # Backend API and Dockerfile

---

## Features

- Add and delete tasks via a web interface  
- Backend API serves tasks and supports ping check  
- Fully containerized and deployable on Azure App Service  
- Environment configuration allows dynamic backend URL for the frontend  

---

## Author

**Shravani Samal**
