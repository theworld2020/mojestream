import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-surface rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
        <div className="border-b border-white/10 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-slate-400">Effective Date: 19th June 2024</p>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed">
            
            <section>
                <h3 className="text-xl font-bold text-white mb-3">1. Introduction</h3>
                <p>Welcome to Moje ("we," "our," or "us"). We respect your privacy and are committed to protecting it. This Privacy Policy explains how we handle information when you use our mobile application (the "App"). By using the App, you agree to the practices described in this policy.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">2. Information We Collect</h3>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
                    <p><strong className="text-teal-400">Good News:</strong> We do not collect any personal data or user information. The only data processed by the App are the videos you choose to upload.</p>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">3. Use of Your Information</h3>
                <h4 className="font-semibold text-white mb-2">3.1 Video Uploads</h4>
                <ul className="list-disc pl-5 space-y-2 mb-2">
                    <li>The videos you upload are made publicly available within the App.</li>
                    <li>We do not use your videos for any other purposes.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">4. Deletion of Videos</h3>
                <h4 className="font-semibold text-white mb-2">4.1 User-Initiated Deletion</h4>
                <p className="mb-4">You have the ability to delete any videos you have uploaded at any time through the App. Once deleted, the videos are permanently removed from our servers and cannot be recovered.</p>
                
                <h4 className="font-semibold text-white mb-2">4.2 System-Initiated Deletion</h4>
                <p>We reserve the right to delete videos that violate our Terms of Service or Community Guidelines. If your video is removed for such reasons, you will be notified with the reason for deletion.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">5. Data Storage and Security</h3>
                <h4 className="font-semibold text-white mb-2">5.1 Storage</h4>
                <p className="mb-4">Videos are stored on secure servers. We implement reasonable measures to secure these videos and protect them from unauthorized access.</p>
                
                <h4 className="font-semibold text-white mb-2">5.2 Security Measures</h4>
                <p>We use various security technologies and procedures to help protect your videos from unauthorized access, use, or disclosure.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">6. No Data Backup</h3>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <p><strong className="text-yellow-400">Important:</strong> We do not provide backup services for the videos you upload. Once a video is deleted, it is permanently lost and cannot be retrieved.</p>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">7. Third-Party Disclosure</h3>
                <p><strong className="text-teal-400">Privacy Guaranteed:</strong> We do not share, sell, or distribute your information, including the videos you upload, to any third parties.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">8. Children's Privacy</h3>
                <h4 className="font-semibold text-white mb-2">8.1 Age Restrictions</h4>
                <p className="mb-4">The App is not intended for use by children under the age of 13. We do not knowingly collect any personal information from children under 13.</p>
                
                <h4 className="font-semibold text-white mb-2">8.2 Parental Control</h4>
                <p>If we become aware that we have unknowingly collected personal information from a child under 13, we will delete such information immediately. Parents or guardians who believe that their child has provided us with personal information without their consent should contact us so that we can delete such information.</p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-white mb-3">9. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the effective date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Continued use of the App after any changes to the Privacy Policy constitutes your acceptance of those changes.</p>
            </section>

            <section className="border-t border-white/10 pt-8 mt-8">
                <h3 className="text-xl font-bold text-white mb-3">10. Contact Us</h3>
                <p className="mb-2">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <a href="mailto:mojestreaming@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">mojestreaming@gmail.com</a>
                <p className="mt-8 text-sm text-slate-500">Last updated: June 19, 2024</p>
            </section>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;