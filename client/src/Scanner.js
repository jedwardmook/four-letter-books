import React, { useEffect } from 'react'
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats, Html5QrcodeScanType} from 'html5-qrcode'

function Scanner({setIsbn}) {

    const formatsToSupport = [
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.EAN_8,
      ];

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 500,
                height: 350,
            },
            fps: 5,
            aspectRatio: 1.333334,
            formatsToSupport: formatsToSupport,
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        })
    
        scanner.render(success, error);
    
        function success(result){
            scanner.clear();
            setIsbn(result)
        }
    
        function error(err){
            console.warn.apply(err)
        }

    },[]);

  return (
    <div>
        <div id='reader'></div>
    </div>
  )
}

export default Scanner