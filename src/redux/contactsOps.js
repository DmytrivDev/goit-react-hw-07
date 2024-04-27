import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://662cc6f30547cdcde9df1e10.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resposne = await axios.get("/contacts");
      return resposne.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (args, thunkAPI) => {
    try {
      await axios.post("/contacts", args);
      const resposne = await axios.get("/contacts");
      return resposne.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (args, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${args}`);
      const resposne = await axios.get("/contacts");
      return resposne.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
