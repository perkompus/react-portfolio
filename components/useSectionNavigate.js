import { useRouter } from 'expo-router';

// On the home page (onNavigate given) sections scroll in place;
// elsewhere, go to the home page and scroll there via ?section=
export default function useSectionNavigate(onNavigate) {
    const router = useRouter();

    return (section) => {
        if (onNavigate) {
            onNavigate(section);
        } else {
            router.navigate(section === 'home' ? '/' : { pathname: '/', params: { section } });
        }
    };
}
