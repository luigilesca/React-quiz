import { useEffect, useReducer } from 'react';
import '../App.css';

import Header from "../components/Header";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Main from '../components/Main';
import Start from '../components/Start';
import Question from '../components/Question';

const initialState = {
  questions: [],

  // loading, error, ready, active, finished
  status: "Loading...",
  index: 0,
  answer: null,
  points: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
    case "dataFailed": {
      return {
        ...state,
        status: "error"
      }
    }
    case "start": {
      return {
        ...state,
        status: "active"
      }
    }
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }
    }
    default: {
      throw new Error("Action unknown")
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numQuestions = state.questions.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:8000/questions");
        const data = await resp.json();
        console.log("data", data)
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.log("Something went wrong", error);
        dispatch({ type: "dataFailed" });
      } finally {
        console.log("finished loading");
      }
    }
    fetchData();
  }, [])


  return (
    <div className="app">
      <Header />

      <Main>{state.status === "Loading..." && <Loader />}</Main>
      <Main>{state.status === "error" && <Error />}</Main>
      <Main>{state.status === "ready" && <Start numQuestions={numQuestions} dispatch={dispatch} />}</Main>
      <Main>{state.status === "active" && <Question question={state.questions[state.index]} dispatch={dispatch} answer={state.answer} />}</Main>

    </div>
  );
}

export default App;
