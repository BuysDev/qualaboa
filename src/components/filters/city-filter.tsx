'use client'

import { cities } from '@/lib/data/brasil/cities'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCityStore } from '@/lib/stores/filters/city'
import { useStateStore } from '@/lib/stores/filters/state'

export default function CityFilter() {
    const stateCode = useStateStore((state) => state.stateCode)

    const filteredCities = stateCode
        ? cities.filter(city => city.stateId === stateCode)
        : []

    const setCityCode = useCityStore((city) => city.setCityCode)

    return (
        <Select onValueChange={(value) => setCityCode(value)} disabled={!stateCode}>
            <SelectTrigger className="w-[180px] border-gray-500" disabled={!stateCode}>
                <SelectValue placeholder={stateCode ? "Selecione uma cidade" : "Selecione um estado primeiro"} />
            </SelectTrigger>
            <SelectContent className='border-gray-500 bg-white'>
                {filteredCities.map((city, index) => (
                    <SelectItem value={city.city} key={index}>
                        {city.city}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
