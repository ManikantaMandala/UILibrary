import Button from "../components/Buttons/ButtonComponent";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="HomeDetails">
            <div className="HomeHeading">
                <h1>
                    UI Library 1.0
                </h1>
            </div>
            <div>
                <p>
                    This is UI Library
                </p>
            </div>
            <Button
                link="#/components"
                label="Get Started"
                color="#d33030"
                isFilled={true}
                />
        </div>
    );
}
