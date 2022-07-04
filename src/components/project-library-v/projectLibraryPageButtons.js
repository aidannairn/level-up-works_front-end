export default function ProjectLibraryPageButtons() {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <>
            <div className='pl-page-btns'>
                <button className='pl-btt-btn' onClick={backToTop}>BACK TO TOP</button>
                <button className='pl-btd-btn'>BACK TO DASHBOARD</button>
            </div>
        </>
    )
}
