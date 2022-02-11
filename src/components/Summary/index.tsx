import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "../Summary/styles"

export function Summary() {

const { transactions } = useTransactions();

const totalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
        return acc + transaction.amount;
    }
    return acc;
}, 0);

const totalExpenses = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
        return acc + transaction.amount;
    }
    return acc;
}, 0);


    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(totalDeposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(totalExpenses)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(totalDeposits-totalExpenses)}</strong>
            </div>
        </Container>
    )
}