import { Switch, Route, withRouter } from 'react-router-dom';
import { useContext, useState, useEffect, lazy, Suspense } from 'react';
import Container from './Container';
import AppBar from './AppBar';
// import Modal from '../components/Modal';
import Footer from './Footer';
import LoaderBlur from '../components/LoaderBlur';
import Context from '../contexts/context';

const HomeView = lazy(() => import('../views/HomeView'));
const EventsView = lazy(() => import('../views/EventsView'));
const GalleryView = lazy(() => import('../views/GalleryView'));
const ContactsInfoView = lazy(() => import('../views/ContactsInfoView'));
const VideoView = lazy(() => import('../views/VideoView'));
const Modal = lazy(() => import('../components/Modal'));

function App(props) {
  const { showModal, language, setLanguage } = useContext(Context);
  // const [language, setLanguage] = useState('eng');
  const shouldShowFooter = props.location.pathname !== '/contact-info';
  useEffect(() => {
    console.log('App UseEffect language', setLanguage);
  }, []);

  return (
    <Container>
      <AppBar />
      {showModal && <Modal />}
      <Switch>
        <Suspense fallback={<LoaderBlur />}>
          <Route path="/events" exact>
            <EventsView />
          </Route>
          <Route path="/gallery">
            <GalleryView />
          </Route>
          <Route path="/video">
            <VideoView />
          </Route>
          <Route path="/contact-info">
            <ContactsInfoView />
          </Route>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Suspense>
      </Switch>
      {shouldShowFooter && <Footer />}
    </Container>
  );
}
export default withRouter(App);
