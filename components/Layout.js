import Header from './Header'
import Footer from './Footer'

export default props => {
    return (
        <>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </>)
}