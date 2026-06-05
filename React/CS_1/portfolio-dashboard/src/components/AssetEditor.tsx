import React, { Component } from "react";
import type { Asset } from "../types";

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetEditor extends Component<
  AssetEditorProps,
  AssetEditorState
> {
  state = {
    name: "",
    symbol: "",
    value: "",
    change: "",
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<AssetEditorState, keyof AssetEditorState>);
  };

  handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    this.props.onUpdate({
      name: this.state.name,
      symbol: this.state.symbol,
      value: Number(this.state.value),
      change: Number(this.state.change),
    });

    this.setState({
      name: "",
      symbol: "",
      value: "",
      change: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          name="symbol"
          placeholder="Symbol"
          value={this.state.symbol}
          onChange={this.handleChange}
        />

        <input
          name="value"
          type="number"
          placeholder="Value"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <input
          name="change"
          type="number"
          placeholder="Change"
          value={this.state.change}
          onChange={this.handleChange}
        />

        <button type="submit">
          Update Asset
        </button>
      </form>
    );
  }
}

export default AssetEditor;