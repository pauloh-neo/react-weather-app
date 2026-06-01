import type { PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren

export function Header({children}: HeaderProps){
    return(
        <h1 className="text-2xl font-medium text-gray-800">{children}</h1>
    )
}