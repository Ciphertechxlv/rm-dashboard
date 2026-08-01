import PortfolioTable from "../components/PortfolioTable";
import TargetTracker from "../components/TargetTracker";

export default function Portfolio() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Portfolio &amp; Targets</h1>
      </div>
      <PortfolioTable />
      <TargetTracker />
    </main>
  );
}
