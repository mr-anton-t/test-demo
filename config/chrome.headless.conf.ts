import merge from 'deepmerge';
import globalConfig from './global.conf';

const localConfig = {
    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true,
       'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1440,735']
        }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
};

//export default merge(globalConfig, localConfig);

const config: any = merge(globalConfig, localConfig);
export {config};
