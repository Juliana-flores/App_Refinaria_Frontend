import  SmartQueueService  from './smartQueueService';
import env from '../config/env';


class BootLoader {
    static load() {
        const { apiParams } = env;

        console.log('apiPARAMS', apiParams)

        const smartQueueService = new SmartQueueService({ apiParams });


        return {
            smartQueueService,
        }
    }
}


export default BootLoader;