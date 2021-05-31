import { Switch, Route } from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import EventsView from '../views/EventsView';
import ContactInfoView from '../views/ContactInfoView';
import GalleryView from '../views/GalleryView';
export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/events">
          <EventsView />
        </Route>
        <Route path="/gallery">
          <GalleryView />
        </Route>
        <Route path="/contact-info">
          <ContactInfoView />
        </Route>
      </Switch>
    </Container>
  );
}
