import NewLink from '../../../../components/NewLink/NewLink';
import PageLink from '../../../../components/PageLink/PageLink';
import styles from './MeetFrey.module.scss';
import clsx from 'clsx';

const MeetFrey = () => {
    return (
        <section
            className={clsx(styles.section, 'mx-3 mx-md-auto px-3 px-lg-4')}
        >
            <h2 className="mb-2 mb-md-3">
                <NewLink
                    goTo={'/about'}
                    desc={
                        <>
                            <span>Meet Frey,</span>
                            <span>a design agency with focus</span>
                        </>
                    }
                    srOnly={'Go to about page'}
                />{' '}
            </h2>
            <p>
                At Frey, we specialize in helping our clients tell their stories
                in a way that sets them apart from the competition.{' '}
                <span className="d-block text-lg-nowrap mb-3">
                    Our process-driven approach to marketing combines compelling
                    creativity with proven strategies rooted in research and
                    data.
                </span>{' '}
                We have expertise in various industries, including:
                <span
                    className={clsx(
                        styles.areasOfExpertise,
                        'mb-3'
                    )}
                >
                    <span>Commercial Real Estate,</span>
                    <span>Healthcare,</span>
                    <span>Nonprofit Organizations,</span>
                    <span>and Business Services.</span>
                </span>
                If you're looking for{' '}
                <span className="text-white">
                    fresh, bold marketing solutions, we'd love
                </span>{' '}
                to work with you.
            </p>
            <p>
                <NewLink
                    className={styles.linkContactUs}
                    desc={
                        <>
                            <span>Contact us</span>
                        </>
                    }
                />{' '}
                to discuss how we can help you achieve your marketing goals.
            </p>
        </section>
    );
};

export default MeetFrey;
