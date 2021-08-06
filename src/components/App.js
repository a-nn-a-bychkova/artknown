import { Switch, Route, withRouter } from 'react-router-dom';
import { useContext, useEffect, lazy, Suspense } from 'react';
import Container from './Container';
import AppBar from './AppBar';
import Modal from '../components/Modal';
import Footer from './Footer';
import LoaderBlur from '../components/LoaderBlur';
import Context from '../contexts/context';
import HomeView from '../views/HomeView';
// import VideoView from '../views/VideoView';

const EventsView = lazy(() => import('../views/EventsView'));
const NewsView = lazy(() => import('../views/NewsView'));
const GalleryView = lazy(() => import('../views/GalleryView'));
const ContactsInfoView = lazy(() => import('../views/ContactsInfoView'));
const VideoView = lazy(() => import('../views/VideoView'));
// const Modal = lazy(() => import('../components/Modal'));

function App(props) {
  const { showModal, setLanguage } = useContext(Context);

  const shouldShowFooter = props.location.pathname !== '/contact-info';
  useEffect(() => {
    if (window.localStorage.getItem('language') === null) {
      return;
    } else {
      setLanguage(window.localStorage.getItem('language'));
    }
  }, [setLanguage]);

  return (
    <Container>
      <AppBar />
      {showModal && <Modal />}

      <Modal />
      <Switch>
        <Suspense fallback={<LoaderBlur />}>
          <Route path="/events" exact>
            <EventsView />
          </Route>
          <Route path="/news" exact>
            <NewsView />
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
