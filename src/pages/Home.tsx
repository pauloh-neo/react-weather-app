import { FormSearch } from "../components/FormSearch";
import { Header } from "../components/Header";

export function Home(){
    return(
        <main className="flex flex-col justify-center items-center">
            <Header>
                Weather APP
            </Header>
            <FormSearch/>
        </main>
    )
}