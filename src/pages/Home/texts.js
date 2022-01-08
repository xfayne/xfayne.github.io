import Link from 'components/Link';
import Text from 'components/Text';

export default {
    CardiacSense:
    {
        title: "CardiacSense cloud & Android app",
        description:
            <Text>
                <Link href="https://www.cardiacsense.com/">CardiacSense</Link> is a Med-Tech startup that develops wearable watch device for continuous monitoring 
                heart activity. As a full-stack engineer in the software team, I helped develop the watch companion
                Android app with responsablites of both client and server sides. I developed features from "end-to-end"
                using Bluetooth, Java and React Native at the app level, alongside NodeJS, TypeScript, postgreSQL, AWS and Docker on the server side.  
            </Text>
    },
    Travelbook: {
        title: "Travelbook social platform for travelers",
        description:
            <Text>
                A React & NodeJS responsive web app, integrates AI, that let you document, share, and plan your trips in a personally tailored way. 
                On top of your favorite cloud storage, Travelbook gives you a <Link href="https://travelbloggers.herokuapp.com/user=KKB1LRsnz">'travel hub'</Link> that arrange and displays in one place
                all of your travel data like photos, travel stories and routes, letting you explore new trips and itineraries published 
                by the community and help planinng your next trip by processing your travel data and fit it a unique new trip.
            </Text>
    },
    KebabKing: {
        title: "Kebab King iOS and Android game",
        description:
        <Text>
            An arcade game where you have to serve impatient customers at a kebab stand, similar to an old and nostalgic game called "Falafel King". 
            For a couple of weeks the game hited the top 10 of games in the Android Play store (Israel) and overall
            have over 50,000 downloads.
        </Text>
    },
    UniProject:{
        title: "Cognitive-load and stress predictor",
        description:
        <Text>
            A final project at Tel Aviv university's Neural computation lab cooprate with Elbit company in 
            the subject of smart helmets for pilots. 
            My team and I developed real-time Python app, intergates AI algorithms, for stress and cognitive load prediction according to 
            physiological metrics, based on the latest scientific literature in the field.
        </Text>
    }

};

