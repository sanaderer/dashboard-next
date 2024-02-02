export default function ProfileSvg({ width }) {
    return (
        <svg 
            width={width || 40}  
            height={width || 40}  
            viewBox="0 0 44 44" 
            fill="black" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" 
                    fill="#yourFillColor"
                />
        </svg>
    );
}