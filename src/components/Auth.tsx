import Form from "./Form";
import Welcome from "./Welcome"
// import Gallery from "./Gallery";

type props = {
  isLoggedIn: boolean
}

export default function Auth({ isLoggedIn }: props) {
  return isLoggedIn ? <Form/> : <Welcome/>;
  // return isLoggedIn ? <Gallery/> : <Welcome/>;
}