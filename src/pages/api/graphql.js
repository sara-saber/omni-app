import httpProxy from 'http-proxy'

const API_URL = process.env.BACKEND_URL + "/graphql"
const proxy = httpProxy.createProxyServer()

export const config = {
    api: {
        bodyParser: false,
    },
}


export default function handler(req, res) {
    const cookieDomainRewrite = {}

    cookieDomainRewrite[process.env.MAGENTO_DOMAIN] = process.env.STOREFRONT_DOMAIN

    console.log("xxxx1232345:",API_URL);
    console.log("xxxx1232345:",cookieDomainRewrite);

    return new Promise((resolve, reject) => {
        proxy.web(req, res, { target: API_URL, changeOrigin: true, cookieDomainRewrite }, (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        })
    })
}