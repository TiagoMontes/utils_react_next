'use client';

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { testInitialValue } from "../types"

const initialValues: testInitialValue = {
    valueOne: '',
    valueTwo: ''
}

const localDataAtom = atomWithStorage<testInitialValue>('key', initialValues)

export const useLocalData = () => {
    const [localData, setLocalData] = useAtom(localDataAtom)

    function updateLocalData(newData: testInitialValue) {
        setLocalData(newData)
    }

    return { valueOne: localData.valueOne, valueTwo: localData.valueTwo, updateLocalData}
}