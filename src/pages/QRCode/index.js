import {QRCode} from 'antd';
function Code(){
  return (
    <QRCode value={'https://www.youtube.com/'} errorLevel='L'/>
  )
}

export default Code;