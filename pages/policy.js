import PolicyRatesPanel from "../components/PolicyRatesPanel";

export default function Policy() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Policy Rates</h1>
        <p>The CBN benchmark numbers that shape pricing, lending, and liquidity across every desk.</p>
      </div>
      <PolicyRatesPanel />
    </main>
  );
}
