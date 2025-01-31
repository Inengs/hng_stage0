# hng_stage0
this is a simple API for HNG12 Stage 0 Backend Task, it returns:
My registered email
The current dateTime in ISO 8601 format (UTC)
The Github repository URL for this project

## Live API URL
**Base URL:** [`https://hng-stage0-nlhe.onrender.com/`](https://hng-stage0-nlhe.onrender.com/)

### API EndPoint
**GET /** - Retrieves email, current datetime, and GitHub URL.

**Example Response (`200 OK`):**
```json

{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}







