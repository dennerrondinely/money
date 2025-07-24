import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface MoneyContextType {
  transactions: any[];
  setTransactions: (transactions: any[]) => void;
}

interface GlobalStateProps {
  children: React.ReactNode;
}

export const MoneyContext = createContext<MoneyContextType | undefined>(undefined)

export default function GlobalState({ children }: GlobalStateProps) {
  const [transactions, setTransactions] = useState<MoneyContextType["transactions"]>([])


  useEffect(() => {
    const getAsyncStorage = async () => {
      try {
        const storedTransactions = await AsyncStorage.getItem("transactions")
        if (storedTransactions) {
          setTransactions(JSON.parse(storedTransactions))
        }
      } catch (e) {
        console.log(e)
      }
    }
    getAsyncStorage()
  }, [])

  return (
    <MoneyContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </MoneyContext.Provider>
  )
}

export const useMoney = () => {
  const context = useContext(MoneyContext);
  if (!context) {
    throw new Error("useMoney must be used within a MoneyContext.Provider");
  }
  return context;
}