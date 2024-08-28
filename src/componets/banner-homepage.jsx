// Image slider component for restaurants
import "../styles/banner-homepage.css";

function Banner() {
  return (
    <div className="relative isolate overflow-hidden sm:py-16 bg-custom-image">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <h2 className="text-4xl font-bold tracking-tight text-pink-800 sm:text-6xl">
          Hungry?!
        </h2>
        <p className="sm:text-3xl mt-10 text-gray-900 text-lg leading-8 font-serif">
          We’ve Got You Covered!
          <br />
          Get Your Favorite Snacks Delivered Hot and Fresh
          <br />
          in <span className="text-purple-600 font-sans">30 Minutes</span> or
          Less...
        </p>
        <h2 className="font-bold tracking-tight text-green-600 sm:text-6xl mt-10">
          Anytime, Anywhere!
        </h2>
        <p className="mt-6 leading-8 text-gray-600 w-1/2 text-justify">
          {" "}
          With a wide variety of snacks, meals, and treats at your fingertips,
          SnackMates makes it easier than ever to satisfy your hunger. Whether
          it’s late-night munchies or a midday meal, we’ve got you covered.
          Experience the joy of effortless ordering and speedy delivery, all
          from the comfort of your couch!
        </p>
      </div>
    </div>
  );
}
export default Banner;
