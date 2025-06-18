import PageLink from '../../../../components/PageLink/PageLink';
import './MeetFrey.scss';

const MeetFrey = () => {
    return (
        <section class="MeetFrey text-white">
            <h2 className="roboto-medium text-uppercase meet-frey">
                <PageLink
                    linkClass={'roboto-medium text-uppercase'}
                    goTo={'/about'}
                    desc={
                        <>
                            <span className="text-nowrap">Meet Frey,</span>
                            <span className="flex-wrap text-nowrap ps-1">
                                a design agency with focus
                            </span>
                        </>
                    }
                    srOnly={'Go to about page'}
                />{' '}
            </h2>
            <p className="maitree-regular">
                At Frey, we specialize in helping our clients tell their stories
                in a way that sets them apart from the competition. Our
                process-driven approach to marketing combines compelling
                creative with clever strategy rooted in research and data. We
                have expertise in various industries, including Commercial Real
                Estate, Healthcare, Nonprofit Organizations, and Business
                Services. If you're looking for fresh, bold marketing solutions,
                we'd love to work with you.
            </p>
            <p className="maitree-regular">
                Contact us to discuss how we can help you achieve your marketing
                goals.
            </p>

            <div className="explore-cre">
                <img
                    src="https://freywebpro.wpenginepowered.com/wp-content/uploads/2020/03/home-bg-expertise.jpg"
                    alt="CRE Web Samples"
                />
                <PageLink
                    linkClass={'roboto-regular'}
                    goTo={'/expertise'}
                    desc={
                        <>
                            <span className="text-nowrap">
                                Explore Our Corporate
                            </span>
                            <span className="flex-wrap text-nowrap ps-1">
                                CRE Website Expertise
                            </span>
                        </>
                    }
                    srOnly={'go to CRE expertise page'}
                />
            </div>
        </section>
    );
};

export default MeetFrey;
