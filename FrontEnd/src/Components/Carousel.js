import React from 'react'

export default function Carousel() {

    //<img src={window.location.origin + '/tileProducts/prod1.png'} class="h-[500px] mx-auto" />
    return (
        <div class="carousel w-[1000px] mx-auto">
            <div id="slide1" class="carousel-item relative w-full">
                <div class='bg-gray-400 h-[500px] w-full'>
                    <img src={window.location.origin + '/tileProducts/prod1.png'} class="h-[500px] mx-auto" />
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <div class='bg-gray-400 h-[500px] w-full'>
                    <img src={window.location.origin + '/tileProducts/prod2.png'} class="h-[500px] mx-auto" />
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <div class='bg-gray-400 h-[500px] w-full'>
                    <img src={window.location.origin + '/tileProducts/prod3.png'} class="h-[500px] mx-auto" />
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    )
}