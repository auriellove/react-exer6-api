import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { fetchAllQuotes } from "../services/quotes.services";

export interface Quote {
  text: string;
  author: string;
}

//creating the interface allows you to grab the information

export default function Quotes() {
  const [postQuotes, setPostQuotes] = useState();

  useEffect(() => {
    getAllQuotes();
  }, []);

  function getAllQuotes() {
    fetchAllQuotes().then((response) => setPostQuotes(response.data));
  }
}
