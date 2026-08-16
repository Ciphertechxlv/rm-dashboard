import NrffCalculator from "../components/NrffCalculator";

export default function Calculator() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Deposit Calculator</h1>
        <p>Profit/loss on a deposit or placement, comparing the deal rate against FTP.</p>
      </div>
      <NrffCalculator />
    </main>
  );
}
