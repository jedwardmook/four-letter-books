import React, { useEffect, useState } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

function Scanner() {
    const [cameraId, setCameraId] = useState()
    const [scanResult, setScanResult] = useState()

    useEffect(() => {
        Html5Qrcode.getCameras().then(devices => {
        if (devices && devices.length) {
             setCameraId(devices[0].id)
          }
        }).catch(err => {
          console.log(err)
        });  
        
    }, [])

    const html5QrCode = new Html5Qrcode('reader');

    const startScan = () => {
        html5QrCode.start(
            cameraId,
            {
                fps: 10,
                qrbox: 250
            },
            (decodedResult) => {
                console.log(decodedResult)},
            (errorMessage) => {
                // 
            })               
            .catch((err) => {
                console.log(err)
            })
        }

    const stopScan = () => {
        html5QrCode.stop().then(ignore => {
            console.log(ignore);
          }).catch(err => { 
            console.log(err)
          });
    }
    
        
    
        

  return (
    <div>
        <div id='reader' style={width= 300}></div>
        <button onClick={startScan}>Start Scan</button> 
        <button onClick={stopScan}>Stop Scan</button>
    </div>
  )
}

export default Scanner