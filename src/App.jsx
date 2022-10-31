import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/home';
import {Create} from './pages/create';
import {Edit} from './pages/edit';

function App() {
    return (
        <div className='App'>
            <nav className='navbar navbar-expand navbar-darg bg-dark'>
                <div className='navbar-nav mr-auto'>
                    <li>
                        <Link className='nav-link' to={'/'}>
                            LaReCRUD
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/create'}>
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/edit'}>
                            Edit
                        </Link>
                    </li>
                </div>
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
