import React from "react";
import EventCard from "./eventCard";

export default function Events({ eventName }) {
  return (
    <div className="bg-white px-7 md:px-12 lg:px-36 mt-10" id="events">
      <h1 className="text-4xl mb-2">Events</h1>
      <svg
        width="200"
        height="16"
        viewBox="0 0 256 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9.84816C4.5582 8.11851 5.77516 8.43493 7.62963 8.43493C8.34816 8.43493 10.8151 8.7621 11.0075 10.0837C11.646 14.4686 14.1709 12.4732 16.0315 10.7903C18.3302 8.7113 22.0044 11.9165 24.1248 13.0934C25.4784 13.8446 26.8294 13.2318 28.2401 13.1457C28.911 13.1047 30.0724 12.541 30.572 11.8372C31.1693 10.9957 31.865 11.4863 32.4753 10.5548C34.7177 7.13221 36.8125 9.37708 39.4198 9.37708C41.9118 9.37708 44.4038 9.37708 46.8957 9.37708C47.6849 9.37708 50.1541 8.76063 50.5995 9.84816C51.0079 10.8457 53.6479 10.5444 54.3889 10.2931C55.5827 9.88817 56.6839 9.94892 57.9383 9.84816C59.0509 9.75879 60.1387 8.90601 61.179 8.90601C62.5165 8.90601 63.8539 8.90601 65.1914 8.90601C67.1085 8.90601 67.8685 11.2614 69.5981 11.2614C70.2611 11.2614 70.9241 11.2614 71.5871 11.2614C72.1114 11.2614 72.6824 11.3592 73.1989 11.209C73.9008 11.005 73.7966 10.0989 74.3134 9.63879C75.4413 8.63462 76.6445 7.49278 78 7.49278C79.4443 7.49278 81.6199 6.8309 82.9383 7.59746C84.6552 8.59574 86.3227 9.37708 88.168 9.37708C88.7396 9.37708 89.3112 9.37708 89.8827 9.37708C90.7238 9.37708 91.1304 10.3192 91.8889 10.3192C92.4033 10.3192 92.9177 10.3192 93.4321 10.3192C93.8655 10.3192 94.3427 10.4115 94.7696 10.2931C95.1146 10.1973 94.8708 9.51271 95.3011 9.40325C97.4715 8.85113 99.8124 8.71423 102.074 8.90601C103.242 9.00502 105.044 9.15317 105.915 10.2931C106.748 11.3824 108.059 10.7482 108.933 10.2146C110.42 9.30668 110.815 7.49278 112.499 7.49278C113.69 7.49278 114.831 7.0217 116.134 7.0217C117.153 7.0217 118.213 6.85917 119.204 7.25724C119.978 7.5683 121.012 8.39109 121.759 8.43493C122.799 8.49599 124.986 9.12647 125.822 10.0837C126.835 11.2427 128.4 10.7903 129.68 10.7903C131.075 10.7903 131.917 9.37708 133.316 9.37708C134.233 9.37708 134.065 8.44131 134.859 8.06854C135.519 7.75837 136.311 7.82174 136.951 7.38809C138.111 6.6008 139.242 6.55062 140.5 6.55062C143.403 6.55062 145.96 8.90601 148.919 8.90601C150.276 8.90601 151.471 8.77589 152.794 8.40876C153.273 8.2758 154.022 7.54149 154.543 7.25724C154.999 7.00887 156.349 6.80264 156.635 6.44594C158.427 4.2082 161.75 6.22285 163.837 6.57679C164.728 6.72793 165.7 6.9772 166.58 7.25724C167.179 7.44775 168.595 7.11868 169.049 7.70214C169.69 8.52515 171.972 9.37708 172.907 9.37708C174.173 9.37708 175.898 8.84494 176.92 10.0575C178.003 11.3438 179.173 11.2614 180.469 11.2614C182.659 11.2614 185.915 10.9041 187.636 8.53961C189.006 6.65843 193.935 7.96385 195.593 7.96385C197.547 7.96385 198.562 6.2999 200.222 5.03271C200.834 4.56617 201.077 3.63575 201.765 3.35777C202.431 3.08899 203.241 3.25309 203.926 3.25309C205.303 3.25309 206.613 3.72416 207.938 3.72416C209.774 3.72416 211.418 4.53147 213.185 4.66632C214.399 4.75892 215.499 5.13739 216.735 5.13739C218.294 5.13739 218.629 4.0221 220.044 3.35777C221.386 2.72767 223.277 3.25309 224.674 3.25309C225.363 3.25309 228.742 2.54947 229.235 3.48862C229.735 4.4438 232.746 3.81741 233.624 4.29992C234.49 4.77575 235.907 5.60847 236.796 5.60847C242.24 5.60847 247.608 6.07955 253 6.07955"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 justify-between text-center mt-10 text-white">
        {eventName.map((name) => {
          return <EventCard name={name} key={name} />;
        })}
      </div>
    </div>
  );
}
