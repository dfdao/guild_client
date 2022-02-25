import { Planet } from "@darkforest_eth/types";
import { LocationId } from "@darkforest_eth/types";
import { BigNumber } from "ethers";
import { BigNumberish } from "ethers";
import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";

function getPlanetWithId(locationId?: BigNumberish) : Planet | undefined {
    // @ts-expect-error
    return df.getPlanetWithId(locationId)
}

export function PlanetCell({locationId}: {locationId: BigNumberish}): JSX.Element {
    const [planet, setPlanet] = useState<Planet | undefined>()
    const location = BigNumber.from(locationId)

    useEffect(() => {
        setPlanet(getPlanetWithId(location))
    }, [location])

    return <span>{location.toHexString().slice(0, 10)}</span>
}