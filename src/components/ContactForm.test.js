import React from 'react';
import {render, screen} from '@testing-library/react'
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event'
// import { act } from 'react-dom/test-utils';


test('check if renders without errors', ()=>{
    render(<ContactForm/>);
})

test ('input text into the input fields, and on submit the form displays what was entered into the input fields', async () => {
    render(<ContactForm/>);

    //query for all inputs
    const fnameInput = screen.getByPlaceholderText(/Edd/i)
    const lnameInput = screen.getByPlaceholderText(/Burke/i)
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const msgInput = screen.queryByLabelText(/message/i)

    //type into all inputs
    userEvent.type(fnameInput, "Mon")
    userEvent.type(lnameInput, "Zwissler")
    userEvent.type(emailInput, "Monica@mon.com")
    userEvent.type(msgInput, "BEEP BOP")

    // expect(fnameInput).toHaveTextValue('Monica')

    //query for the button
    const button = screen.getByRole('button');
    userEvent.click(button)

    //assert, find what we submited to be in the doc
    const firstNameThere =  await screen.findByText(/mon/i)

     expect(firstNameThere).toBeInTheDocument();
     
});