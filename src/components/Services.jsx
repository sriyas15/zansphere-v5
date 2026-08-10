import React from 'react';
import PropTypes from 'prop-types';
// Removed motion and logo as they are now in PolicyLayout
import PolicyLayout from './services/PolicyLayout'; // Import the new layout

// Privacy Policy Page
export const PrivacyPolicy = () => {
  return (
    <PolicyLayout pageTitle="Privacy Policy">
      {/* Actual content of the Privacy Policy */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Privacy Policy for ZanSphere</h2>
      <p className="text-gray-600 mb-4"><strong>Last Updated: May 07, 2025</strong></p>
      
      <p>ZanSphere Private Limited ("ZanSphere," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.zansphere.com or use our services.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Personal Information:</h4>
      <ul className="list-disc pl-5 mb-4">
        <li>Contact Information: Name, email address, phone number, and mailing address</li>
        <li>Professional Information: Company name, job title, industry</li>
        <li>Communication Records: Emails, support inquiries, and feedback</li>
        <li>Service Usage Information: Information about how you interact with our services</li>
      </ul>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Automatically Collected Information:</h4>
      <ul className="list-disc pl-5 mb-4">
        <li>Technical Data: IP address, browser type, device information</li>
        <li>Usage Data: Pages visited, time spent on pages, referring websites</li>
        <li>Cookies and Similar Technologies: Data collected through cookies, web beacons, and other tracking technologies</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
      
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Provide, maintain, and improve our services</li>
        <li>Process and complete transactions</li>
        <li>Communicate with you about our services, updates, and promotions</li>
        <li>Respond to your inquiries and support requests</li>
        <li>Analyze usage patterns to enhance user experience</li>
        <li>Protect against, identify, and prevent fraud and other illegal activities</li>
        <li>Comply with legal obligations</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Information Sharing and Disclosure</h3>
      
      <p>We may share your information with:</p>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Service Providers</strong>: Third-party vendors who help us provide our services</li>
        <li><strong>Business Partners</strong>: Companies we collaborate with to offer joint services</li>
        <li><strong>Legal Requirements</strong>: When required by law, legal process, or government requests</li>
        <li><strong>Business Transfers</strong>: In connection with a merger, acquisition, or sale of assets</li>
      </ul>
      
      <p>We do not sell your personal information to third parties.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights and Choices</h3>
      
      <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Right to access and review your personal information</li>
        <li>Right to correct inaccurate information</li>
        <li>Right to delete your information</li>
        <li>Right to restrict or object to processing</li>
        <li>Right to data portability</li>
      </ul>
      
      <p>To exercise these rights, please contact us at privacy@zansphere.com.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Data Security</h3>
      
      <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">International Data Transfers</h3>
      
      <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Children's Privacy</h3>
      
      <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h3>
      
      <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on our website with a revised "Last Updated" date.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
      
      <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
      
      <p><strong>Email</strong>: privacy@zansphere.com<br />
      <strong>Address</strong>: 38, Velmurugan Nagar, Kolathur, Ambattur, Tiruvallur, Tamil Nadu, India – 600099</p>
    </PolicyLayout>
  );
};
PrivacyPolicy.propTypes = {}; // No props received directly by this component

// Terms of Service Page
export const TermsOfService = () => {
  return (
    <PolicyLayout pageTitle="Terms of Service">
      {/* Actual content of the Terms of Service */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Terms of Service for ZanSphere</h2>
      <p className="text-gray-600 mb-4"><strong>Last Updated: May 07, 2025</strong></p>
      
      <p>Please read these Terms of Service ("Terms") carefully before using the website and services offered by ZanSphere Private Limited ("ZanSphere," "we," "our," or "us").</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
      <p>By accessing or using our website (www.zansphere.com) and services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our services.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">2. Description of Services</h3>
      <p>ZanSphere provides software development, quality assurance, DevOps, security testing, and related technical services as described on our website.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3. User Accounts</h3>
      <p>Some services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">4. User Responsibilities</h3>
      <p>You agree to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Provide accurate and complete information</li>
        <li>Maintain and promptly update your account information</li>
        <li>Notify us immediately of any unauthorized use of your account</li>
        <li>Use our services in compliance with applicable laws and regulations</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">5. Intellectual Property Rights</h3>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Our Intellectual Property</h4>
      <p>All content, features, and functionality on our website, including text, graphics, logos, images, and software, are owned by ZanSphere or our licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Your Content</h4>
      <p>You retain ownership of any content you provide to us. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content in connection with providing our services.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">6. Confidentiality</h3>
      <p>We will maintain the confidentiality of any proprietary information shared with us during the provision of our services, in accordance with our confidentiality agreements and applicable laws.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">7. Payment Terms</h3>
      <p>For paid services:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Fees are as stated on our website or in a separate agreement</li>
        <li>Payment terms are specified in your service agreement or invoice</li>
        <li>All fees are non-refundable unless otherwise specified</li>
        <li>We may change our fees upon reasonable notice</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">8. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, ZanSphere shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">9. Warranties and Disclaimers</h3>
      <p>Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">10. Indemnification</h3>
      <p>You agree to indemnify and hold harmless ZanSphere, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising from your use of our services or violation of these Terms.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">11. Termination</h3>
      <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">12. Changes to Terms</h3>
      <p>We may modify these Terms at any time. By continuing to use our services after such modifications, you agree to be bound by the updated Terms.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">13. Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">14. Dispute Resolution</h3>
      <p>Any dispute arising from these Terms shall be resolved through good faith negotiations, followed by arbitration in Chennai, Tamil Nadu, India, if necessary.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">15. Contact Information</h3>
      <p>For questions about these Terms, please contact us at:</p>
      <p><strong>Email</strong>: legal@zansphere.com<br />
      <strong>Address</strong>: 38, Velmurugan Nagar, Kolathur, Ambattur, Tiruvallur, Tamil Nadu, India – 600099</p>
    </PolicyLayout>
  );
};
TermsOfService.propTypes = {}; // No props received directly by this component

// Cookie Policy Page
export const CookiePolicy = () => {
  return (
    <PolicyLayout pageTitle="Cookie Policy">
      {/* Actual content of the Cookie Policy */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Cookie Policy for ZanSphere</h2>
      <p className="text-gray-600 mb-4"><strong>Last Updated: May 07, 2025</strong></p>
      
      <p>This Cookie Policy explains how ZanSphere Private Limited ("ZanSphere," "we," "our," or "us") uses cookies and similar technologies on our website www.zansphere.com.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">What Are Cookies?</h3>
      <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cookies We Use</h3>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Essential Cookies</h4>
      <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.</p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Performance/Analytics Cookies</h4>
      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the performance and user experience of our site.</p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Functionality Cookies</h4>
      <p>These cookies enable enhanced functionality and personalization, such as videos and live chat. They may be set by us or by third-party providers whose services we have added to our pages.</p>
      
      <h4 className="text-lg font-medium mt-4 mb-2">Targeting/Advertising Cookies</h4>
      <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Specific Cookies We Use</h3>
      
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Cookie Name</th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Purpose</th>
              <th className="px-4 py-2 border">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">session_id</td>
              <td className="px-4 py-2 border">Essential</td>
              <td className="px-4 py-2 border">Maintains user session</td>
              <td className="px-4 py-2 border">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">_za_analytics</td>
              <td className="px-4 py-2 border">Performance</td>
              <td className="px-4 py-2 border">Tracks anonymous usage data</td>
              <td className="px-4 py-2 border">1 year</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">preferences</td>
              <td className="px-4 py-2 border">Functionality</td>
              <td className="px-4 py-2 border">Stores user preferences</td>
              <td className="px-4 py-2 border">6 months</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">marketing_ref</td>
              <td className="px-4 py-2 border">Targeting</td>
              <td className="px-4 py-2 border">Tracks marketing referrals</td>
              <td className="px-4 py-2 border">30 days</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Cookies</h3>
      <p>Some cookies are placed by third parties on our behalf. These third parties may include:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Google Analytics (analytics)</li>
        <li>LinkedIn (marketing)</li>
        <li>HubSpot (customer relationship management)</li>
      </ul>
      <p>Each third party's use of cookies is subject to their own privacy and cookie policies.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Your Cookie Choices</h3>
      <p>Most web browsers allow control of cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit</p>
      <a href="https://www.allaboutcookies.org"> www.allaboutcookies.org.</a> {/* Corrected href */}

      <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Consent</h3>
      <p>When you first visit our website, you will be shown a cookie banner requesting your consent to place non-essential cookies on your device. You can change your cookie preferences at any time by clicking "Cookie Settings" in the footer of our website.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Changes to This Cookie Policy</h3>
      <p>We may update this Cookie Policy periodically. We will notify you of significant changes by posting the updated policy on our website with a revised "Last Updated" date.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Contact Us</h3>
      <p>If you have questions about our use of cookies, please contact us at:</p>
      <p><strong>Email</strong>: privacy@zansphere.com<br />
      <strong>Address</strong>: 38, Velmurugan Nagar, Kolathur, Ambattur, Tiruvallur, Tamil Nadu, India – 600099</p>
    </PolicyLayout>
  );
};
CookiePolicy.propTypes = {}; // No props received directly by this component