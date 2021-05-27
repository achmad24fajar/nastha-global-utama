// import objek useReduce dan useContext dari liblary react
import { useReducer, createContext } from "react";

// export objek useContext agar bisa gunakan di komponen lain
export const EventContext = createContext();

// membuat variable initialState untuk menampung nilai awal dari form login
const initialState = {
  title: "",
  location: "",
  employee: [
    {
      name: "",
    },
  ],
  date: "",
  note: "",
  image: null,
};

// membuat function reducer untuk membuat kondisi
const reducer = (state, action) => {
  return action;
};

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <EventContext.Provider value={[state, dispatch]}>
      {children}
    </EventContext.Provider>
  );
};
