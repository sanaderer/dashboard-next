export default function AddSvg({ width }) {
    return (
        <svg 
            width={width || 40} 
            height={width || 40}  
            viewBox="0 0 44 44" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="#4339F2"
                />
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M29 21H23V15C23 14.447 22.552 14 22 14C21.448 14 21 14.447 21 15V21H15C14.448 21 14 21.447 14 22C14 22.553 14.448 23 15 23H21V29C21 29.553 21.448 30 22 30C22.552 30 23 29.553 23 29V23H29C29.552 23 30 22.553 30 22C30 21.447 29.552 21 29 21" 
                    fill="white"
                />
        </svg>
    );
}