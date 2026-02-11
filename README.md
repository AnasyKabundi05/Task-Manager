# Task Manager – Docker Introduction

This is my **beginner project** for learning Docker. It's a simple task management web application built with **Node.js**, **Redis**, and **Nginx**, fully containerized using **Docker** and **Docker Compose**.  

I created this project to explore how to run a multi-container application with a frontend, backend, and database.

---

## Tech Stack

- **Frontend:** Nginx serving static HTML/JS  
- **Backend:** Node.js API (`server.js`)  
- **Database:** Redis  
- **Containerization:** Docker & Docker Compose  

---

## Features

- Add, view, and clear tasks  
- Frontend served through Nginx  
- Backend API accessible via `/api`  
- Health check endpoint at `/health`  
- Fully containerized – easy to start with `docker compose up`  

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)  
- [Docker Compose](https://docs.docker.com/compose/install/)  

### Clone the Repository

```bash
git clone https://github.com/AnasyKabundi05/task-manager.git
cd task-manager

task-manager/
│
├─ backend/          # Node.js API code
│   └─ server.js
├─ frontend/         # Frontend HTML/JS and Nginx config
│   ├─ index.html
│   └─ nginx.conf
├─ docker-compose.yml
└─ README.md
Troubleshooting

Frontend shows “Cannot GET /api” – Ensure the backend container is running and healthy.

Ports already in use – Stop other services using ports 80 or 3000.

Containers restart repeatedly – Check docker compose logs for errors.
