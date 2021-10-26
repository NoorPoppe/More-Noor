import Image from 'next/image';
export default function Skeleton() {
    return (
        <div className="skeleton">
            <h1>loading </h1>
            <h2>we are searching for you cat</h2>
            <Image src="/error.svg" alt="cat out of the bag" width={1372} height={724} />
        </div>
    )
}