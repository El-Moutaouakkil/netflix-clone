import React from "react";
import "./Banner.css";
function Banner() {
    const truncate = (str, n) => {
        return str.length <= n
            ? str
            : str.substr(0, n) + "...";
    };

    return (
        <div>
            <header
                className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png"
                    )`,
                    backgroundPosition: "center",
                }}>
                <div className='banner-content'>
                    <h1 className='banner-title'>Movie Name</h1>
                    <div className='banner-buttons'>
                        <button className='banner-button'>play</button>
                        <button className='banner-button'>my list</button>
                    </div>
                    <p className='banner-description'>
                        {truncate(
                            "this is a movie description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus libero earum dolore delectus qui consequatur voluptas debitis distinctio repellendus labore voluptatem blanditiis mollitia accusamus, odit, facilis eveniet ut perferendis sed architecto eaque officia quidem. Veniam quam placeat, magnam necessitatibus asperiores deserunt accusamus quasi iure enim commodi cupiditate nihil corporis. Voluptatum vitae doloribus saepe! Id accusantium minus, iste tempora soluta exercitationem eos iusto unde qui, minima obcaecati eligendi dolor delectus nostrum ut doloribus maiores culpa suscipit repellendus magnam. Omnis explicabo tempora accusamus perspiciatis hic odio, quisquam enim veritatis nobis commodi quae similique cupiditate tenetur. Mollitia possimus eos nobis, similique sint distinctio nisi deleniti veniam quibusdam cumque consequatur nemo quaerat voluptates beatae soluta rerum itaque sit nihil ratione modi quae reprehenderit ex! Enim distinctio repudiandae porro accusamus architecto, soluta voluptas expedita nisi amet dolor alias quos, facilis repellat adipisci! Consequuntur fugit assumenda nesciunt minus tempora hic impedit asperiores deleniti, nihil excepturi perferendis? Repellat quaerat, odio, accusantium natus reiciendis earum nobis officia, illo dicta itaque iste! Esse labore nemo quia repellat facere, voluptas quo id voluptate ipsum, sed nam animi? Iste tenetur explicabo eligendi ipsam nulla voluptatem aliquam doloribus nihil alias reiciendis, atque non ullam qui eaque necessitatibus consequuntur iure. Fuga, cum expedita",
                            150
                        )}
                        
                    </p>
                </div>
                <div className='banner-fadeBottom' />
            </header>
        </div>
    );
}

export default Banner;
