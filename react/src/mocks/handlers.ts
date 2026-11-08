import { http, HttpResponse } from "msw";

export const handlers = [
    http.get(
        "https://api-pub.bitfinex.com/v2/ticker/tBTCUSD",
        () => HttpResponse.json([
            67120.0,
            1.25,
            67121.0,
            1.1,
            215.5,
            0.0032,
            67123.45,
            482.75,
            67900.0,
            65800.0,
            1710000000000,
        ]),
    ),
];
