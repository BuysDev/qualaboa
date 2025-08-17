import { Button } from "../ui/button";
import CityFilter from "./city-filter";
import StateFilter from "./state-filter";

export default function Filters() {
    return (
        <div>
            <StateFilter />
            <CityFilter />
            <Button className="cursor-pointer bg-violet-500 text-white font-bold" variant={'secondary'}>
                Filtrar
            </Button>
        </div>
    )
}