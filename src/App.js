import Layout from "./Layout/Layout";
import Router from "./Routing/Router";
import "./styles/App.css";
import NoteState from "./context/notes/NoteState.js";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <NoteState>
      <Layout>
        <Router /> {/* React router routing  */}
            
      </Layout>
    </NoteState>
  );
}

export default App;
