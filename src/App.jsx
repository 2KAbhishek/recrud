import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/home';
import {Create} from './pages/create';
import {Edit} from './pages/edit';
import {View} from './pages/view';

function App() {
    return (
        <div className='App container'>
            <nav class="navbar navbar-light bg-light">
            <Link className='mx-2 navbar-brand' to={'/'}> LaReCrud </Link>
             <ul class="nav nav-pills">
                <li>
                    <Link className='btn btn-success mx-2' to={'/create'}>
                        Create
                    </Link>
                </li>
            </ul>
            </nav>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/edit/:id' element={<Edit />}></Route>
                   <Route path='/view/:id' element={<View />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
