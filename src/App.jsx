import { Route, Routes } from 'react-router-dom'
import TestElement from './pages/TestElement'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Companions from './pages/Companions'
import Ennemis from './pages/Ennemis'
import Planets from './pages/Planets'

import { useEffect } from "react"
import {
  Dropdown,
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

export default function App() {

	useEffect(() => {
    initTE({ Dropdown, Collapse, Ripple });
  })

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<TestElement />} />
				<Route path="/doctors" element={<Doctors />} />
				<Route path="/companions" element={<Companions />} />
				<Route path="/ennemis" element={<Ennemis />} />
				<Route path="/planets" element={<Planets />} />
			</Routes>
		</>
	)
}