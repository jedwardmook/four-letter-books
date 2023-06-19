import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

function Scanner() {
    const [scanResult, setScanResult] = useState(null)

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 500,
                height: 500,
            },
            fps: 5,
        })
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setScanResult(result)
        }
    
        function error(err){
            console.warn.apply(err)
        }

    },[]);

  return (
    <div>
        {scanResult ? 
        <div>Success: <p>{scanResult}</p></div> : 
        <div id='reader'></div>}
    </div>
  )
}

export default Scanner