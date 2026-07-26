import PortfolioTable from "../components/PortfolioTable";
import TargetTracker from "../components/TargetTracker";

export default function Portfolio() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Portfolio &amp; Targets</h1>
        <p>Your working list of clients and deals, and where you stand against target. Private to this browser.</p>
      </div>
      <PortfolioTable />
      <TargetTracker />
    </main>
  );
}
