import Main from '../../components/Main/Main';

import GrowingBrandsBanner from './components/GrowingBrandsBanner/GrowingBrandsBanner';
import MeetFrey from './components/MeetFrey/MeetFrey';
import ExploreCreBanner from './components/ExploreCreBanner/ExploreCreBanner';

const Home = () => {
    return (
        <Main>
            <GrowingBrandsBanner />
            <MeetFrey />
            {/* <ExploreCreBanner /> */}
        </Main>
    );
};
export default Home;
