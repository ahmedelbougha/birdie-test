import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { Button } from "../../components";
import Card, { CardProps } from "../../components/Card";
import { theme } from "../../utils/constants";

const cardProps: CardProps = {
  title: "Test Card",
  image: "",
  children: (
    <>
      <p>Birdie Client</p>
      <Button> Details </Button>
    </>
  ),
};

describe("Card", () => {
  it("renders", () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Card {...cardProps} />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
