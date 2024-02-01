export default function UserSvg({ width }) {
    return (
        <svg 
            width={width || 26} 
            height={width || 26} 
            viewBox="0 0 26 26" 
            fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M20.5833 22.6297C20.5833 23.2941 20.0645 23.8334 19.4226 23.8334C18.7807 23.8334 18.2619 23.2941 18.2619 22.6297C18.2619 19.311 15.6584 16.6111 12.4583 16.6111C9.25822 16.6111 6.65474 19.311 6.65474 22.6297C6.65474 23.2941 6.1359 23.8334 5.49403 23.8334C4.85215 23.8334 4.33331 23.2941 4.33331 22.6297C4.33331 17.9834 7.97912 14.2037 12.4583 14.2037C16.9375 14.2037 20.5833 17.9834 20.5833 22.6297M12.4583 4.57409C13.7386 4.57409 14.7797 5.65382 14.7797 6.9815C14.7797 8.30919 13.7386 9.38891 12.4583 9.38891C11.178 9.38891 10.1369 8.30919 10.1369 6.9815C10.1369 5.65382 11.178 4.57409 12.4583 4.57409M12.4583 11.7963C15.0188 11.7963 17.1012 9.63687 17.1012 6.9815C17.1012 4.32613 15.0188 2.16669 12.4583 2.16669C9.89778 2.16669 7.81546 4.32613 7.81546 6.9815C7.81546 9.63687 9.89778 11.7963 12.4583 11.7963" 
                fill="black"
            />
        </svg>
    );
}