export const handleStatus = res => { return res.ok ? res.json(): Promise.reject(res.statusText)};

export const log = res => { 
    console.log(res, 'log');
    return res; 
} 