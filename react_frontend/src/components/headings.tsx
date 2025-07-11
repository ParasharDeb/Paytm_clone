export default function Heading({children}:{children: string}) {
    return(
        <div className="text-2xl font-serif font-bold text-center my-8 text-black">
            {children}
        </div>
    )
}