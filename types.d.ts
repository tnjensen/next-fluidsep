type Post = {
    "id": number,
    "title": {
        string,
        "rendered": string
    },
    "content": string,
    "rendered": string,
    "_embedded": {
        string,
        "wp:featuredmedia": string,
        "alt_text": string
    }
}