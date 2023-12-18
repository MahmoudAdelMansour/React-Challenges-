function Button({message,children})
{
    return (
        <button onClick={()=>alert(message)}>
            {children}
        </button>
    );
}

function ButtonTwo({onSmash , children})
{
    return (
    <button onClick={onSmash}>
        {children}
    </button>
    );
}

function PlayButton({movieName})
{
    function handlePlayClick() {
        alert(`Playing ${movieName}`);
    }

    return (
        <ButtonTwo onSmash={handlePlayClick}>
                Play "{movieName}"
        </ButtonTwo>
    ) ;

}

function UploadButton()
{
    return (
        <ButtonTwo onSmash={() => alert("Uploading ..")}>
            Upload Image
        </ButtonTwo>
    )
}

export default function Toolbar()
{
    return (
        <div>
            <PlayButton movieName="Avatar2"/>
            <UploadButton/>
        </div>
    );

}