import NewLink from '../../../../components/NewLink/NewLink';
import styles from './ExploreCreBanner.module.scss';
import img from './explore-cre.jpg';

const ExploreCreBanner = () => {
    return (
        <section>
            <NewLink
                className={styles.link}
                goTo={'/expertise'}
                img={
                    <>
                        <img
                            src={img}
                            alt="CRE Web Samples"
                            width="1920"
                            height="1038"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </>
                }
                desc={
                    <>
                        <span>Explore Our Corporate</span>
                        <span>CRE Website Expertise</span>
                    </>
                }
                srOnly={'go to CRE expertise page'}
            />
        </section>
    );
};

export default ExploreCreBanner;
