'use client'

import { states } from '@/lib/data/brasil/states'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useStateStore } from '@/lib/stores/filters/state'

export default function StateFilter() {
    const setStateCode = useStateStore((state) => state.setStateCode)

    return (
        <Select onValueChange={(value) => setStateCode(value)}>
            <SelectTrigger className="w-[180px] border-gray-500">
                <SelectValue placeholder="Selecione um estado" />
            </SelectTrigger>
            <SelectContent className="border-gray-500 bg-white">
                {states.map((state, index) => (
                    <SelectItem value={state.id} key={index}>
                        {state.state}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
