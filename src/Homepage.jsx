import { memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomePage.scss';

const shopItems = [
    'square', 'circle', 'triangle', 'rectangle', 'rhombus',
    'hexagon', 'octagon',
];

const HomePage = ({ tempCart }) => {
    const clickShopItem = (item) => {
        if (tempCart[item] === undefined) {
            tempCart[item] = 1;
        } else {
            tempCart[item] = tempCart[item] + 1;
        };
    };

    return (
        <div>
            <Swiper slidesPerView={1}
                spaceBetween={60}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                grabCursor={true}
                modules={[Autoplay, Pagination, Keyboard]}>
                <SwiperSlide>
                    <div>
                        <div className='shape square'></div>
                        <span>max(∣x∣,∣y∣) ≤ a</span>
                    </div>
                    <span>Think Inside the Square.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape square'></div>
                        <span>∣x∣ + ∣y∣ ≤ √2a</span>
                    </div>
                    <span>Be There and Be Square.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape circle'></div>
                        <span>x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup></span>
                    </div>
                    <span>Stay Well-Rounded.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape circle'></div>
                        <span>√(x<sup>2</sup> + y<sup>2</sup>) = r</span>
                    </div>
                    <span>Don't Cut Corners.</span>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <div className='shape triangle'></div>
                    <span>y - y<sub>1</sub> = m<sub>12</sub>(x - x<sub>1</sub>)</span>
                    <span>y - y<sub>2</sub> = m<sub>23</sub>(x - x<sub>2</sub>)</span>
                    <span>y - y<sub>3</sub> = m<sub>31</sub>·(x - x<sub>3</sub>)</span>
                </div>
                    <span>Third Time's the Charm.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape triangle'></div>
                        <span>|x| + (y / √3) ≤ a</span>
                    </div>
                    <span>Stay Acute.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape rectangle'></div>
                        <span>|x| ≤ w/2, |y| ≤ h/2</span>
                    </div>
                    <span>Stay Balanced and Right.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape rhombus'></div>
                        <span>|x| + |y| ≤ d</span>
                    </div>
                    <span>Diamond in the Rough.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape hexagon'></div>
                        <span>|x| ≤ a, |y| ≤ √3 * a, |y| ≤ √3 * (a - |x|/2)</span>
                    </div>
                    <span>Hex Yeah!</span>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='shape octagon'></div>
                        <span>max(|x| + (1+√2)*|y|, |y| + (1+√2)*|x|) ≤ a*(1+√2)</span>
                    </div>
                    <span>Stop, Reflect, Go.</span>
                </SwiperSlide>
            </Swiper>
            <section>
                <h2>Shop</h2>
                <div className='shop-items'>
                    {shopItems.map((item) => {
                        return <div className='card'
                            onClick={() => clickShopItem(item)}
                            key={item}>
                            <div className={`shape ${item}`}
                                role='button'></div>
                            <span>{item.charAt(0).toUpperCase()}{item.slice(1)}</span>
                        </div>
                    })}
                </div>
            </section>
        </div>
    );
};

export default memo(HomePage);