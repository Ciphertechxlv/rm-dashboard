// Tailored to Tumininu, FIIO Relationship Manager (Executive Trainee),
// Ecobank Nigeria. Built from the Ecobank Academy "Module Five: Email &
// Phone Etiquette" training and the person's own working preferences.

export const EMAIL_ETIQUETTE_RULES = [
  { title: "Signature & wording", detail: "Always use the approved Ecobank signature. Use active words instead of passive." },
  { title: "Salutation & subject lines", detail: "Begin every email with a proper salutation/greeting. Keep the subject line specific." },
  { title: "Reply expediently", detail: "Give a timely, polite response. If you don't have a full answer yet, acknowledge receipt. Flag if a mail reached you in error." },
  { title: "Content & tone", detail: "No ALL CAPS or all-lowercase. Watch typos, punctuation, grammar. Be precise and concise." },
  { title: "Reply All & Forward", detail: "Use Reply All deliberately, not by default. Don't overuse Forward — know when it's actually needed." },
  { title: "Proofread before sending", detail: "Check attachments are there, name the attachment clearly in the title, avoid oversized files." },
  { title: "Privacy classification", detail: "External messages → Public. Internal messages → tag Internal, Restricted, or Confidential as appropriate." },
  { title: "Never flame", detail: "Never vent emotion online or send inflammatory messages. Don't respond while angry — step away first." },
];

export const PHONE_ETIQUETTE_RULES = [
  { title: "Greeting", detail: "For first-time callers, greet politely, introduce yourself, and ask how you can help." },
  { title: "Answering", detail: "Answer within 1–2 rings. Never lay the receiver down without placing the caller on hold first." },
  { title: "Placing on hold", detail: "Ask permission before holding, and listen for the response. Thank them for waiting when you return." },
  { title: "Voice", detail: "Speak directly into the mouthpiece or headset." },
  { title: "Never muffle the phone", detail: "Don't cover the mouthpiece or press it to your chest — the caller can usually still hear you." },
  { title: "Interruptions", detail: "If you must speak to someone else in the room, ask the caller to hold and press HOLD before doing so." },
  { title: "Ending calls", detail: "Never place the handset down until you've pressed HOLD first." },
];

export const CELL_PHONE_RULES = [
  { title: "Put your phone away", detail: "Avoid excessive personal phone use during work hours — it interferes with productivity." },
  { title: "Turn off your ringer", detail: "Keep it on silent or vibrate." },
  { title: "Important calls only, in private", detail: "If you must take a personal call, step 8–10 feet from windows/the building." },
  { title: "Never in the restroom", detail: "Disrespects others' privacy and takes longer than necessary." },
  { title: "Never during meetings", detail: "Don't check your phone in meetings unless it's directly relevant to that meeting." },
];

export const RESEARCH_METHOD = [
  "Define the target — institution name, which FIIO sub-unit it falls under (Correspondent Bank / Fintech / Insurance / Mortgage / Asset Management / IO / DFI), and your objective.",
  "Institutional profile — official website's About/Investor Relations page, latest annual report, ownership structure, and regulatory standing (CBN, NAICOM, SEC, or PenCom).",
  "Financial snapshot — pull key ratios from their latest financials (CAR, NPL, solvency, liquidity) and log them in the Counterparty Snapshot tool on the Financial Analysis page.",
  "Recent news & triggers — funding rounds, leadership changes, regulatory actions, expansion. Cross-check against the Desk's live News feed.",
  "Decision-makers — LinkedIn search for relevant titles (Treasury, Correspondent Banking, Head of Finance), the company's Leadership page, mutual connections.",
  "Document & act — log everything in Counterparty Snapshot or the BD Pipeline, and set a concrete next step.",
];

export const RESEARCH_PROMPT = `I'm a Relationship Manager in Financial Institutions & International Organizations (FIIO) at Ecobank Nigeria. I need to research [INSTITUTION NAME], a [correspondent bank / fintech / insurer / mortgage institution / asset manager / DFI / international organization] as a [prospective client / existing counterparty due for review].

Please research and summarize:
1. Institutional overview — ownership, size, regulatory licensing status
2. Financial health — latest available key ratios (CAR, NPL, solvency, liquidity, or equivalent for their sector) and what they indicate
3. Recent news from the last 6 months — funding, leadership changes, regulatory actions, expansion
4. Likely decision-makers or relevant departments to approach
5. Any red flags or points needing verification before I proceed

Keep it concise — a one-page brief I can review before a call, not an essay. Flag clearly anything you're not confident about rather than guessing.`;

export const EMAIL_TEMPLATES = [
  {
    title: "Acknowledging receipt (no full answer yet)",
    subject: "RE: [Original Subject]",
    body: `Dear [Name],

Thank you for your email. I have received your request and am currently reviewing it. I will revert with a full response by [specific day/time].

Kind regards,
Tumininu
Relationship Manager, FIIO
Ecobank Nigeria
[Approved Ecobank Signature]`,
  },
  {
    title: "Introducing yourself to a new correspondent or prospect",
    subject: "Introduction — Ecobank Nigeria, FIIO Unit",
    body: `Dear [Name],

My name is Tumininu, and I work with the Financial Institutions & International Organizations team at Ecobank Nigeria. I am reaching out to introduce our unit and explore how we can support [Institution]'s banking needs in Nigeria, particularly around [correspondent banking / interbank placements / deposit products / payments].

I would welcome the opportunity to schedule a brief call at your convenience.

Best regards,
Tumininu
Relationship Manager, FIIO
Ecobank Nigeria
[Approved Ecobank Signature]`,
  },
  {
    title: "Responding to a rate inquiry (Fixed Deposit / PLX)",
    subject: "RE: Rate Enquiry",
    body: `Dear [Name],

Thank you for reaching out. As of today, our rate for [product/tenor] is [X]% per annum. This rate is valid as of [date] and subject to change based on market conditions.

Please let me know if you would like to proceed or discuss further.

Kind regards,
Tumininu
Relationship Manager, FIIO
Ecobank Nigeria
[Approved Ecobank Signature]`,
  },
  {
    title: "Notifying sender their mail reached the wrong recipient",
    subject: "RE: [Original Subject] — Incorrect Recipient",
    body: `Dear [Name],

Thank you for your email. It appears this message was intended for a different recipient, as it falls outside my area (FIIO). I have not opened/acted on the attachment(s) beyond this notice. Kindly resend to the correct contact.

Best regards,
Tumininu`,
  },
  {
    title: "Following up after a call or meeting",
    subject: "Follow-up — [Topic] Discussion",
    body: `Dear [Name],

Thank you for taking the time to speak with me today. As discussed, I will [next action], and expect to revert by [date].

Please let me know if I have missed anything from our conversation.

Kind regards,
Tumininu
Relationship Manager, FIIO
Ecobank Nigeria
[Approved Ecobank Signature]`,
  },
  {
    title: "Escalating/forwarding internally",
    subject: "FWD: [Original Subject] — For Your Review",
    body: `Hi [Colleague],

Forwarding this for your input, as it relates to [reason]. Could you advise by [date]? Happy to discuss if useful.

Thanks,
Tumininu
Classification: Internal`,
  },
  {
    title: "Approving a maturity/transaction for processing",
    subject: "RE: [Maturity/Transaction Reference] — Approved to Treat",
    body: `Dear [Name],

Kindly proceed to treat as discussed/instructed. Please confirm once processed.

Thank you,
Tumininu`,
  },
  {
    title: "Confirming a deal/rate agreed with a counterparty",
    subject: "Confirmation — [Product: PLX/CKU/PSR] Deal at [Rate]%",
    body: `Dear [Name],

Kindly proceed to treat the deal as agreed: [Principal amount], [tenor], at [rate]%, value date [date]. Please confirm once booked.

Thank you,
Tumininu`,
  },
  {
    title: "Confirming receipt of funds",
    subject: "Confirmation — Funds Received",
    body: `Dear [Name],

Kindly proceed to treat. This confirms receipt of [amount] from [counterparty], value date [date]. Please acknowledge.

Thank you,
Tumininu`,
  },
  {
    title: "Confirming a maturity roll-over or liquidation",
    subject: "Confirmation — Maturity Instruction: Roll Over / Liquidate",
    body: `Dear [Name],

Kindly proceed to treat as instructed: [Roll over the deposit for a further (tenor) at (rate)% / Liquidate and remit proceeds to (account details)]. Please confirm once actioned.

Thank you,
Tumininu`,
  },
  {
    title: "Requesting confirmation from a correspondent",
    subject: "Please Confirm — [Transaction Reference]",
    body: `Dear [Name],

Could you kindly confirm [receipt of instruction / booking of the deal / value date] for the below? Reference: [details].

Thank you,
Tumininu
Relationship Manager, FIIO
Ecobank Nigeria
[Approved Ecobank Signature]`,
  },
];

export const PHONE_TEMPLATES = [
  { title: "Answering (within 1–2 rings)", script: "\"Good [morning/afternoon], Ecobank, FIIO unit, this is Tumininu speaking. How may I help you?\"" },
  { title: "First-time caller", script: "\"Good [morning/afternoon], thank you for calling Ecobank. My name is Tumininu, from the Financial Institutions & International Organizations team. May I know who I'm speaking with, and how can I assist you today?\"" },
  { title: "Placing on hold", script: "\"Would you mind holding for a moment while I [check that/get that information] for you?\" (wait for their response before placing on hold)" },
  { title: "Returning from hold", script: "\"Thank you so much for holding. [Proceed with answer/next step].\"" },
  { title: "Consulting a colleague mid-call", script: "\"May I place you on a brief hold while I confirm this with a colleague? I won't be long.\" (press HOLD before speaking to anyone else in the room)" },
  { title: "Taking a message", script: "\"I'm sorry, [Name] is currently unavailable. May I take a message, or would you prefer I have them call you back? Could I get your name and best contact number?\"" },
  { title: "Ending the call", script: "\"Thank you for calling, [Name]. Is there anything else I can help with today? Have a great [morning/afternoon].\"" },
];
