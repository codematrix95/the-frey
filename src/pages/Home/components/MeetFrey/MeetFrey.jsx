import PageLink from '../../../../components/PageLink/PageLink';
import styles from './MeetFrey.module.scss';
import clsx from 'clsx';

const MeetFrey = () => {
    return (
        <section
            className={clsx(
                styles.section,
                'text-white mx-2 px-3 mx-lg-3 px-lg-4'
            )}
        >
            <h2 className="roboto-medium text-uppercase ">
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
        </section>
    );
};

export default MeetFrey;
