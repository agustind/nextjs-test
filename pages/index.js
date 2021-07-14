import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import SimpleImageSlider from "react-simple-image-slider"


// fetches data from an external source and makes it available to the page component
export async function getStaticProps() {
    const res = await fetch(`${process.env.API_URL}/items/events`)
    const data = await res.json()
    return { props: {data: data.data} }
}

// page component, it receives the data from the function above
export default function Home({data}) {

    

    return (
        <Layout>
            <div className={styles.container}>
                <div>
                    {data.map((event, i) =>
                        <div key={i}>
                            {event.name} - {event.ticket_link}
                        </div>
                    )}
                </div>
                <SimpleImageSlider
                    width={800}
                    height={600}
                    images={[
                        { url: "https://placeimg.com/800/600/any" },
                        { url: "https://placeimg.com/800/600/any" },
                        { url: "https://placeimg.com/800/600/any" },
                        { url: "https://placeimg.com/800/600/any" },
                    ]}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
        </Layout>
    );

}
