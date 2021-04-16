import React from 'react'

export default function AdoptSensor() {
    const [data, setData] = useState({ hits: [] });
       
        useEffect(async () => {
          const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
          );
       
          setData(result.data);
        });
    return (
        <div>
            
        </div>
    )
}
