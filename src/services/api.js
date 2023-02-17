import axios from "axios";

const app = axios.create({
  // baseURL: "https://agendaai-api-production.up.railway.app/api/",
  baseURL: "http://localhost:8000/api",
});

export default app;
