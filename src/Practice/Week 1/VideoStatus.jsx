import "./VideoStatus.css";

export default function VideoStatus(){  
    const status = true;

    return(
    <div>
        <h3 className = {status ? "statusTrue" : "statusFalse"}>Video Status</h3>
        </div>
    );
}