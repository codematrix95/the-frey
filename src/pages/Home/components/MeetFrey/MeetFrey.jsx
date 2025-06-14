import { Link } from 'react-router-dom';
import './index.scss';

const MeetFrey = () => {
    return (
        <>
            <section class="text-white meet-frey">
                <h2 className="roboto-medium text-uppercase">
                    Meet Frey,{' '}
                    <span className="d-block">
                        A Design Agency with <span>Focus</span>
                    </span>
                </h2>
                <p className="maitree-regular">
                    At Frey, we specialize in helping our clients tell their
                    stories in a way that sets them apart from the competition.
                    Our process-driven approach to marketing combines compelling
                    creative with clever strategy rooted in research and data.
                    We have expertise in various industries, including
                    Commercial Real Estate, Healthcare, Nonprofit Organizations,
                    and Business Services. If you're looking for fresh, bold
                    marketing solutions, we'd love to work with you.
                </p>
                <p className="maitree-regular">
                    Contact us today to discuss how we can help you achieve your
                    marketing goals.
                </p>

                <div className="d-flex align-items-center mb-3">
                    <span className="m-0 me-2 text-decoration-none">
                        Get to know us today!
                    </span>
                    <Link
                        to="/about"
                        aria-label="Go to about page"
                    >
                        <span className="sr-only">Go to about page</span>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 26l5-6-5-6m4 6H11"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Link>
                </div>

                <img
                    src="https://freywebpro.wpenginepowered.com/wp-content/uploads/2020/03/home-bg-expertise.jpg"
                    alt="CRE Web Samples"
                />

                <span>Check Out Our Corporate CRE Website Expertise</span>
            </section>
        </>
    );
};

export default MeetFrey;
