import { FC } from 'react'
import {withStorageListener} from './WithStorageListener'

interface ChangeAlertProps{
    show: boolean;
}

const  ChangeAlert: FC<ChangeAlertProps> = ({show}) => {
  return (show)?
          <p style = {{marginLeft: '15px;'}}>the todo list is actualized</p>:
          null;
  
}

const ChangeAlertWithStorageLister = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageLister}