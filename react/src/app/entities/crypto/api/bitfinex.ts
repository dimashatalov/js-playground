const BITFINEX_BTC_USD_TICKER_URL =
    "https://api-pub.bitfinex.com/v2/ticker/tBTCUSD";

export async function fetchBitcoinUsdPrice(): Promise<number> {
    const response = await fetch(BITFINEX_BTC_USD_TICKER_URL);

    if (!response.ok) {
        throw new Error(`Bitfinex request failed with status ${response.status}`);
    }

    const ticker: unknown = await response.json();

    if (!Array.isArray(ticker) || typeof ticker[6] !== "number" || !Number.isFinite(ticker[6])) {
        throw new Error("Bitfinex returned an invalid BTC/USD ticker response");
    }

    return ticker[6];
}
