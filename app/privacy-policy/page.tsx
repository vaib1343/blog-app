import Paragraph from "@/components/TermsCondition/Paragraph";
import React from "react";

const PrivacyPolicy = () => {
    return (
        <React.Fragment>
            <section className="px-10 mt-8">
                <h1 className=" text-2xl font-semibold text-gray-900">
                    Privacy policy
                </h1>
                <div className="">
                    <Paragraph title="" className="mt-4">
                        Last updated: January 26, 2024
                        <br />
                        This Privacy Policy describes Our policies and
                        procedures on the collection, use and disclosure of Your
                        information when You use the Service and tells You about
                        Your privacy rights and how the law protects You. We use
                        Your Personal data to provide and improve the Service.
                        By using the Service, You agree to the collection and
                        use of information in accordance with this Privacy
                        Policy.
                    </Paragraph>
                    <h1 className=" text-2xl font-semibold text-gray-900 mt-5">
                        Interpretation and Definitions
                    </h1>
                    <Paragraph title="Interpretation" className="mt-4">
                        The words of which the initial letter is capitalized
                        have meanings defined under the following conditions.
                        The following definitions shall have the same meaning
                        regardless of whether they appear in singular or in
                        plural.
                    </Paragraph>
                    <Paragraph title="Definitions" className="mt-4">
                        For the purposes of this Privacy Policy:
                        <ul className="mt-4 list-disc">
                            <li>
                                Account means a unique account created for You
                                to access our Service or parts of our Service.
                            </li>
                            <li>
                                Affiliate means an entity that controls, is
                                controlled by or is under common control with a
                                party, where "control" means ownership
                                of 50% or more of the shares, equity interest or
                                other securities entitled to vote for election
                                of directors or other managing authority.
                            </li>
                            <li>
                                Company (referred to as either "the
                                Company", "We", "Us" or
                                "Our" in this Agreement) refers to
                                anime news.
                            </li>
                            <li>
                                Cookies are small files that are placed on Your
                                computer, mobile device or any other device by a
                                website, containing the details of Your browsing
                                history on that website among its many uses.
                            </li>
                            <li>Country refers to: Uttar Pradesh, India</li>
                            <li>
                                Device means any device that can access the
                                Service such as a computer, a cellphone or a
                                digital tablet.
                            </li>
                            <li>
                                Service Provider means any natural or legal
                                person who processes the data on behalf of the
                                Company. It refers to third-party companies or
                                individuals employed by the Company to
                                facilitate the Service, to provide the Service
                                on behalf of the Company, to perform services
                                related to the Service or to assist the Company
                                in analyzing how the Service is used.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph
                        title="Transfer of Your Personal Data"
                        className="mt-4"
                    >
                        Your information, including Personal Data, is processed
                        at the Company's operating offices and in any other
                        places where the parties involved in the processing are
                        located. It means that this information may be
                        transferred to — and maintained on — computers located
                        outside of Your state, province, country or other
                        governmental jurisdiction where the data protection laws
                        may differ than those from Your jurisdiction. Your
                        consent to this Privacy Policy followed by Your
                        submission of such information represents Your agreement
                        to that transfer. The Company will take all steps
                        reasonably necessary to ensure that Your data is treated
                        securely and in accordance with this Privacy Policy and
                        no transfer of Your Personal Data will take place to an
                        organization or a country unless there are adequate
                        controls in place including the security of Your data
                        and other personal information.
                    </Paragraph>
                    <Paragraph
                        title="Delete Your Personal Data"
                        className="mt-4"
                    >
                        You have the right to delete or request that We assist
                        in deleting the Personal Data that We have collected
                        about You. Our Service may give You the ability to
                        delete certain information about You from within the
                        Service. You may update, amend, or delete Your
                        information at any time by signing in to Your Account,
                        if you have one, and visiting the account settings
                        section that allows you to manage Your personal
                        information. You may also contact Us to request access
                        to, correct, or delete any personal information that You
                        have provided to Us. Please note, however, that We may
                        need to retain certain information when we have a legal
                        obligation or lawful basis to do so.
                    </Paragraph>
                </div>
            </section>
        </React.Fragment>
    );
};

export default PrivacyPolicy;
