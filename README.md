
# Fitness Progress Tracker API

## Overview

The Fitness Progress Tracker API is a RESTful API that allows users to track workouts, manage fitness goals, and discover exercise recommendations in a single application.

The project is designed to help users stay organized, monitor progress over time, and maintain motivation throughout their fitness journey. Authentication is handled through OAuth, and data is stored in MongoDB.

---

## Team Members

- Bryson Webb
- Rebecca Hanks
- Seth McNabb
- Lee Williamson
- Harrison Merrill

---

## Features

### Workout Tracking
- Create, view, update, and delete workouts
- Track workout duration, intensity, calories burned, and notes
- Monitor workout history over time

### Goal Management
- Create and manage personal fitness goals
- Track progress toward target milestones
- Update goal status and deadlines

### Exercise Recommendations
- Browse recommended exercises
- Filter recommendations by difficulty, category, muscle group, or equipment
- Administrative management of exercise recommendations

### Secure Authentication
- OAuth login integration
- No password storage required
- Role-based access control for administrative functions

---

## Technology Stack

- Node.js
- Express.js
- MongoDB
- OAuth Authentication
- Swagger API Documentation
- Render Deployment

---

## Database Collections

### Users

Stores user profile information.

| Field | Type |
|---------|---------|
| name | String |
| email | String |
| role | String |
| oauthProvider | String |
| createdAt | Date |
| updatedAt | Date |

### Workouts

Stores workout records created by users.

| Field | Type |
|---------|---------|
| userId | ObjectId |
| workoutType | String |
| durationMinutes | Number |
| date | Date |
| notes | String |
| caloriesBurned | Number |
| intensity | String |
| createdAt | Date |

### Goals

Stores personal fitness goals.

| Field | Type |
|---------|---------|
| userId | ObjectId |
| goalName | String |
| targetAmount | Number |
| deadline | Date |
| status | String |
| createdAt | Date |
| updatedAt | Date |

### ExerciseRecommendations

Stores exercise recommendations available to users.

| Field | Type |
|---------|---------|
| exerciseName | String |
| category | String |
| muscleGroup | String |
| difficulty | String |
| equipment | String |
| description | String |
| estimatedDuration | Number |
| createdBy | ObjectId |
| createdAt | Date |

---

## Authentication

Users authenticate using OAuth.

When a user logs in for the first time:

1. OAuth returns user profile information.
2. A user document is created automatically.
3. The default role is assigned as `user`.
4. Administrative privileges can be assigned separately.

Passwords are not stored in the database.

---

## API Endpoints

### Users

| Method | Endpoint |
|----------|----------|
| GET | `/users` |
| GET | `/users/:id` |
| POST | `/users` |
| PUT | `/users/:id` |
| DELETE | `/users/:id` |

### Workouts

| Method | Endpoint |
|----------|----------|
| GET | `/workouts` |
| GET | `/workouts/:id` |
| POST | `/workouts` |
| PUT | `/workouts/:id` |
| DELETE | `/workouts/:id` |

### Goals

| Method | Endpoint |
|----------|----------|
| GET | `/goals` |
| GET | `/goals/:id` |
| POST | `/goals` |
| PUT | `/goals/:id` |
| DELETE | `/goals/:id` |

### Exercise Recommendations

| Method | Endpoint |
|----------|----------|
| GET | `/exerciseRecommendations` |
| GET | `/exerciseRecommendations/:id` |
| POST | `/exerciseRecommendations` |
| PUT | `/exerciseRecommendations/:id` |
| DELETE | `/exerciseRecommendations/:id` |

> **Note:** POST, PUT, and DELETE operations for Exercise Recommendations are restricted to administrators.

---

## Project Goals

The Fitness Progress Tracker API aims to:

- Simplify fitness tracking
- Help users stay organized
- Improve motivation through progress monitoring
- Provide useful exercise recommendations
- Deliver a secure and scalable API experience

---
