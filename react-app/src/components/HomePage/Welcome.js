import ProductsBubble from "./ProductBubble";


function Welcome({ products, user }) {
    return (
        <div id="welcome" className="colorBlock">
            {user && <h1>Welcome, {user.username}!</h1>}
            {!user && <h1>Explore one-of-a-kind finds from independent makers</h1>}
            <div id="welcomeBubble" >
                <ProductsBubble products={products} />
            </div>

        </div>
    )
}

export default Welcome;