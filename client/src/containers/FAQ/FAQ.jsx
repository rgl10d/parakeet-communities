import React from "react";
import "./FAQ.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div id="faqContainer" className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion" id="accordionExample">
          {/* Question 1 */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <FontAwesomeIcon icon={faQuestionCircle} className="question-icon" />
                  What is the difference between a mobile home and a
                  manufactured home?
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                The term "Mobile Home" or "Trailer" is only used for homes that
                were manufactured in a factory prior to the year 1976. That is
                when the Federal Government set a number of standards in regards
                to the construction of the homes. The proper term for any
                factory built house that is built after 1976, and is based on a
                permanent steel beam structure is "Manufactured Home".
              </div>
            </div>
          </div>
          {/* Question 2 */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What are the advantages of living in a mobile home or
                  manufactured home?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                There are several advantages to buying and living in a
                manufactured home. Probably the biggest advantage is cost. When
                a manufactured home is purchased in a community, the purchaser
                does not need to purchase the land (which is usually the most
                expensive part). The purchaser would buy the home and lease the
                land from the community. The lease fees involved are generally
                less expensive than the costs of purchasing the land. There is
                also a large difference in property taxes. A home located in a
                manufactured home community only pays property taxes on the
                value of the home, not the land. Therefore the monthly taxes
                will be much less than any other type of housing. Manufactured
                homes are perfect for anyone. Whether it’s someone just starting
                out on their own, or the buyers are on a fixed income,
                manufactured housing is a very affordable alternative to
                renting. Another advantage is the wonderful sense of community
                that one gets in a manufactured home community. Our community is
                very friendly, safe, quiet, and clean. Our residents can take
                pride in their home and their home community.
              </div>
            </div>
          </div>
          {/* Question 3 */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I move my home to another location if I want?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                The answer is "Yes". However, it is very expensive to move a
                mobile or manufactured home. A professional mobile home mover
                would need to be contacted to do the work. Generally the mobile
                home mover is able to disconnect the utilities prior to removing
                the home from the site, but that is determined by the local
                building inspector.
              </div>
            </div>
          </div>
          {/* Question 4 */}
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Are your rules enforced?
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes. Many residents move to our community because of our
                community standards and the stability the rules create within
                the neighborhood.
              </div>
            </div>
          </div>
          {/* Question 5 */}
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Is there an application?
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes, prospective tenants must complete an application and be
                approved prior to living in the park. There is a fee for the
                application to be processed by a National Tenant Network or a
                similar credit and residency checking bureau. The application is
                located on the application link under the "Resources" tab.
              </div>
            </div>
          </div>
          {/* Question 6 */}
          <div className="card">
            <div className="card-header" id="headingSix">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Can I bring in a used mobile home?
                </button>
              </h2>
            </div>
            <div
              id="collapseSix"
              className="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes, but Worsham Mobile Home Park staff must inspect the home
                before it can be brought into the park. Homes that require
                extensive work will not be approved...the work must be completed
                prior to the home being brought into the park.
              </div>
            </div>
          </div>
          {/* Question 7 */}
          <div className="card">
            <div className="card-header" id="headingSeven">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  May I sell my mobile home to someone and leave it in the park?
                </button>
              </h2>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Yes, but only if the home has been inspected and approved and
                the prospective buyers have been approved to live in the park.
              </div>
            </div>
          </div>
          {/* Question 8 */}
          <div className="card">
            <div className="card-header" id="headingEight">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Will I get my security deposit back when I move?
                </button>
              </h2>
            </div>
            <div
              id="collapseEight"
              className="collapse"
              aria-labelledby="headingEight"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                If you do not break your lease, provide a written notice 60 days
                before moving and leave your lot clean, you will receive your
                security deposit back. This information is in the lease and in
                the Rules and Regulations.
              </div>
            </div>
          </div>
          {/* Question 9 */}
          <div className="card">
            <div className="card-header" id="headingNine">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  May I park my RV in this park?
                </button>
              </h2>
            </div>
            <div
              id="collapseNine"
              className="collapse"
              aria-labelledby="headingNine"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                This mobile home park is designed to be a more stable, not
                transient community. RVs are not permitted.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="moreQuestions">
        <h1>
          Was <span style={{ color: "#2fc984" }}>your</span> question not here?
        </h1>
        <p>
          We're here to help! Send us a message today and we'll get right back
          to you!
        </p>
        <a className="btn btn-success" href="/contact">
          Contact Us
        </a>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
