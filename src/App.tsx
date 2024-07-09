import './styles/App.css';
import './components/Cards/Styles/CardsStyle.css'
import { Outlet, createHashRouter } from 'react-router-dom';
import Home from './Routes/Home';
import NavBar from './components/NavBar';
import ComponentsNavBar from './components/ComponentsNavBar';
import ButtonsNavBar from './components/Buttons/ButtonsNavBar';
import Button from './components/Buttons/ButtonComponent'
import NavBarsNavbar from './components/NavBarsNavBar';
import NavBarComponent from './components/NavBar/NavBarComponent';
import {SlidesComponent} from './components/Slides/SlidesComponent';
import CardsNavBar from './components/Cards/NavBar';
import CardsComponent from './components/Cards/CardsComponent';
import CardImageView from './components/Cards/CardImageViewComponent';
import RatingStars from './components/Cards/RatingStars';
import Footer from './components/Footer/FooterComponent';
import { Banner } from './components/Banners/BannerComponent';
import { Message } from './components/Message/MessageComponent';


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
                element: 
                    <div className='ComponentsNavBarContainer'>
                        <ComponentsNavBar/>
                        <Outlet/>
                    </div>,
                children: [
                    // Buttons
                    {
                        path: "buttons",
                        element: <div className='InnerComponentNavBar'>
                                    <Outlet/>
                                    <ButtonsNavBar/>
                                </div>,
                        children: [
                            {
                                index: true,
                                element: <div style={{width: "100%"}}>
                                        <Button
                                            link='link'
                                            label='label'
                                            isDescription = {true}
                                            isFilled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isOutlined = {true}
                                            isDescription = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isDescription = {true}
                                            isText = {true}
                                        />
                                    </div>
                            },
                            {
                                path: "button",
                                element: <div style={{width: "100%"}}>
                                        <Button
                                            link='link'
                                            label='label'
                                            isDescription = {true}
                                            isFilled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isOutlined = {true}
                                            isDescription = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isDescription = {true}
                                            isText = {true}
                                        />
                                    </div>
                            },
                            {
                                path: "buttonIcon",
                                element: <div style={{width: "100%"}}>
                                            <Button 
                                                link="link" 
                                                label="label" 
                                                sideIconPath="/add_24px.svg" 
                                                sideIconAlt="plus icon"
                                                isDescription = {true}
                                                isFilled = {true}
                                            />
                                            <Button 
                                                link="link" 
                                                label="label" 
                                                sideIconPath="/add_24px_colored.svg" 
                                                sideIconAlt="plus icon"
                                                isDescription = {true}
                                                isOutlined = {true}
                                            />
                                            <Button 
                                                link="link" 
                                                label="label" 
                                                isDescription = {true}
                                                sideIconPath="/add_24px_colored.svg" 
                                                sideIconAlt="plus icon"
                                                isText = {true}
                                            />
                                        </div>
                            },
                            {
                                path: "buttonDisabled",
                                element: <div style={{width: "100%"}}>
                                        <Button
                                            link='link'
                                            label='label'
                                            isFilled = {true}
                                            isDescription = {true}
                                            isDisabled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isDescription = {true}
                                            isOutlined = {true}
                                            isDisabled = {true}
                                        />
                                        <Button
                                            link='link'
                                            label='label'
                                            isDescription = {true}
                                            isText = {true}
                                            isDisabled = {true}
                                        />
                                    </div>
                            }
                        ]
                    },
                    // Slides
                    {
                        path: "Slides",
                        element: (
                            <SlidesComponent
                                propsArray={[
                                    {
                                        heading1: 'Get the new',
                                        heading2: 'beauty buzz',
                                        h2Color: "#99715D",
                                        description: 'The latest, greatest & freshest from your fave brands.',
                                        buttonProps: {
                                            link: '#',
                                            label: 'Shop now',
                                            color: "white",
                                            bgColor: "#99715D",
                                            isFilled: true,
                                        },
                                        imgPath: '/slide1img.svg'
                                    },
                                    {
                                        heading1: 'The new year',
                                        heading2: 'looks good on you',
                                        h2Color: "#18601E",
                                        description: 'Add vitamins & collagen to your supplement routine to keep it going strong.',
                                        buttonProps: {
                                            link: '#',
                                            label: 'Shop now',
                                            color: "white",
                                            bgColor: "#18601E",
                                            isFilled: true,
                                        },
                                        imgPath: '/Slide2.svg'
                                    },
                                    {
                                        heading1: 'Handy Kitchen',
                                        heading2: 'appliances',
                                        h2Color: "#C4742F",
                                        description: 'Discover top tools & gadgets to make easy ( & tasty ) meals.',
                                        buttonProps: {
                                            link: '#',
                                            label: 'Shop now',
                                            color: "white",
                                            bgColor: "#C4742F",
                                            isFilled: true,
                                        },
                                        imgPath: '/Slide3.svg'
                                    }
                                ]}
                            />
                        )
                    },
                    // NavBars
                    {
                        path: "NavBars",
                        element:<div style={{width: "100%"}}>
                                    <NavBarsNavbar/>
                                    <Outlet/>
                                </div>,
                        children: [
                            {
                                path: "NavBar",
                                element: <NavBarComponent/>
                            }
                        ]
                    },
                    // Cards
                    {
                        path: "Cards",
                        element: <div className='InnerComponentNavBar'>
                                    <Outlet/>
                                    <CardsNavBar/>
                                </div>,
                        children: [
                            {
                                index: true,
                                element: <div style={{width: "100%"}}>
                                            <CardImageView
                                                imgPaths={[ 
                                                    "../product-image-1.svg",
                                                    "../product-image-2.svg",
                                                    "../product-image-3.svg",
                                                    "../product-image-4.svg",
                                                ]}
                                            />
                                        </div>
                            },
                            {
                                path: "CardImageView",
                                element: <div style={{width: "100%"}}>
                                            <CardImageView
                                                imgPaths={[ 
                                                    "../product-image-1.svg",
                                                    "../product-image-2.svg",
                                                    "../product-image-3.svg",
                                                    "../product-image-4.svg",
                                                ]}
                                            />
                                        </div>
                            },
                            {
                                path: "CardComponent",
                                element: 
                                    <div className='CardComponent'>
                                        <CardsComponent
                                        {...{
                                            productImage: "/product-image.svg",
                                            productName: "lorem ipsum fire tv with alexa voice remote Tv etc.",
                                            productRating: 4.5,
                                            productPrice: 150,
                                            small: false,
											bannerColor: "red",
											bannerText: "50% OFF"
                                        }}
                                        />
                                        <br/>
                                        <CardsComponent
                                        {...{
                                            productImage: "/product-image.svg",
                                            productName: "lorem ipsum fire tv with alexa voice remote Tv etc.",
                                            productRating: 4,
                                            productPrice: 100,
                                            small: true,
											bannerColor: "lightgreen",
											bannerText: "New"
                                        }}
                                        />
                                    </div>
                            },
                            {
                                path: "RatingStars",
                                element: <div style={{width: "100%"}}>
                                            <RatingStars rating={4} />
                                        </div>
                            }
                        ]
                    },
                    // Footer
                    {
                        path: "footer",
                        element: <Footer 
                                        {...{
                                                logoPath: "/Logo.svg",
                                                companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.",
                                                companySocialLinks: [
                                                    "facebook",
                                                    "twitter",
                                                    "instagram",
                                                ],
                                                productsList: [
                                                    {
                                                        link:"#",
                                                        label: "Product1"
                                                    }, 
                                                    {
                                                        link:"#",
                                                        label: "Product2"
                                                    }, 
                                                    {
                                                        label:"Product 3",
                                                        link:"#"
                                                    }
                                                ],
                                                companyList: [
                                                    {
                                                        label:"About Us",
                                                        link: "#"
                                                    },
                                                    {
                                                        label:"Contact Us",
                                                        link: "#"
                                                    },
                                                    {
                                                        label:"Our Team",
                                                        link: "#"
                                                    }
                                                ],
                                                supportList: [
                                                    {
                                                        label:"FAQ",
                                                        link: "#"
                                                    },
                                                    {
                                                        label:"Shipping",
                                                        link: "#"
                                                    },
                                                    {
                                                        label:"Returns",
                                                        link: "#"
                                                    }
                                                ],
                                                downloadList: [
                                                    {
                                                        label:"Download App",
                                                        link: "#"
                                                    },
                                                    {
                                                        label:"Download Brochure",
                                                        link: "#"
                                                    },
                                                    {
                                                        label:"Download Catalog",
                                                        link: "#"
                                                    }
                                                ],
                                            }
                                        }
                                    />

                    },
                    // Banner
                    {
                        path: "banner",
                        element: <Banner 
									text="50% OFF"
									color='red'
								/>
                    },
					// Message component
					{
						path: "message",
						element: <Message
									{...{
										messageData: "Hello, how are you?",
										time: new Date(),
										send: "server",
										color: "green"
									}}
								/>
					}
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
