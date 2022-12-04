import Carousel from "../Components/Carousel";


export default function Home() {
    return (
        <>

            <div class='flex flex-row'>
                <div class="hero min-h w-1/2 bg-base-200">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Welcome</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                            <text>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </text>
                            <label for="my-modal" class="btn mt-4">Contact us!</label>

                            <input type="checkbox" id="my-modal" class="modal-toggle" />

                            <div class="modal">
                                <div class="modal-box w-[600px] h-[500px] flex flex-col space-y-4">

                                    <h1>Contact us</h1>

                                    <input type="text" placeholder="Your email" class="input input-bordered w-full max-w-xs mx-auto" />

                                    <textarea class="textarea w-[400px] textarea-bordered mx-auto h-[200px]" placeholder="Ask us anything"></textarea>

                                    <button class='btn w-min mx-auto'>Send</button>

                                    <div class="modal-action absolute bottom-2 right-2">
                                        <label for="my-modal" class="btn">close</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img src={window.location.origin + '/tileStock/maxresdefault.jpg'} class='min-h-[500px] w-1/2 '>

                </img>
            </div>

            <div class="mx-auto min-h w-[425px] mt-10">
                <div class="text-center mx-auto">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">View Our Prodcuts</h1>
                        <p class="py-6">Or view out Product page</p>
                    </div>
                </div>
            </div>

            <Carousel />


        </>
    )
}