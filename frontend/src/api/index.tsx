const URL_BASE = "http://localhost:8000/api/v1";
import { ICreateNewPerson } from "../types/IPerson.d.ts";

export async function getPeopleApi() {
  try {
    const response = await fetch(`${URL_BASE}/person`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function deletePersonApi(id_person: number) {
  try {
    const response = await fetch(`${URL_BASE}/person/${id_person}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.status === 204;
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function getPersonApi(id_person: number) {
  try {
    const response = await fetch(`${URL_BASE}/person/${id_person}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function updatePersonApi(
  id_person: number,
  data: ICreateNewPerson
) {
  try {
    const response = await fetch(`${URL_BASE}/person/${id_person}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.status === 200;
  } catch (error) {
    console.error("Erro:", error);
  }
}

export async function createPersonApi(data: ICreateNewPerson) {
  try {
    const response = await fetch(`${URL_BASE}/person`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.status === 201;
  } catch (error) {
    console.error("Erro:", error);
  }
}
