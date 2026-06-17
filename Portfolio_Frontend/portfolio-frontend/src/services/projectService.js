import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

export const getAllProjects = async () => {
  return await axios.get(API_URL);
};

export const updateProject = async (id, projectData, token) => {
  return await axios.put(
    `${API_URL}/${id}`,
    projectData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};