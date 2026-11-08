import { useCallback, useEffect, useState } from "react";

import PrimaryButton from  "@/app/components/buttons/primary-button";
import TanStackComponent, {
    type TanStackPriceStatus,
} from "@/app/widgets/tanstack-component";
import "./tanstack.css";

const COMPONENT_COUNT = 20;

export default function Tanstack() {
    const [started, setStarted] = useState(false);
    const [componentStatuses, setComponentStatuses] = useState<
        Record<number, TanStackPriceStatus>
    >({});

    function handleStart() {
        const loadingStatuses: Record<number, TanStackPriceStatus> = {};

        for (let componentId = 1; componentId <= COMPONENT_COUNT; componentId += 1) {
            loadingStatuses[componentId] = "loading";
        }

        setComponentStatuses(loadingStatuses);
        setStarted(true);
    }

    const handlePriceStatusChange = useCallback((
        componentId: number,
        status: TanStackPriceStatus,
    ) => {
        setComponentStatuses((currentStatuses) => {
            if (currentStatuses[componentId] === status) {
                return currentStatuses;
            }

            return { ...currentStatuses, [componentId]: status };
        });
    }, []);

    const components = Array.from({ length: COMPONENT_COUNT }, (_, index) => {
        const componentId = index + 1;

        return (
            <TanStackComponent
                key={componentId}
                componentId={componentId}
                componentName={`Component #${componentId}`}
                onPriceStatusChange={handlePriceStatusChange}
                started={started}
            />
        );
    });

    const loadedCount = Object.values(componentStatuses).filter(
        (status) => status === "loaded",
    ).length;
    const errorCount = Object.values(componentStatuses).filter(
        (status) => status === "error",
    ).length;
    const allLoaded = loadedCount === COMPONENT_COUNT;
    const settledCount = loadedCount + errorCount;
    const allSettled = settledCount === COMPONENT_COUNT;

    useEffect(() => {
        if (started && allSettled) {
            setStarted(false);
        }
    }, [allSettled, started]);

    return (
        <section className="tanstack-page">
            <p className="tanstack-page__description">
                Start requesting Bitcoin prices from each component. Cache API calls for 30 seconds.
            </p>
            <div className="tanstack-page__actions">
                <PrimaryButton onClick={handleStart} disabled={started}>
                    Start2
                </PrimaryButton>
                <p
                    className="tanstack-page__progress"
                    role="status"
                    aria-live="polite"
                    data-state={allLoaded ? "loaded" : errorCount > 0 ? "error" : "loading"}
                >
                    {!started
                        ? `${COMPONENT_COUNT} components waiting`
                        : allLoaded
                            ? `All ${COMPONENT_COUNT} components loaded the price`
                            : `${loadedCount}/${COMPONENT_COUNT} components loaded${errorCount ? ` · ${errorCount} failed` : ""}`}
                </p>
            </div>
            <div className="tanstack-page__grid">{components}</div>
        </section>
    );
}
