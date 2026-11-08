import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchBitcoinUsdPrice } from "@/app/entities/crypto/api/bitfinex";

const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
});

export type TanStackPriceStatus = "not-started" | "loading" | "loaded" | "error";

type Props = {
    componentId: number;
    componentName: string;
    onPriceStatusChange: (
        componentId: number,
        status: TanStackPriceStatus,
    ) => void;
    started: boolean;
};

export default function TanStackComponent({
    componentId,
    componentName,
    onPriceStatusChange,
    started,
}: Props) {
    const {
        data: bitcoinPrice,
        error,
        isError,
        isFetching,
        isPending,
        isSuccess,
    } = useQuery({
        queryKey: ["crypto", "ticker", "BTCUSD"],
        queryFn: fetchBitcoinUsdPrice,
        enabled: started,
        staleTime: 30_000,
    });

    const priceStatus: TanStackPriceStatus = isFetching
        ? "loading"
        : isSuccess
            ? "loaded"
            : isError
                ? "error"
                : started || isPending
                    ? "loading"
                    : "not-started";

    useEffect(() => {
        onPriceStatusChange(componentId, priceStatus);
    }, [componentId, onPriceStatusChange, priceStatus, started]);

    const priceText = isSuccess && typeof bitcoinPrice === "number"
        ? usdFormatter.format(bitcoinPrice)
        : !started
            ? "Not started"
            : isPending
                ? "Loading…"
                : isError
                    ? "Unavailable"
                    : "Unavailable";


    return (
        <article className="tanstack-card">
            <h2 className="tanstack-card__title">Component {componentName}</h2>
            <p className="tanstack-card__status" data-state={priceStatus}>
                Status: {priceStatus}
            </p>
            <p className="tanstack-card__price-label">
                Request bitcoin price from all component at once:{" "}
                <span
                    className="tanstack-card__price"
                    data-state={priceStatus}
                    title={isError ? String(error) : undefined}
                >
                    {priceText}
                </span>
            </p>
        </article>
    );
}
