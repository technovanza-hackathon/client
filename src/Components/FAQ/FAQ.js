import React from 'react'

const FAQ = () => {
    return (
        <section id="faq" className="faq section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> <a style={{ textDecoration: "none" }} data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">What is Helping Hands? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                <p>
                                    Helping Hands is India’s largest and most trusted online donation platform, having enabled giving in India for the last 10 years. It is a nonprofit organisation with a giving community of millions of donors who support a vast network of 250+ verified nonprofits across India, touching the lives of millions of people every year.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a style={{ textDecoration: "none" }} data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Why should I choose to donate through Helping Hands? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    We respect your decision to donate, and understand that you want your contribution to make an impact. GiveIndia helps you with this by
                                    Offering you a wide range of donation options from credible NGOs working on a variety of causes. GiveIndia lists NGOs after clearing them through stringent norms of credibility and accountability.
                                    Sending you a feedback report with details on how your money has made a difference on every donation you make.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-help-circle icon-help"></i> <a style={{ textDecoration: "none" }} data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">What is Helping Hands vision statement?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Helping Hands vision is to alleviate poverty by enabling the world to give.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="300">
                            <i className="bx bx-help-circle icon-help"></i> <a style={{ textDecoration: "none" }} data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Can I donate to Helping Hands?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Helping Hands does not accept donations for its work. We are treating the initial corporate grant we got as "seed money" till we reach self-sustenance. The best way to support us is to donate more through us.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="400">
                            <i className="bx bx-help-circle icon-help"></i> <a style={{ textDecoration: "none" }} data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">How much of my donation reaches the NGO that I wish to support? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Helping Hands ensures that 90% of your contribution reaches the NGO you have chosen by keeping fundraising costs at 10%.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </section>
    )
}

export default FAQ