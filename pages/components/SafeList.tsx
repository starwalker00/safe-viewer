import { useSuspense } from "rest-hooks";
import { RestEndpoint } from "@rest-hooks/rest";

const getSafes = new RestEndpoint({
    urlPrefix: 'https://safe-transaction.gnosis.io',
    path: '/api/v1/owners/:address/safes/',
});

export function SafeList() {
    const address: string = "0x2E21f5d32841cf8C7da805185A041400bF15f21A";//stani.eth
    const { safes } = useSuspense(getSafes, { address });
    console.log(safes)
    return (
        safes.map((safeAddress: any) => {
            return (<Safe address={safeAddress} />)
        })
    )
}

interface SafeProps {
    address: string;
}
function Safe({ address }: SafeProps) {
    console.log(address)
    return (
        <div>
            <p>{address}</p>
        </div>
    )
}
