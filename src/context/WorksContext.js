import { createContext, useContext, useReducer } from "react";
import { works } from "../data/portfolio";

const WorksContext = createContext(null);

const WorksDispatchContext = createContext(null);

const initialState = {
  works,
  modal: { isOpen: false, id: null },
};

export function WorksProvider({ children }) {
  const [state, dispatch] = useReducer(worksReducer, initialState);

  return (
    <WorksContext.Provider value={state}>
      <WorksDispatchContext.Provider value={dispatch}>
        {children}
      </WorksDispatchContext.Provider>
    </WorksContext.Provider>
  );
}

export function useAppState() {
  return useContext(WorksContext);
}

export function useWorksDispatch() {
  return useContext(WorksDispatchContext);
}

function worksReducer(state, action) {
  switch (action.type) {
    case "added": {
      return [
        ...state.works,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.works.map((work) => {
        console.log(work, action.work.id);
        if (work.id === action.work.id) {
          return action.work;
        } else {
          return work;
        }
      });
    }
    case "deleted": {
      const newState = state?.works?.filter((work) => work.id !== action.id);
      return {
        ...state,
        works: newState,
      };
    }
    case "openModal": {
      return {
        ...state,
        modal: { isOpen: true, id: action.id },
      };
    }
    case "closeModal": {
      return {
        ...state,
        modal: { isOpen: false, id: null },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
