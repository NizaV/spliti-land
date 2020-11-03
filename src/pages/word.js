import React from "react"
import "../styles/word.css"

export const Word = () => {
    return (
    <div>
        <div data-delay="1200" data-words>
            <span class="text-anim-items">
                <span class="text-anim-item"><span>jQuery</span></span>
                <span class="text-anim-item"><span>CSS</span></span>
                <span class="text-anim-item"><span>Angular</span></span>
                <span class="text-anim-item"><span>Vue</span></span>
                <span class="text-anim-item"><span>React</span></span>
            </span>
            <span class="anim-line"></span>
        </div>
    </div>
    )
}