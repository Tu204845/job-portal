# 💼 Job Portal — Full-Stack Web Application

A full-stack job portal platform that connects **Job Seekers** and **Employers**, built with React.js and Node.js.

Job Seekers can search, filter, apply, and save jobs. Employers can post jobs, manage listings, review applications, and track hiring analytics.

---

## 🚀 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js 19, Vite 8, TailwindCSS 4, React Router 7, Axios, Framer Motion |
| **Backend** | Node.js, Express.js 5, REST API |
| **Database** | MongoDB Atlas, Mongoose 9 |
| **Authentication** | JWT (jsonwebtoken), bcryptjs |
| **File Upload** | Multer (images, PDF resumes) |

---

## ✨ Features

### 👤 Authentication & Authorization
- User registration and login with **JWT-based authentication**
- Password hashing with **bcrypt**
- Role-based access control (**Job Seeker** / **Employer**)
- Protected routes with auth middleware

### 🔍 Job Seeker
- Browse and search jobs with **multi-criteria filtering** (keyword, location, category, type, salary range)
- View detailed job descriptions and company info
- **Apply to jobs** directly from the platform
- **Save/bookmark** favorite job listings
- Upload and manage **resume (PDF)**
- Track application status (Applied, In Review, Accepted, Rejected)

### 🏢 Employer
- **Post new jobs** with full details (title, description, requirements, salary, type, category)
- **Manage job listings** — edit, close, reopen, or delete jobs
- **Review applicants** — view profiles, resumes, and update application status
- **Analytics Dashboard** — track active jobs, total applications, hired count with 7-day trend comparison

### 🛠️ Technical Highlights
- RESTful API with full CRUD operations
- Axios interceptors for automatic token injection & centralized error handling
- Context API for global authentication state management
- File upload with type validation (JPEG, PNG, PDF)
- Responsive UI design

---

## 📁 Project Structure

```
JOBPORTAL/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic (auth, jobs, applications, analytics)
│   ├── middlewares/     # Auth protection & file upload
│   ├── models/          # Mongoose schemas (User, Job, Application, SavedJob, Analytics)
│   ├── routes/          # API route definitions
│   ├── uploads/         # Uploaded files (gitignored)
│   ├── server.js        # Express server entry point
│   └── .env.example     # Environment variables template
│
├── frontend/job-portal/
│   ├── src/
│   │   ├── components/  # Reusable UI components (Cards, Inputs, Layout)
│   │   ├── context/     # AuthContext (global state)
│   │   ├── pages/       # Page components
│   │   │   ├── Auth/         # Login, SignUp
│   │   │   ├── Employer/     # Dashboard, ManageJobs, JobPosting, Applications
│   │   │   ├── JobSeeker/    # Dashboard, JobDetails, SavedJobs, Profile
│   │   │   └── LandingPage/  # Hero, Features, Analytics, Footer
│   │   ├── routes/      # Protected route wrapper
│   │   └── utils/       # API paths, Axios instance, helpers
│   └── vite.config.js
│
└── .gitignore
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user profile |
| POST | `/api/auth/upload-image` | Upload profile image |

### Jobs
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | Get all jobs (with filters) |
| GET | `/api/jobs/:id` | Get job by ID |
| POST | `/api/jobs` | Create new job (Employer) |
| PUT | `/api/jobs/:id` | Update job (Employer) |
| DELETE | `/api/jobs/:id` | Delete job (Employer) |
| PUT | `/api/jobs/:id/toggle-close` | Open/Close job (Employer) |
| GET | `/api/jobs/get-jobs-employer` | Get employer's posted jobs |

### User
| Method | Endpoint | Description |
|---|---|---|
| PUT | `/api/user/profile` | Update user profile |
| POST | `/api/user/resume` | Delete resume file |
| GET | `/api/user/:id` | Get user public profile |

### Applications
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/applications/:jobId` | Apply to a job |
| GET | `/api/applications/my` | Get my applications |
| GET | `/api/applications/job/:jobId` | Get applicants for a job (Employer) |
| GET | `/api/applications/:id` | Get application by ID |
| PUT | `/api/applications/:id/status` | Update application status (Employer) |

### Saved Jobs
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/save-jobs/:jobId` | Save a job |
| DELETE | `/api/save-jobs/:jobId` | Unsave a job |
| GET | `/api/save-jobs/my` | Get saved jobs |

### Analytics
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/analytics/overview` | Get employer dashboard analytics |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Tu204845/job-portal.git
cd job-portal
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example`:

```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>
JWT_SECRET=<your_jwt_secret_key>
PORT=8000
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend/job-portal
npm install
npm run dev
```

### 4. Open in browser

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`

---

## 👤 Author

**Tran Anh Tu**
- GitHub: [@Tu204845](https://github.com/Tu204845)
- Email: tu975482@gmail.com
