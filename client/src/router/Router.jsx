import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../Layout/Layout';
import User from '../pages/User/User';

const Router = () => {
	return (
		<Routes>
			{/* Le ponemos al layout la ruta / y el Home index para que sea la pagina principal */}
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/user/:id' element={<User />} />
			</Route>
		</Routes>
	);
};

export default Router;
