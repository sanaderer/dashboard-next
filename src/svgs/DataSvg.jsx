export default function DataSvg({ width }) {
    return (
        <svg 
            width={width || 26} 
            height={width || 26} 
            viewBox="0 0 26 26" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
        <g 
            opacity="0.2">
            <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M22.5564 15.2291C21.9898 15.0276 21.3723 15.3233 21.1741 15.8888C19.9521 19.3447 16.6663 21.6662 13.0003 21.6662C8.22174 21.6662 4.33366 17.7792 4.33366 12.9996C4.33366 9.33357 6.65524 6.04782 10.1111 4.82582C10.6755 4.62757 10.9712 4.00899 10.7719 3.44457C10.5726 2.88124 9.95399 2.58441 9.38958 2.78482C5.06924 4.31124 2.16699 8.41599 2.16699 12.9996C2.16699 18.9731 7.02683 23.8329 13.0003 23.8329C17.5839 23.8329 21.6887 20.9317 23.2162 16.6103C23.4155 16.047 23.1208 15.4284 22.5564 15.2291ZM15.1667 10.8333V4.41026C18.4827 4.88692 21.1131 7.51617 21.5898 10.8333H15.1667ZM14.0833 2.16667C13.4853 2.16667 13 2.65092 13 3.25001V11.9167C13 12.5158 13.4853 13 14.0833 13H22.75C23.348 13 23.8333 12.5158 23.8333 11.9167C23.8333 6.54009 19.4588 2.16667 14.0833 2.16667Z" 
                fill="black"
            />
        </g>
        </svg>
    );
}