import { Switch, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Container from './Container';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import EventsView from '../views/EventsView';
import ContactInfoView from '../views/ContactsInfoView/ContactInfoView';
import GalleryView from '../views/GalleryView';
import VideoView from '../views/VideoView';
import Modal from '../components/Modal';
import Footer from './Footer';
import Context from '../contexts/context';

export default function App() {
  const { showModal } = useContext(Context);
  useEffect(() => {
    console.log(showModal);
  }, []);
  return (
    <Container>
      <AppBar />
      {showModal && <Modal />}
      <Switch>
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
          <ContactInfoView />
        </Route>
        <Route path="" exact>
          <HomeView />
        </Route>
      </Switch>
      <Footer />
    </Container>
  );
}
