import { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import { 
    Container, 
    TransactionTypeContainer,
    RadioBox
} from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'

interface Props {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}:Props){
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()
        const data = {
            type,
            title,
            value,
            category
        }

        api.post('/transactions', data)
    }


    return(
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <button 
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar"/>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    placeholder="Valor"
                    type="number"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => {
                            setType('deposit')
                        }}
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"

                        onClick={() => {
                            setType('withdraw')
                        }}
                    >
                        <img src={outcomeImg} alt="saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button
                    type="submit"
                >
                    Cadastrar
                </button>
            </Container>
          
        </Modal>
    )
}