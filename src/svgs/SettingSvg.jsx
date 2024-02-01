export default function SettingSvg({ width }) {
    return (
        <svg 
            width={width || 26} 
            height={width || 26} 
            viewBox="0 0 26 26" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2">
            <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M4.76969 12.5906C5.97869 13.0055 6.94178 14.0174 7.34478 15.3L7.38811 15.43C7.84961 16.7907 7.66219 18.2554 6.88869 19.3539C6.74786 19.5532 6.77928 19.7915 6.92769 19.9042L9.17236 21.6094C9.25144 21.6689 9.32836 21.6689 9.37603 21.6635C9.43019 21.6549 9.50927 21.6256 9.57319 21.5346L9.82344 21.1793C10.5699 20.1209 11.7724 19.4676 13.042 19.4308C14.4677 19.4015 15.7482 20.0548 16.5455 21.2064L16.6734 21.3916C16.7373 21.4826 16.8153 21.5129 16.8705 21.5216C16.9182 21.5314 16.9962 21.5281 17.0742 21.4674L19.3069 19.7829C19.4629 19.6659 19.4976 19.4156 19.3817 19.2477L19.1 18.8414C18.3742 17.7928 18.1586 16.4321 18.5237 15.2025C18.9202 13.8635 19.9288 12.804 21.2234 12.3707L21.4411 12.297C21.6155 12.2396 21.7098 12.0229 21.648 11.8236L20.7954 9.09253C20.7554 8.9647 20.673 8.90728 20.6275 8.88345C20.5625 8.84986 20.4921 8.84445 20.4249 8.8672L20.0566 8.98961C18.7967 9.40886 17.4068 9.18136 16.3397 8.37861L16.2227 8.29086C15.2087 7.5282 14.6053 6.29861 14.6096 5.00295L14.6118 4.69961C14.6118 4.55553 14.5435 4.46561 14.5024 4.42445C14.4634 4.38436 14.3973 4.3367 14.3041 4.3367L11.5449 4.33345C11.3759 4.33345 11.2383 4.49486 11.2372 4.6942L11.2361 4.95636C11.2307 6.27261 10.6143 7.52495 9.58728 8.3082L9.44753 8.41436C8.31761 9.27345 6.84428 9.51611 5.50961 9.06111C5.45869 9.04378 5.41103 9.04703 5.36553 9.07086C5.33086 9.0882 5.26803 9.13261 5.23769 9.2312L4.35261 12.0435C4.28869 12.2483 4.39378 12.4617 4.59203 12.5299L4.76969 12.5906ZM9.33161 23.8334C8.80511 23.8334 8.29378 23.6623 7.86261 23.334L5.61794 21.6299C4.54544 20.8174 4.30819 19.2542 5.08819 18.1459C5.49336 17.5718 5.57678 16.834 5.33844 16.1342L5.27886 15.9522C5.08061 15.3217 4.62778 14.832 4.06769 14.6403H4.06661L3.89003 14.5785C2.57053 14.1268 1.86636 12.7282 2.28561 11.3935L3.16961 8.58228C3.37003 7.94636 3.80228 7.43286 4.38728 7.13711C4.95928 6.84894 5.60603 6.80453 6.21053 7.01145C6.85944 7.23244 7.57986 7.1122 8.13561 6.68969L8.27536 6.58353C8.76936 6.20653 9.06728 5.59444 9.06944 4.9477L9.07053 4.68661C9.07594 3.29561 10.1864 2.16678 11.5438 2.16678H11.5481L14.3074 2.17003C14.9595 2.17111 15.5749 2.42895 16.0385 2.89586C16.5184 3.37795 16.7806 4.02253 16.7784 4.71045L16.7763 5.0127C16.7741 5.62586 17.0547 6.20545 17.5281 6.56078L17.644 6.64853C18.1413 7.02228 18.7891 7.12953 19.3709 6.93453L19.7381 6.81211C20.3632 6.60411 21.0284 6.65503 21.6144 6.95511C22.2157 7.26278 22.6599 7.79253 22.8635 8.44794L23.7161 11.179C24.1278 12.4985 23.4149 13.922 22.129 14.3521L21.9113 14.4247C21.2873 14.6349 20.7965 15.1549 20.6004 15.8179C20.4206 16.4256 20.5246 17.094 20.881 17.6075L21.1627 18.0138C21.9362 19.1318 21.6892 20.7004 20.6124 21.5119L18.3796 23.1975C17.8434 23.6027 17.1858 23.7663 16.526 23.6612C15.8609 23.5539 15.2802 23.1856 14.8913 22.6244L14.7634 22.4381C14.3843 21.8921 13.7776 21.5606 13.1417 21.5964C12.5047 21.6137 11.9544 21.9159 11.5947 22.4273L11.3444 22.7826C10.9523 23.3384 10.3705 23.7013 9.70861 23.8053C9.58186 23.8248 9.45619 23.8334 9.33161 23.8334ZM13 11.375C12.1041 11.375 11.375 12.1041 11.375 13C11.375 13.8959 12.1041 14.625 13 14.625C13.8959 14.625 14.625 13.8959 14.625 13C14.625 12.1041 13.8959 11.375 13 11.375ZM13 16.7917C10.9092 16.7917 9.20833 15.0908 9.20833 13C9.20833 10.9092 10.9092 9.20834 13 9.20834C15.0908 9.20834 16.7917 10.9092 16.7917 13C16.7917 15.0908 15.0908 16.7917 13 16.7917Z" 
                fill="black"
            />
        </g>
        </svg>
    );
}