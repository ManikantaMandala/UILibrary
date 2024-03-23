import './styles/App.css';
import { Outlet, createHashRouter } from 'react-router-dom';
import Home from './Routes/Home';
import NavBar from './components/NavBar';
import ButtonsNavBar from './components/ButtonsNavBar';
import { Button } from './components/Button';
import ComponentsNavBar from './components/ComponentsNavBar';


const App = createHashRouter([
    {
        path: "/",
        element: <NavBarWrapper/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "components",
                element: <div>
                            <ComponentsNavBar/>
                            <Outlet/>
                        </div>,
                children: [
                    {
                        path: "buttons",
                        element: <div>
                                    <ButtonsNavBar/>
                                    <Outlet/>
                                </div>,
                        children: [
                            {
                                path: "button",
                                element: 
                                    <div>
                                        <Button
                                            link='link'
                                            label='label'
                                            isFilled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isOutLined = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isText = {true}
                                        />
                                    </div>
                            },
                            {
                                path: "buttonIcon",
                                element: <div>
                                            <Button 
                                                link="link" 
                                                label="label" 
                                                sideIconPath="../public/add_24px.svg" 
                                                sideIconAlt="plus icon"
                                                isFilled = {true}
                                            />
                                            <Button 
                                                link="link" 
                                                label="label" 
                                                sideIconPath="../public/add_24px_colored.svg" 
                                                sideIconAlt="plus icon"
                                                isOutLined = {true}
                                            />
                                            <Button 
                                                link="link" 
                                                label="label" 
                                                sideIconPath="../public/add_24px_colored.svg" 
                                                sideIconAlt="plus icon"
                                                isText = {true}
                                            />
                                        </div>
                            },
                            {
                                path: "buttonDisabled",
                                element: 
                                    <div>
                                        <Button
                                            link='link'
                                            label='label'
                                            isFilled = {true}
                                            isDisabled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isOutLined = {true}
                                            isDisabled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isText = {true}
                                            isDisabled = {true}
                                        />
                                    </div>
                            }
                        ]
                    },
                ]
            },
        ]
    }
]);

function NavBarWrapper(){
    return (
        <div className="App">
            <NavBar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default App
