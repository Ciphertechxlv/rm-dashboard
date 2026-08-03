import PolicyRatesPanel from "../components/PolicyRatesPanel";
import UnitRatesPanel from "../components/UnitRatesPanel";

export default function Policy() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Policy Rates</h1>
      </div>
      <UnitRatesPanel />
      <PolicyRatesPanel />
    </main>
  );
}
