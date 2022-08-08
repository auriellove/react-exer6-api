import axios from "axios";
import { Quote } from "/.src/services/";

export function fetchAllQuotes() {
  return axios
    .get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then((response) => console.log(response));
}

export function fetchPostById(text: string) {
  return axios
    .get<Quote>("https://grandcircusco.github.io/demo-apis/quotes.json/${id}")
    .then((response) => response);
}
