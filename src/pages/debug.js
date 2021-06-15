import React from 'react'

function debug() {
    return (
        <div>
            <div>
                <p>ㄱㄱ{process.env.google_id}</p>
                <p>ㄱㄱ ㅅㅋㄹ{process.env.google_secret}</p>
            </div>
            <div>
                <p>ㄱㅎㅂ ㅍㅂㄹ{process.env.github_id}</p>
                <p>ㄱㅎㅂ ㅅㅋㄹ{process.env.github_secret}</p>
            </div>
            <div>
                <p>ㅎㅅㅌ{process.env.host}</p>
                <p>ㄴㅅㅌ auth url{process.env.next_url}</p>
            </div>
            <div>
                <p>ㅅㅌㄹㅇㅍ ㅍㅂㄹ{process.env.stripe_public_key}</p>
                <p>ㅅㅌㄹㅇㅍ ㅅㅋㄹ{process.env.stripe_secret_key}</p>
                <p>ㅅㅌㄹㅇㅍ ㅅㅇㅇ{process.env.stripe_signing_key}</p>
            </div>
        </div>
    )
}

export default debug
