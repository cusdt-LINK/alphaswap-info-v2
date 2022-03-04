interface Config {
  kccScanUrl: string;
}

const kccScanUrl = `https://api.coingecko.com/api/v3/simple/price?ids=kucoin-shares&vs_currencies=usd&include_24hr_change=true`;

const config: Config = {
  kccScanUrl: kccScanUrl,
};

export default config;
