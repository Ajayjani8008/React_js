import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((error) => console.error('Error fetching currency data:', error));
    }, [baseCurrency]);

    return data;
}

export default useCurrencyInfo;