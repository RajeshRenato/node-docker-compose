# 🥪 Docker Compose Explained Like You're Five

A simple guide to understanding Docker Compose using a sandwich-making analogy. This repository contains the companion code for the [blog post](https://dev.to/rajeshrenato).

## 🚀 Demo App

A simple message board application showing Docker Compose in action:
- Frontend served by Nginx
- Node.js API with Express
- MongoDB for data storage

### Prerequisites 🛠️

Make sure you have these installed:
- Docker Desktop ([Download](https://www.docker.com/products/docker-desktop/))
- Docker Compose (Included in Docker Desktop)

To verify installation:
```bash
docker --version
docker-compose --version
```

### Quick Start

1. Clone this repository:
```bash
git clone https://github.com/RajeshRenato/node-docker-compose
cd node-docker-compose
```

2. Start the application:
```bash
docker-compose up
```

3. Visit http://localhost:8080

That's it! 🎉

### What's Inside?

```
node-docker-compose/
├── docker-compose.yml    # The main recipe
├── website/             # Frontend files
├── api/                # Node.js API
└── nginx.conf         # Nginx configuration
```

## 🤔 Want to Learn More?

Check out these topics in our blog post:
- Basic Docker Compose concepts
- Common commands and best practices
- Troubleshooting tips

## 💬 Questions or Suggestions?

- Open an issue for questions
- Create a PR to suggest improvements
- Comment on the blog post for discussions

---
Made with ❤️ to help you understand Docker Compose 