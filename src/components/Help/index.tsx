import { Container, Content, Paragraph, BoxModel } from "./styles";

export function Help() {
  return (
    <Container>
      <Content>
        <header>
          <strong>Definição e uso</strong>
        </header>

        <Paragraph>
          <p>
            A propriedade <code>border-radius</code> define o raio dos cantos do
            elemento.
          </p>
          <p>
            <strong>Dica: </strong>Esta propriedade permite adicionar cantos
            arredondados aos elementos!
          </p>
          <p>
            Esta propriedade pode ter de um a quatro valores. Aqui estão as
            regras:
          </p>
        </Paragraph>

        <Paragraph>
          <div>
            <strong>Quatro valores - </strong>
            <code>border-radius: 15px 50px 30px 5px;</code>
          </div>
          <BoxModel
            topLeft={15}
            topRight={50}
            bottomRight={30}
            bottomLeft={5}
          />
          <p>
            - O primeiro valor <code>top-left</code> se aplica ao canto superior
            esquerdo.
          </p>
          <p>
            - O segundo valor <code>top-right</code> se aplica ao canto superior
            direito.
          </p>
          <p>
            - O terceiro valor <code>bottom-right</code> se aplica ao canto
            inferior direito.
          </p>
          <p>
            - O quarto valor <code>bottom-left</code> se aplica ao canto
            inferior esquerdo.
          </p>
        </Paragraph>

        <Paragraph>
          <div>
            <strong>Três valores - </strong>
            <code>border-radius: 15px 50px 30px;</code>
          </div>
          <BoxModel
            topLeft={15}
            topRight={50}
            bottomRight={30}
            bottomLeft={50}
          />
          <p>
            - O primeiro valor <code>top-left</code> se aplica ao canto superior
            esquerdo.
          </p>
          <p>
            - O segundo valor se aplica aos cantos superior direito e inferior
            esquerdo <code>top-right / bottom-left</code>.
          </p>
          <p>
            - O terceiro valor <code>bottom-right</code> se aplica ao canto
            inferior direito.
          </p>
        </Paragraph>

        <Paragraph>
          <div>
            <strong>Dois valores - </strong>
            <code>border-radius: 15px 50px;</code>
          </div>
          <BoxModel
            topLeft={15}
            topRight={50}
            bottomRight={15}
            bottomLeft={50}
          />
          <p>
            - O primeiro valor se aplica aos cantos superior esquerdo e inferior
            direto <code>top-left / bottom-right</code>.
          </p>
          <p>
            - O segundo valor se aplica aos cantos superior direto e inferior
            esquerdo <code>top-right / bottom-left</code>.
          </p>
        </Paragraph>

        <Paragraph>
          <div>
            <strong>Um valor - </strong>
            <code>border-radius: 15px;</code>
          </div>
          <BoxModel
            topLeft={15}
            topRight={15}
            bottomRight={15}
            bottomLeft={15}
          />
          <p>
            - O valor se aplica a todos os cantos, que são arredondados
            igualmente{" "}
            <code>top-left / top-right / bottom-right / bottom-left</code>.
          </p>
        </Paragraph>

        <Paragraph>
          <strong>Fonte: </strong>{" "}
          <a href="https://www.w3schools.com/cssref/css3_pr_border-radius.asp">
            w3schools - CSS border-radius Property
          </a>
        </Paragraph>
      </Content>
    </Container>
  );
}
