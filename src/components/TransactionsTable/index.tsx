import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento web site</td>
                        <td className="deposit">R$ 10.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>14/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento aplicativo RN</td>
                        <td className="deposit">R$ 150.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>10/12/2021</td>
                    </tr>
                    <tr>
                        <td>Despesa Mensal</td>
                        <td className="withdraw">- R$ 250,00</td>
                        <td>Casa</td>
                        <td>12/12/2021</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}