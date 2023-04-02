import { createContext, useContext, useReducer } from "react";
import { works } from "../data/portfolio";

const WorksContext = createContext(null);

const WorksDispatchContext = createContext(null);

const initialState = {
  works,
  modal: { isOpen: false, id: null, title: null },
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
      return {
        modal: { isOpen: false, id: null, title: null },
        works: [
          ...state.works,
          {
            id: action.id,
            title: action.title,
            description: action.description,
            image: action.image,
            isHidden: action.isHidden,
            link: action.link,
          },
        ],
      };
    }
    case "changed": {
      const newState = state.works.map((work) => {
        if (work.id === action.work.id) {
          return action.work;
        } else {
          return work;
        }
      });
      return {
        modal: { isOpen: false, id: null, title: null },
        works: newState,
      };
    }
    case "deleted": {
      const newState = state?.works?.filter((work) => work.id !== action.id);
      return {
        ...state,
        works: newState,
      };
    }
    case "openModalDetails": {
      return {
        ...state,
        modal: { isOpen: true, id: action.id, title: "Project Details" },
      };
    }
    case "closeModal": {
      return {
        ...state,
        modal: { isOpen: false, id: null, title: null },
      };
    }
    case "openAddEntryModal": {
      return {
        ...state,
        modal: { isOpen: true, id: null, title: "Add Project" },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
