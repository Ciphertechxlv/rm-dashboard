// Nigeria has no free public API for CBN monetary policy rates, so this
// is maintained by hand. The CBN's Monetary Policy Committee (MPC) meets
// roughly every 8 weeks and publishes decisions here:
//   https://www.cbn.gov.ng/MonetaryPolicy/decisions.html
// After each meeting, update the numbers below to match. That page is
// also the source of truth if this ever looks out of date.

export const CBN_RATES = {
  meetingNumber: 306,
  meetingDates: "20th–21st July 2026",
  asOf: "2026-07-21",
  mpr: 26.5, // Monetary Policy Rate, %
  corridor: {
    upper: 0.5, // Standing Lending Facility = MPR + upper (bps/100)
    lower: -4.5, // Standing Deposit Facility = MPR + lower (bps/100)
  },
  crr: {
    dmb: 45.0, // Deposit Money Banks
    merchant: 16.0, // Merchant Banks
    nonTsaPublicSector: 75.0,
  },
  liquidityRatio: 30.0,
  sourceUrl: "https://www.cbn.gov.ng/MonetaryPolicy/decisions.html",
};

export function lendingFacilityRate() {
  return CBN_RATES.mpr + CBN_RATES.corridor.upper;
}

export function depositFacilityRate() {
  return CBN_RATES.mpr + CBN_RATES.corridor.lower;
}
