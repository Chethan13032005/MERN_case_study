import React from "react";
import type { Asset } from "../types";

interface AssetCardProps extends Asset {
  onRemove: (symbol: string) => void;
}

const AssetCard: React.FC<AssetCardProps> = ({
  name,
  symbol,
  value,
  change,
  onRemove,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{symbol}</p>
      <p>${value}</p>
      <p>{change}%</p>

      <button onClick={() => onRemove(symbol)}>
        Remove
      </button>
    </div>
  );
};

export default AssetCard;