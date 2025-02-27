//El layout consiste en aquellas partes de la pagina que se van a repetir en distintos sitios, en los que se repita

import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

//en el componente routes lo meteremos, siendo OUTLET los hijos del mismo
const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
export default Layout;
