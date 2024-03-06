import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/restSearchList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            //console.log(MOCK_DATA)
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render Body component with search button",async () =>{

    await act(async () => render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ));
    //render(<Body/>);
    const searchBtn = screen.getByRole("button",{name: "Search"});
    expect(searchBtn).toBeInTheDocument();
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target : {value : "pizza"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("rest-card-testid");
    expect(cards.length).toBe(1);
});