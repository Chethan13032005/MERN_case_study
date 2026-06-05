import { useState } from "react";
import AssetCard from "./components/AssetCard";
import PortfolioSummary from "./components/PortfolioSummary";
import AssetEditor from "./components/AssetEditor";
import type { Asset } from "./types";

function App() {

  const [assets, setAssets] = useState<Asset[]>([
    {
      name: "Apple",
      symbol: "AAPL",
      value: 1000,
      change: 5,
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      value: 2000,
      change: 10,
    },
  ]);

  const removeAsset = (symbol: string) => {
    setAssets(
      assets.filter(
        (asset) => asset.symbol !== symbol
      )
    );
  };

  const updateAsset = (updatedAsset: Asset) => {
    setAssets((prev) =>
      prev.map((asset) =>
        asset.symbol === updatedAsset.symbol
          ? updatedAsset
          : asset
      )
    );
  };

  return (
    <div>
      <PortfolioSummary assets={assets} />

      <AssetEditor onUpdate={updateAsset} />

      {assets.map((asset) => (
        <AssetCard
          key={asset.symbol}
          {...asset}
          onRemove={removeAsset}
        />
      ))}
    </div>
  );
}

export default App;