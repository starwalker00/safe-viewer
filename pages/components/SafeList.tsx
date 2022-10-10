import { useSuspense } from "rest-hooks";
import { RestEndpoint } from "@rest-hooks/rest";
import { useEffect, useState } from "react";
import Web3 from "web3";

const getSafes = new RestEndpoint({
    urlPrefix: 'https://safe-transaction.gnosis.io',
    path: '/api/v1/owners/:ownerAddress/safes/',
});

export default function SafeList() {
    const stanieth: string = "0x2E21f5d32841cf8C7da805185A041400bF15f21A";//stani.eth
    const [ownerAddress, setOwnerAddress] = useState(stanieth);
    const { safes } = useSuspense(getSafes, { ownerAddress: Web3.utils.toChecksumAddress(ownerAddress) });
    // console.log(ownerAddress)
    // console.log(safes)
    return (
        <>
            <SearchBar
                searchQuery={ownerAddress}
                setSearchQuery={setOwnerAddress}
            />
            {
                safes.map((safeAddress: any) => {
                    return (<Safe key={safeAddress} address={safeAddress} />)
                })
            }
        </>
    )
}

interface SafeProps {
    address: string;
}
function Safe({ address }: SafeProps) {
    //console.log(address)
    return (
        <div>
            <p>{address}</p>
        </div>
    )
}

interface SearchBarProps {
    searchQuery: any;
    setSearchQuery: any
}
function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
    const [value, setValue] = useState(searchQuery);
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                value={value}
                onChange={(event) => setValue((event.target as HTMLInputElement).value)}
                type="text"
                size={42}
            />
            <button type="button"
                onClick={() => setSearchQuery(value)}>
                Search
            </button>
        </form >
    )
}