import React from 'react';

const CSAEPolicyPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-surface rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
        <div className="border-b border-white/10 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Moje Streaming - CSAE Policy</h1>
            <h2 className="text-xl text-teal-400">Child Sexual Abuse and Exploitation Policy</h2>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <p className="font-semibold text-red-200">
                    Important: This policy outlines our zero-tolerance approach to child sexual abuse and exploitation.
                </p>
            </div>

            <p>
                Moje Streaming is committed to ensuring that our platform remains safe, respectful, and fully compliant with all legal and platform policies regarding child sexual abuse and exploitation (CSAE). We take the protection of minors extremely seriously and strictly prohibit any content, behavior, or interaction that promotes or enables CSAE in any form.
            </p>

            <section>
                <h3 className="text-2xl font-bold text-white mb-4">1. Zero Tolerance Policy</h3>
                <p className="mb-3">We do not allow:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400 marker:text-teal-500 mb-4">
                    <li>Content that depicts, promotes, glorifies, or threatens child sexual abuse or exploitation.</li>
                    <li>Images, videos, or audio that feature minors in sexually suggestive, explicit, or exploitative contexts.</li>
                    <li>User behavior that attempts to engage, solicit, or contact minors for inappropriate purposes.</li>
                </ul>
                <p className="text-red-300 font-medium">Violations will result in immediate removal, account banning, and reporting to relevant authorities, including the National Center for Missing & Exploited Children (NCMEC).</p>
            </section>

             <section>
                <h3 className="text-2xl font-bold text-white mb-4">2. Content Moderation</h3>
                <p className="mb-3">Although much of our content is user-uploaded, we:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400 marker:text-teal-500 mb-4">
                    <li>Restrict uploads to verified adult contributors only.</li>
                    <li>Use moderation workflows to manually review flagged content.</li>
                    <li>Respond quickly to reports from users, partners, or authorities.</li>
                </ul>
            </section>
            
            <section>
                <h3 className="text-2xl font-bold text-white mb-4">3. Reporting Mechanism</h3>
                <p className="mb-3">Users can report suspicious content or behavior directly within the app or via email at:</p>
                <a href="mailto:mojestreaming@gmail.com" className="text-teal-400 hover:underline">mojestreaming@gmail.com</a>
                <p className="mt-2 text-slate-400">We prioritize and investigate all CSAE-related reports within 24 hours.</p>
            </section>

            <section>
                <h3 className="text-2xl font-bold text-white mb-4">4. Cooperation with Authorities</h3>
                <p className="mb-3">We fully cooperate with law enforcement agencies and child protection organizations. Where required, we will:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400 marker:text-teal-500 mb-4">
                    <li>Preserve and share user data and evidence with authorities.</li>
                    <li>Report verified CSAE incidents to NCMEC and applicable legal bodies.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-bold text-white mb-4">5. User Access Restrictions</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-400 marker:text-teal-500 mb-4">
                   <li>Our app is not intended for minors.</li>
                   <li>We actively monitor for underage accounts and permanently disable them.</li>
                   <li>Age verification is in place for uploading or interacting with sensitive content.</li>
                </ul>
            </section>

             <section className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Questions or Concerns?</h3>
                <p>If you have any questions or concerns about this policy, please contact us: <a href="mailto:mojestreaming@gmail.com" className="text-teal-400 hover:underline">mojestreaming@gmail.com</a></p>
            </section>

        </div>
      </div>
    </section>
  );
};

export default CSAEPolicyPage;