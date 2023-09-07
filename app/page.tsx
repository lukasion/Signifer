import {Button, Container, Typography} from "@mui/material";
import Navigation from "@/app/components/navigation";

export default function Home() {
    return (
        <main>
            <Navigation/>

            <Container maxWidth="lg" sx={{mt: 12}}>

                <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                    Dostępne obiekty
                </Typography>

                <Typography variant="h4" sx={{fontWeight: 'bold', mt: 12}}>
                    Szukaj według rodzaju obiektu
                </Typography>
            </Container>
        </main>
    )
}
