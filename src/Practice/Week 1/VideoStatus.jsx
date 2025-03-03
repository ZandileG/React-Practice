import "./VideoStatus.css";

export default function VideoStatus(prop){  
    const status = false;

    return(
    <div>
        <h3 className = {status ? "statusTrue" : "statusFalse"}>Video Status</h3>
        </div>
    );
}