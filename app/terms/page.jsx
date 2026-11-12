import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review JMM Labs service terms, project payment milestones, service scope, and paid IT partner listing information.",
  alternates: {
    canonical: "https://novastackdigital.co.ke/terms",
  },
};

const terms = [
  {
    title: "1. Project scope",
    body: "Each project begins with a written proposal or service agreement describing the agreed deliverables, timeline, fees, and any project-specific conditions. Work outside that scope, including new features or substantial revisions, may require a separate estimate and written approval.",
  },
  {
    title: "2. Payment milestones",
    body: "Unless a signed project agreement states otherwise, the one-time project fee is paid in three installments: a 50% deposit before work begins; 30% at the milestone stated in the proposal; and the final 20% when the agreed work is complete. The proposal will identify the milestone and invoice due dates. The final installment is due at completion and before final handover or production launch. Recurring maintenance or hosting charges are billed separately as described in the proposal.",
  },
  {
    title: "3. Client input and project timing",
    body: "Clients are responsible for providing accurate content, access, approvals, and other materials reasonably needed for the work. We will communicate when an input is needed. If approvals or materials arrive late, the project schedule may need to change by mutual agreement.",
  },
  {
    title: "4. Revisions and additional work",
    body: "The proposal should state what review rounds are included. Requests that change the agreed scope, add deliverables, or require extra work will be discussed and priced for approval before that work begins.",
  },
  {
    title: "5. Third-party services and licenses",
    body: "Hosting, domains, paid software, fonts, themes, APIs, advertising, and other third-party charges are not included unless the proposal says they are. Any recommended third-party costs will be identified for approval. The client is responsible for maintaining licenses and subscriptions in its own name where appropriate.",
  },
  {
    title: "6. Delivery and ownership",
    body: "The proposal will describe how the completed work is delivered and any ongoing support included. Where a package includes a 30-day defect-fix period, it covers faults in the agreed deliverables; it does not include new features, third-party outages, or changes to the approved scope. After all project invoices are paid, ownership or usage rights for the agreed deliverables will transfer as described in the project agreement. Third-party materials and pre-existing tools remain subject to their own license terms.",
  },
  {
    title: "7. Business profile and operating system services",
    body: "Business profile setup depends on the relevant platform's verification, access, and approval processes. Operating system installation is subject to compatible hardware and valid software licenses. JMM Labs does not provide or imply a software license unless it is expressly included in a written quote.",
  },
  {
    title: "8. Paid IT partner listings",
    body: "IT professionals and businesses may enquire about a paid partnership or listing on the JMM Labs website. Placement, duration, content, review requirements, and fee will be agreed in writing before payment and publication. A listing does not guarantee leads, sales, or endorsement of a partner's work.",
  },
  {
    title: "9. Changes, cancellations, and concerns",
    body: "Any change to a project, pause, or cancellation should be discussed in writing. The project agreement will set out how completed work, committed costs, and any remaining balance are handled. Nothing in these terms is intended to remove rights that apply under mandatory law.",
  },
  {
    title: "10. Project-specific agreements",
    body: "These website terms provide a general outline. A signed proposal or service agreement may add details for a specific engagement. If it conflicts with these general terms, the project-specific agreement applies to that engagement to the extent permitted by applicable law.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        <header className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            JMM Labs · Service information
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            These terms explain the usual working and payment arrangements for
            JMM Labs projects. The written proposal for your project should
            confirm its exact scope, milestones, and fees.
          </p>
        </header>

        <section className="mt-6 rounded-3xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">Standard project payment schedule</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["50%", "Deposit before work begins"],
              ["30%", "At the agreed project milestone"],
              ["20%", "On completion, before final handover or launch"],
            ].map(([amount, milestone]) => (
              <div key={amount} className="rounded-2xl border border-blue-100 bg-white p-5">
                <p className="text-3xl font-black text-blue-700">{amount}</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">{milestone}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            The proposal identifies the 30% milestone and invoice due dates.
            Different arrangements must be agreed in writing.
          </p>
        </section>

        <div className="mt-6 space-y-3">
          {terms.map(({ title, body }) => (
            <section key={title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <h2 className="text-lg font-bold text-slate-900">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
            </section>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">
          Questions about a project or partner listing?{" "}
          <Link href="/contact" className="font-bold text-blue-700 hover:text-blue-900">
            Contact JMM Labs
          </Link>{" "}
          and we’ll confirm the applicable terms in writing.
        </p>
      </div>
    </main>
  );
}
