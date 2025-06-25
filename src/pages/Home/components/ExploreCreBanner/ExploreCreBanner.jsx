import PageLink from '../../../../components/PageLink/PageLink';
import styles from './ExploreCreBanner.module.scss';
import clsx from 'clsx'

const ExploreCreBanner = () => {
    return (
        <section>
            <PageLink
                linkClass={clsx(styles.link, 'roboto-medium text-uppercase')}
                goTo={'/expertise'}
                img={
                    <>
                        <img
                            src="https://freywebpro.wpenginepowered.com/wp-content/uploads/2020/03/home-bg-expertise.jpg"
                            alt="CRE Web Samples"
                            fetchPriority="high"
                        />
                    </>
                }
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
        </section>
    );
};

export default ExploreCreBanner;
