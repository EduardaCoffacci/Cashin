import { Container } from "./style";
import IconeImg from '../../assets/iconeimg.png'
import IconeSeta from '../../assets/seta-baixo.png'
import SetaParaCima from '../../assets/seta-cima.png';


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={SetaParaCima} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={IconeSeta} alt="Saídas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={IconeImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
            
        </Container>
    );
}