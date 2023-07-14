import { createContext, useState } from "react";

const TableDataContext = createContext();

const TableDataProvider = ({ children }) => {
  const [header, setHeader] = useState([]);
  const [titularPlayers, setTitularPlayers] = useState([]);
  const [substitutePlayers, setSubstitutePlayers] = useState([]);

  const value = {
    header,
    setHeader,
    titularPlayers,
    setTitularPlayers,
    substitutePlayers,
    setSubstitutePlayers,
  };

  return (
    <TableDataContext.Provider value={value}>
      {children}
    </TableDataContext.Provider>
  );
};

export { TableDataContext, TableDataProvider };
