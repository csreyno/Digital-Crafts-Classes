

let navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`

let generateContent = ({page,additional,count})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head><title>My Selection:${page}</title><head>
            <body>
                ${navigation}
                ${heading}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}

module.exports = generateContent
module.exports = navigation