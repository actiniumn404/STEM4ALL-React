import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import Section from "~/components/section/section";

export default function NotFound({message, details, stack}){
    return <>
        <Navbar></Navbar>
        <Section title={message}>

            <main className="pt-16 p-4 container mx-auto text-center">
                <p className="text-center">{details}</p>
                {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                  <code>{stack}</code>
                </pre>
                )}
            </main>
        </Section>
        <Footer></Footer>
    </>
}