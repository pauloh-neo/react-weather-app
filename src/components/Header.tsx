import type { PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren

export function Header({children}: HeaderProps){
    return(
        <h1 className="bg-orange-300 text-4xl font-medium text-gray-800 text-center p-2 rounded-2xl">{children}</h1>
    )
}