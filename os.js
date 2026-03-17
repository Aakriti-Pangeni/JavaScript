import os, { networkInterfaces } from 'os';

export const platform = () =>{
    console.log(os.platform())
}

export const arch = () =>{
    console.log(os.arch())
}

export const version = () =>{
    console.log()
}

export const homeDir = () => {
    console.log("HomeDir" + os.homedir())
    console.log("Hostname" + os.hostname())
    console.log("Cpus" +os.cpus())
    console.log("Free Mem " + os.freemem())
    console.log("Total mem " +  os.totalmem())
    console.log("version " +  os.version())
    console.log("Network" +  os.networkInterfaces())
    // console.log( )
}