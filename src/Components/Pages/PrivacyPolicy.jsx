import React from "react";
import MainSection from "../TermAndPolicySection/MainSection";

const PrivacyPolicy = () => {
  const privayPolicyArr = [
    {
      title: "Information We Collect:",
      text: "We collect personal information you provide to us, such as your name, email address, and profile information. We also collect information automatically when you use WebXV, such as your IP address, device information, and usage data.",
    },
    {
      title: "Use of Information:",
      text: " We use your personal information to provide and improve WebXV, communicate with you, and personalize your experience. We may also use your information to send you promotional communications and analyze usage trends.",
    },
    {
      title: "Sharing of Information:",
      text: "We may share your personal information with third-party service providers that assist us in operating WebXV. We may also disclose your information in response to legal requests or to protect our rights and interests.",
    },
    {
      title: "Data Security:",
      text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Nonetheless, you agree to absolve us, our partners, and or advertisers of any breach caused to your data through any acts known, or unknown to us.",
    },
    {
      title: "Children's Privacy:",
      text: "WebXV is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.",
    },
    {
      title: "Your Choices:",
      text: "You may choose to access, update, or delete your personal information by contacting us. You may also opt out of receiving promotional communications from us.",
    },
    {
      title: "Changes to Terms:",
      text: "We reserve the right to modify this privacy policy at any time. If we make material changes to this policy, we will notify you by email or by posting a notice on WebXV.",
    },
    {
      title: "Contact Us:",
      text: "If you have any questions or concerns about these terms, please contact us at contact@x-v.io",
    },
  ];

  return (
    <div>
      <MainSection contentArr={privayPolicyArr} isPrivacy={true} />
    </div>
  );
};

export default PrivacyPolicy;
