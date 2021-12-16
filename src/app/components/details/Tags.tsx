import React from "react"

const Tags = ({ tags }: { tags: string[] }) => {
    return <div className="flex py-8 flex-wrap justify-center">
        {/* tags 
    Adding fixed tags, in case the list is empty
    */}
        {tags.map((tag: string) =>
            <div className='tag'>
                {tag}
            </div>)}
        <div className='tag'>
            <p className="self-center">Hovedretter</p>
        </div>
        <div className='tag'><p className="self-center">Amerikansk</p></div>
        <div className='tag'><p className="self-center">Junk food</p></div>
        <div className='tag'><p className="self-center">Frokost</p></div>
        <div className='tag'><p className="self-center">Nem aftensmad</p></div>
    </div>
}
export default Tags