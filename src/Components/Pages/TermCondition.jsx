import React from "react";
import MainSection from "../TermAndPolicySection/MainSection";

const TermCondition = () => {
  const termAndConditionArr = [
    {
      title: "Acceptance of Terms:",
      text: `By using WebXV, you agree to abide by these terms and any
                  additional terms and conditions that may apply.`,
    },
    {
      title: "User Registration:",
      text: `You must register for an account to access certain features of our platform. You agree to provide accurate and complete information during the registration process and to keep your account information up to date.`,
    },
    {
      title: "User Content:",
      text: `You are solely responsible for the content you post on WebXV. By posting content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.`,
    },
    {
      title: "Prohibited Activities:",
      text: `You agree not to engage in any activity that violates these terms or any applicable laws. Prohibited activities include, but are not limited to, posting unlawful, harmful, or offensive content, infringing upon the rights of others, and attempting to disrupt the operation of the platform.`,
    },
    {
      title: "Intellectual Property:",
      text: `All intellectual property rights in WebXV, including but not limited to trademarks, copyrights, and trade secrets, are owned by us or our licensors.`,
    },
    {
      title: "Disclaimer of Warranties:",
      text: `WebXV is provided on an "as is" and "as available" basis, without any warranties of any kind. We do not guarantee that the platform will be error-free or uninterrupted.`,
    },
    {
      title: "Limitation of Liability:",
      text: `In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of WebXV.`,
    },
    {
      title: "Governing Law:",
      text: `These terms shall be governed by and construed in accordance with the laws of Alabama`,
    },
    {
      title: "Changes to Terms:",
      text: `We reserve the right to modify these terms at any time without prior notice. Your continued use of WebXV after any such changes constitutes your acceptance of the new terms.`,
    },
    {
      title: "Contact Us:",
      text: `If you have any questions or concerns about these terms, please contact us at contact@x-v.io`,
    },
  ];

  return (
    <div>
      <MainSection contentArr={termAndConditionArr} />
    </div>
  );
};

export default TermCondition;
