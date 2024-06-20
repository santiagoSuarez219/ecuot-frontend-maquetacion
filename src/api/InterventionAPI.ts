import { isAxiosError } from "axios";

import {
  InterventionFormData,
  dashboardInterventionSchema,
  Intervention,
} from "../types";
import api from "../lib/axios";

export async function createIntervention(formData: InterventionFormData) {
  try {
    const { data } = await api.post("/interventions", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getInterventions() {
  try {
    const { data } = await api("/interventions");
    const response = dashboardInterventionSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getInterventionsById(id: Intervention["_id"]) {
  try {
    const { data } = await api(`/interventions/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type InterventionAPIType = {
  formData: InterventionFormData;
  interventionId: Intervention["_id"];
};

export async function updateIntervention({
  formData,
  interventionId,
}: InterventionAPIType) {
  try {
    const { data } = await api.put<string>(
      `/interventions/${interventionId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
