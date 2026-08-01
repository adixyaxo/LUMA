# Luma (Lame Unified Messaging Application)

> A modern, lightweight, real-time messaging platform built with Python and designed around simplicity, performance, and extensibility.

---

# Vision

Luma (Lame Unified Messaging Application) is an open-source real-time messaging application built as a learning-focused yet production-inspired project. The goal is to understand the engineering principles behind modern messaging platforms by building every core component from scratch.

Unlike a simple CRUD application, Luma aims to explore topics such as:

- Real-time communication
- Authentication & Authorization
- Database design
- WebSockets
- Redis
- Asynchronous programming
- Scalable backend architecture
- Clean UI/UX
- Production-ready software engineering practices

The project begins as a one-to-one messaging application and is intentionally designed to evolve into a more feature-rich communication platform.

---

# Project Goals

- Learn backend engineering through a real-world application.
- Design a scalable MongoDB database.
- Build a complete FastAPI application.
- Learn Redis and WebSocket communication.
- Develop a clean server-rendered frontend using HTMX.
- Follow production-inspired software architecture.
- Keep the project open-source and community-friendly.

---

# Technology Stack

## Backend

- Python
- FastAPI
- MongoDB
- Redis
- Motor (Async MongoDB Driver)
- Pydantic
- JWT Authentication
- WebSockets

---

## Frontend

- HTMX
- Jinja2 Templates
- Tailwind CSS
- Vanilla JavaScript (only where necessary)

---

## Deployment (Planned)

- Docker
- Nginx
- Linux
- GitHub Actions (Future)

---

# Why HTMX Instead of React?

Originally, React was considered for the frontend.

After evaluating the project scope, HTMX was chosen because the project's primary objective is backend engineering rather than frontend framework expertise.

Benefits include:

- Faster development
- Smaller learning curve
- Tight FastAPI integration
- Minimal JavaScript
- Server-driven rendering
- Easier debugging
- Better focus on backend architecture

The backend API will remain independent so that a React frontend can be developed later without changing the server architecture.

---

# Target Scale

## Registered Users

100,000

## Monthly Active Users

50,000

## Concurrent Users

10,000

## Expected Daily Active Users (Initial)

~1,000

## Expected Daily Messages

10,000–100,000

The architecture is designed with future scalability in mind rather than only supporting the initial workload.

---

# Current MVP Scope

## User Authentication

- User registration
- Login
- JWT Authentication
- Refresh Tokens
- OAuth (Future)
- Email/Phone OTP (Planned)

---

## Messaging

- One-to-one messaging
- Edit messages
- Soft delete messages
- Reply to messages
- Forward messages
- Emoji support

---

## Conversations

- Multiple conversations per user
- Archive chats
- Block users

---

## Not Included in MVP

- Group chats
- Broadcast channels
- Voice messages
- File sharing
- Read receipts
- Typing indicators
- Online presence
- Last seen
- Attachments
- Message search

These features are intentionally postponed to keep the MVP focused and maintainable.

---

# Security

## Authentication

- JWT Access Tokens
- JWT Refresh Tokens

Current Token Lifetime:

- Access Token: 1 Day
- Refresh Token: 30 Days

---

## Password Storage

Passwords are **never stored in plaintext**.

A dedicated password hashing algorithm (such as Argon2 or bcrypt) should be used instead of general-purpose hashing algorithms.

---

## Authorization Levels

The system currently defines four authorization levels:

1. User
2. Restricted User
3. Banned User
4. Administrator

---

## Anti-Spam Strategy

Initial ideas include:

- Unknown users can send a limited number of messages.
- Message rate limiting.
- Temporary cooldowns.
- Escalating restrictions for repeated abuse.
- Permanent bans for severe abuse.

---

# Functional Requirements

Users should be able to:

- Register
- Login
- Start conversations
- Send messages
- Edit messages
- Delete messages (Soft Delete)
- Reply to messages
- Forward messages
- Archive conversations
- Block users

---

# Non-Functional Requirements

- Secure authentication
- Scalable architecture
- Low latency
- Asynchronous communication
- Maintainable codebase
- Modular architecture
- Production-inspired project structure
- Open-source friendly

---

# Frontend Pages

## Public Pages

- Home
- About
- Contributions
- Login
- Signup

---

## Authenticated Area

Dashboard

The dashboard follows a three-column layout.

```
┌────────────────────────────────────────────────────────────────────┐
│ Conversation List │ Active Conversation │ Profile / Settings Dock │
└────────────────────────────────────────────────────────────────────┘
```

### Left Sidebar

Contains:

- Conversation list
- Recent chats
- Future search functionality

---

### Center Panel

Contains:

- Current conversation
- Message history
- Message composer

---

### Right Dock

Contains:

- Profile
- Settings

Future additions may include:

- Theme settings
- Account management
- Logout
- Preferences

---

# Backend Architecture

```
Browser
      │
   HTMX
      │
FastAPI + Jinja2
      │
Redis
      │
MongoDB
```

The server is responsible for rendering HTML fragments while Redis supports real-time communication and caching.

---

# Database Philosophy

The database is designed around independent entities rather than embedding large documents.

Current primary entities include:

## User

Responsible for:

- Identity
- Authentication
- User information
- Block lists

---

## Conversation

Responsible for:

- Conversation metadata
- Participants

---

## Message

Responsible for:

- Message content
- Sender
- Timestamp

The schema is expected to evolve as the frontend and backend mature.

---

# Design Philosophy

Luma is intentionally being developed iteratively.

Instead of attempting to design the perfect architecture upfront, the workflow follows:

```
Requirements
      ↓
UI / UX
      ↓
Database
      ↓
Backend
      ↓
Refactoring
```

Frontend development is expected to expose missing backend requirements and improve the overall database design.

---

# Engineering Principles

The project prioritizes:

- Simplicity over unnecessary complexity
- Iterative development
- Backend-first engineering
- Clean architecture
- Separation of concerns
- Scalability
- Maintainability
- Extensibility
- Security by design

---

# Future Roadmap

## Phase 1

- Beautiful UI
- Authentication
- Dashboard

---

## Phase 2

- One-to-one messaging
- WebSockets
- Redis integration

---

## Phase 3

- Production improvements
- Logging
- Rate limiting
- Monitoring
- Docker deployment

---

## Phase 4

- Groups
- Attachments
- Notifications
- Search
- Read receipts
- Typing indicators

---

## Phase 5

- React frontend
- Mobile client
- API expansion

---

# Open Source

Luma is an open-source educational project focused on learning modern backend engineering through the implementation of a real-world messaging platform.

Contributions, suggestions, issue reports, and architectural discussions are encouraged.

---

# Project Status

**Current Status:** 🚧 In Active Development

The project is currently focused on:

- Finalizing the frontend architecture
- Refining the database model
- Building the FastAPI backend
- Implementing authentication
- Preparing for real-time messaging

---

# License

License to be decided.