export default function HotSvg({ width }) {
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
                d="M8.11969 10.3095C5.91835 12.6918 5.96494 16.4683 8.25944 18.8072C9.3796 19.9523 10.8681 20.5839 12.4541 20.585H12.4595C14.0488 20.585 15.5427 19.9534 16.6683 18.8072C19.0039 16.426 18.9996 12.5531 16.6585 10.1752L13.4237 6.86996C13.0965 9.55879 12.0879 11.9183 10.2918 11.9183C9.74144 11.9183 8.84444 11.6735 8.11969 10.3095ZM12.4595 22.7516H12.4519C10.2788 22.7495 8.23994 21.8882 6.71135 20.3228C3.55452 17.1053 3.55019 11.8695 6.7016 8.65746L7.76652 7.58063C8.04169 7.30546 8.44144 7.19929 8.81952 7.29788C9.19544 7.39971 9.48794 7.69546 9.58544 8.07246C9.8346 9.03554 10.1314 9.50896 10.295 9.68879C10.6796 9.28363 11.3751 7.64671 11.3751 4.87663C11.3751 4.71738 11.3751 4.56679 11.3664 4.41621C11.3459 4.09663 11.4683 3.78354 11.7001 3.56254C12.1302 3.15413 12.8192 3.15413 13.2319 3.57879L18.2044 8.65854C21.3678 11.8695 21.3732 17.1053 18.2153 20.3239C16.678 21.8904 14.6349 22.7516 12.4595 22.7516Z" 
                fill="black"
            />
        </g>
        </svg>
    );
}