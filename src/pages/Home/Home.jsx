import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Feature from "../../components/Feature/Feature.jsx";
export default function Home() {
    return (
        <div className={'home'}>
            <Banner
                image={"./img/bank-tree.jpeg"}
                subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
                text="Open a savings account with Argent Bank today!"
            />
            <div className={"features"}>
                <Feature
                    imgSrc="./img/icon-chat.png"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Feature
                    imgSrc="./img/icon-money.png"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Feature
                    imgSrc="./img/icon-security.png"
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money is always safe"
                />
            </div>
        </div>
    )
}