import React from "react";
import {render,screen,fireEvent} from "@testing-library/react";
import {CommentBox} from "../components/CommentBox";

test('calls onPost with input value and clears input',()=>{
    const mockOnPost = jest.fn();
    render(<CommentBox onPost={mockOnPost} />);
    const input = screen.getByPlaceholderText("Write a comment...");

    fireEvent.change(input, { target: { value: "This is a test comment" } });
    const postButton = screen.getByText("Post");
    fireEvent.click(postButton);
    
    expect(mockOnPost).toHaveBeenCalledWith("This is a test comment");
    expect(input).toHaveValue("");
})