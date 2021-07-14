import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

// fetches data from an external source and makes it available to the page component
export async function getStaticProps() {
    const res = await fetch(`http://localhost:8055/items/events`)
    const data = await res.json()
    return { props: {data: data.data} }
}

// page component, it receives the data from the function above
export default function Home({data}) {

    return (
        <div className={styles.container}>
            {data.map((event, i) =>
                <div key={i}>
                    {event.name} - {event.ticket_link}
                </div>
            )}
        </div>
    );

}
