import PageLink from '../../../../components/PageLink/PageLink';
import styles from './ExploreCreBanner.module.scss';
import img from './explore-cre.jpg';
import clsx from 'clsx';

const ExploreCreBanner = () => {
    return (
        <section>
            <PageLink
                linkClass={clsx(styles.link, 'roboto-medium text-uppercase')}
                goTo={'/expertise'}
                img={
                    <>
                        <img
                            src={img}
                            alt="CRE Web Samples"
                            width="1920"
                            height="1038"
                            loading='eager'
                            fetchpriority='high'
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
