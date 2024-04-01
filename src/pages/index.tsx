import { GetStaticProps } from 'next';

interface HomeProps {
    currentDateTime: string;
}

export default function Check({ currentDateTime }: HomeProps) {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Current Date and Time</h1>
                <p className="text-2xl">{currentDateTime}</p>
            </div>
        </main>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // Generate current date and time during build time
    const currentDateTime = new Date().toLocaleString();

    // Pass data to the page component as props
    return {
        props: {
            currentDateTime,
        },
        revalidate: 3600, // In seconds
    };
};
