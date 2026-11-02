import { create } from "zustand";

interface Expenses {
    id: string;
    description: string;
    amount: number;
    paid: boolean;
}

interface BudgetStore {
    expenses: Expenses[];
    addExpense: (expense: Expenses) => void;
    markAsPaid: (expenseId: string) => void;
}

export const useBudgetStore = create<BudgetStore>((set) => ({
    expenses: [],
    addExpense: (expense) =>
        set((state) => ({ expenses: [...state.expenses, expense] })),
    markAsPaid: (expenseId) =>
        set((state) => ({
            expenses: state.expenses.map((expense) =>
                expense.id === expenseId ? { ...expense, paid: true } : expense
            ),
        })),
}))