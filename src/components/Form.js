import { useState } from "react";
import youtubeApi from "../api/Youtube";

function Form() {
    const [url, setUrl] = useState("");
    function getYoutubeData() {
        const urlRegex = /https:\/\/((youtu.be)|(www.youtube.com))\/(watch\?v=)?([\S]{11})/;
        const regexMatches = urlRegex.exec(url);
        const urlId = regexMatches.pop();
        youtubeApi.get(urlId)
    }
    function resetInputValue() {
        setUrl("")
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input placeholder="URLを入力してください"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <button onClick={getYoutubeData} style={{ marginLeft: '10px' }}>検索</button>
            <button onClick={resetInputValue} style={{ marginLeft: '10px' }}>クリア</button>
        </div>
    );
}

export default Form;