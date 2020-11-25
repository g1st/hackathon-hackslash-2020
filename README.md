# CYF & Capgemini Hackathon 2020

Team Hack Slash

## Prerequisites

- [Node.js](https://nodejs.org/en/) (12+)
- [PosgreSQL](https://www.postgresql.org/download/)
- Terminal access
- Web browser

## To run app locally:

1. Fork and clone the project.

2. Populate `.env` file inside `/backend` directory with your credentials. Check `.env.example` for its contents.

3. Run `npm repopulate-db:local` to populate db with fake data for local development.

4. Run `npm run install:all` in the project root folder. If you wish to install and run only backend or frontend part of the app, then `cd` into that folder and run `npm install`. For example: `cd backend && npm install`.

5. Then to run app (from root folder) in dev mode: `npm run dev`. If you prefer to run backend in one terminal and frontend in another, then execute `npm run dev:backend` in one and `npm run dev:frontend` in another.

6. By default backend server is running on port 3001 and frontend on port 3000. So they are accessible at `http://localhost:3001` and `http://localhost:3000`.

## Relevant files for future development

- [Student Tracker wireframes on Figma](https://www.figma.com/file/JqBEPlHcsD0Ouit9mCgdDT/Hack-Slash-Student-Tracker). Initial MVP + wireframes for future enhancements of the app.

- Initial MVP user stories + user stories for future enhancements. [File here](https://docs.google.com/document/d/1fRaD--Vl-9eaad5MmWMuHHe9wIyv3Ih9SqstbW3VBp4/).
