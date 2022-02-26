import axios from 'axios'
import * as cheerio from 'cheerio';

const scrape = async () => {

    const { data } = await axios.get(`https://etherscan.io/token/0xf669F717AB2980A86078f4196dcAAFcBE4AF8577#comments`)

    const $ = cheerio.load(data)

    const coin = {}

    coin.name = ($('.text-secondary.small').text().split(' ')[0])
    coin.maxSupply = $('.col-md-8.font-weight-medium').text()

    return coin
}


export default scrape