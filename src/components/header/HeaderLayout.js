import styled from "styled-components";

export const HeaderLayout = ({ left: Left, middle: Middle, right: Right }) => {
  const Container = styled.div`
    display: flex;
  `;

  const Pane = styled.div`
    flex: 1;
  `;

  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Middle />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
