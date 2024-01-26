import AppHeader from "@/components/Home/Header";
import Paragraph from "@/components/TermsCondition/Paragraph";
import React from "react";

const TermsCondtion = () => {
    return (
        <React.Fragment>
            <section className="px-10 mt-8">
                <h1 className=" text-2xl font-semibold text-gray-900">
                    Terms and condition
                </h1>
                <div className="">
                    <Paragraph title="Welcome to Anime News!" className="mt-4">
                        These terms and conditions outline the rules and
                        regulations for the use of Anime news&apos;s Website,
                        located at animenew1343.com. By accessing this website
                        we assume you accept these terms and conditions. Do not
                        continue to use Anime News if you do not agree to take
                        all of the terms and conditions stated on this page. The
                        following terminology applies to these Terms and
                        Conditions, Privacy Statement and Disclaimer Notice and
                        all Agreements: &quot;Client&quot;, &quot;You&quot; and
                        &quot;Your&quot; refers to you, the person log on this
                        website and compliant to the Company&apos;s terms and
                        conditions. &quot;The Company&quot;,
                        &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;
                        and &quot;Us&quot;, refers to our Company.
                        &quot;Party&quot;, &quot;Parties&quot;, or
                        &quot;Us&quot;, refers to both the Client and ourselves.
                        All terms refer to the offer, acceptance and
                        consideration of payment necessary to undertake the
                        process of our assistance to the Client in the most
                        appropriate manner for the express purpose of meeting
                        the Client&apos;s needs in respect of provision of the
                        Company&apos;s stated services, in accordance with and
                        subject to, prevailing law of in. Any use of the above
                        terminology or other words in the singular, plural,
                        capitalization and/or he/she or they, are taken as
                        interchangeable and therefore as referring to same.
                    </Paragraph>
                    <Paragraph title="Cookies" className="mt-4">
                        We employ the use of cookies. By accessing Anime News,
                        you agreed to use cookies in agreement with the Anime
                        news&apos;s Privacy Policy. Most interactive websites
                        use cookies to let us retrieve the user&apos;s details
                        for each visit. Cookies are used by our website to
                        enable the functionality of certain areas to make it
                        easier for people visiting our website. Some of our
                        affiliate/advertising partners may also use cookies.
                    </Paragraph>
                </div>
            </section>
        </React.Fragment>
    );
};

export default TermsCondtion;
