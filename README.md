# File Uploader

> A personal file cloud storage system for uploading and viewing files inspired by Google Drive.

[Live Preview](https://file-uploader-5mab.onrender.com)

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## Project Overview

This application simulates a personal cloud storage system. Authenticated users can create folders, upload files, view metadata, and download or share files and folders with desired expiration for shared links.

## Project Structure

```
file-uploader/
├── config/         # Passport configuration
├── controllers/    # Route handlers
├── generated/      # Prisma configuration
├── middleware/     # Auth and session middleware
├── prisma/         # Prisma schema and migrations
├── public/         # Static resources
├── queries/        # Database queries
├── routes/         # API endpoints
├── utils/          # Helper functions
├── views/          # EJS templates
├── app.js          # Express app setup
```

## Features

- **Authentication:** Local authentication using username and password using `Passportjs`.
- **File Upload:** File upload using `multer` through form.
- **CRUD:** Folder and file creation, editing and deletion.
- **Metadata Viewing:** View a file's name, size, and upload time.
- **File Download:** Users can download files from the cloud to their local storage.
- **Responsive Design:** The UI is responsive on different devices.
- **Error Handling:** Handle server and invalid url errors.
- **Cloud Storage:** Users' files are stored in supabase cloud storage.
- **Folder Sharing:** Users' can share their folder contents with authenticated and unauthenticated users for a limited amount of time.

## Tech Stack

```
| Language      | JavaScript (Nodejs)          |
| Framework     | Expressjs                    |
| Database      | PostgreSQL + Prisma ORM      |
| Auth          | Passportjs + Session store   |
| File Upload   | Multer                       |
| View Engine   | EJS                          |
| Hosting       | Render + Neon                |
| Cloud Storage | Supabase                     |
```

## Getting Started

1. Clone the repo

```bash
git clone https://github.com/Stephenasembo/file-uploader.git
cd file-uploader
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables.

Create .env file in the root of the project.

```bash
touch .env
```

Set the following variables:

```
PROD_DB           # PostgreSQL connection string
PORT              # Port to run the app
SALT              # Integer for hashing password (<10)
STORAGE_URL       # Supabase storage url
STORAGE_API       # Supabase storage API key
PRIVATE_STORE     # Supabase bucket
```

4. Run database migrations

```bash
npx prisma migrate dev --name init
```

5. Start the app

```bash
npm run dev
```

## Future Improvements

- **UI/UX Improvement:** Animations and more icons will be included.
- **RESTful API Implementation:** The API endpoints will be made RESTful.

## Author

**Stephen Asembo**

## License

This project is licensed under the MIT License.
