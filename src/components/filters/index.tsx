'use client'

import { Button } from "../ui/button";
import CityFilter from "./city-filter";
import StateFilter from "./state-filter";
import { useCityStore } from '@/lib/stores/filters/city'
import { useStateStore } from '@/lib/stores/filters/state'
import { useFinalFilter } from '@/lib/stores/filters/final-filter'

export default function Filters() {
    const stateCode = useStateStore((state) => state.stateCode)
    const cityCode = useCityStore((city) => city.CityCode)

    const setFinalState = useFinalFilter((filter) => filter.setState)
    const setFinalCity = useFinalFilter((filter) => filter.setCity)

    return (
        <div>
            <StateFilter />
            <CityFilter />
            <Button
                disabled={!stateCode}
                className="cursor-pointer bg-violet-500 text-white font-bold"
                variant="secondary"
                onClick={() => {
                    setFinalState(stateCode)
                    setFinalCity(cityCode)
                }}
            >
                Filtrar
            </Button>
        </div>
    )
}
