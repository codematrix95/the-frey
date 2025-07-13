import Main from '../../components/Main/Main';

import GrowingBrandsBanner from './components/GrowingBrandsBanner/GrowingBrandsBanner';
import MeetFrey from './components/MeetFrey/MeetFrey';
import ExploreCreBanner from './components/ExploreCreBanner/ExploreCreBanner';
import NewLink from '../../components/NewLink/NewLink';

const Home = () => {
    return (
        <Main>
            <GrowingBrandsBanner />
            <MeetFrey />
            <ExploreCreBanner />
            <NewLink desc={<><span>this should not wrap</span><span>this should wrap</span></>} />
        </Main>
    );
};
export default Home;
