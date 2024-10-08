# Rex-ai

## Overview

**Rex** is a powerful AI-driven personal assistant designed to automate and simplify daily tasks using **Gemini/GenAI**. Rex can handle task management, calendar scheduling, alarms, file organization, and even answer your questions, all while offering an interactive experience similar to Jarvis from the Iron Man movies. The project leverages **Next.js** for the frontend and **Python** for the backend, integrating the **Gemini API** to provide advanced AI capabilities.

## Features

1. **Task Management**
   - Create, edit, and manage to-do lists.
   - Keep track of daily tasks and receive updates.
   
2. **Natural Language Processing (NLP)**
   - Ask questions and get AI-generated answers.
   - Use voice commands to interact with Rex, powered by Gemini.
   
3. **Personal Assistant**
   - Daily updates on tasks and important reminders.
   - Manages your tasks, schedule, alarms, and file organization.
   
4. **Calendar and Alarms**
   - Set alarms and schedule events.
   - Organize meetings, deadlines, and sync with your calendar.
   
5. **File Management**
   - Manage and organize files with ease.
   
6. **Interactive Experience**
   - Rex can speak and respond, offering a Jarvis-like experience.

## Tech Stack

![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

### Frontend:
- **[Next.js](https://nextjs.org/)**: A React framework for building fast web applications.
- **TypeScript**: For type-safe frontend development.
- **CSS Modules**: For component-specific styles.
- **Framer Motion**: For animations and interactive UI.

### Backend:
- **[Python (Flask or FastAPI)]**: For handling REST API requests and backend logic.
- **Gemini API**: For AI-powered answers and task management.
- **SQLAlchemy or MongoDB**: As a database for storing user tasks, schedules, and assistant configurations.

### Other Tools:
- **Docker**: For containerizing the frontend and backend applications.
- **JWT Authentication**: For secure API access (if applicable).
- **APScheduler**: To handle scheduling tasks and alarms.

## Directory Structure

```bash
rex-ai-assistant/
├── backend/               # Python Backend
│   ├── app/
│   │   ├── api/           # API Routes
│   │   ├── models/        # Database Models
│   │   ├── services/      # External Services (Gemini API, NLP)
│   │   ├── utils/         # Utility Functions
│   │   ├── config.py      # Configuration settings
│   │   ├── database.py    # DB connection setup
│   │   └── main.py        # Backend entry point
│   ├── tests/             # Backend tests
│   └── requirements.txt   # Python dependencies
├── frontend/              # Next.js Frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Next.js Pages
│   │   ├── api/           # Frontend API services
│   │   ├── styles/        # CSS Modules
│   │   └── hooks/         # Custom React hooks
│   ├── tests/             # Frontend tests
│   ├── next.config.js     # Next.js config
│   ├── tsconfig.json      # TypeScript config
│   └── package.json       # Project dependencies
├── .gitignore             # Ignored files for git
├── README.md              # Project documentation
└── Dockerfile             # Docker setup
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **Python** (v3.8 or above)
- **Docker** (optional for containerization)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/rex-ai-assistant.git
   cd rex-ai-assistant
   ```

2. **Frontend setup:**

   Navigate to the `frontend/` directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. **Backend setup:**

   Navigate to the `backend/` directory and create a virtual environment:

   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # For Windows, use venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. **Environment Variables:**

   Create a `.env` file in the `backend/` and `frontend/` directories to store sensitive information such as API keys, database URIs, etc.

   Example for **backend** `.env` file:
   ```env
   GEMINI_API_KEY=your-gemini-api-key
   DATABASE_URL=your-database-url
   ```

   Example for **frontend** `.env` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000  # Backend API URL
   ```

### Running the Project

1. **Run the backend:**

   From the `backend/` directory, start the backend server:

   ```bash
   python main.py
   ```

2. **Run the frontend:**

   From the `frontend/` directory, start the frontend server:

   ```bash
   npm run dev
   ```

3. **Open the app:**

   Open [http://localhost:3000](http://localhost:3000) to view the app.

### Running with Docker

1. **Build the Docker images:**

   ```bash
   docker-compose up --build
   ```

2. **Run the containers:**

   ```bash
   docker-compose up
   ```

### Testing

- **Frontend:**
  Run tests using Jest (configured in the `tests/` folder):
  
  ```bash
  npm run test
  ```

- **Backend:**
  Run Python unit tests:

  ```bash
  pytest
  ```

## Future Improvements

- **AI Assistant Integration**: Enhancing the personal assistant's conversational capabilities.
- **Mobile App**: Building a React Native app for mobile users.
- **Task Reminders**: Push notifications for tasks and reminders.
- **Offline Mode**: Implementing offline task and schedule management.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contributors

Thanks to all the amazing contributors who helped in the development of Rex!

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/codernotme">
        <img src="https://avatars.githubusercontent.com/codernotme" width="100px;" alt="Aryan Bajpai"/>
        <br />
        <sub><b>Aryan Bajpai</b></sub>
      </a>
      <br />
      Project Lead
    </td>
    <!-- Add more contributors in the same format -->
  </tr>
</table>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
