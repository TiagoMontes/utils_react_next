'use client';

import { useRouter } from "next/navigation";
import { useLocalData } from "../Hooks/useLocalData"

export default function TestePage() {
    const { valueOne, valueTwo } = useLocalData()
    const router = useRouter()

    function returnRoute() {
        router.push('/')
    }

    return (
        <div>
            <h1>This is the value stored in jotai that persisted between routes.</h1>
            {
                valueOne && valueTwo !== undefined ? (
                    <p><strong>{valueOne} {valueTwo}</strong> - Now JOTAI has stored the values. Please check your local storage.</p>
                ): (
                    <p>Jotai does not have any stored values.</p>  
                )
            }

            <button onClick={returnRoute}>
                Back
            </button>
        </div>
    )
}