export function getStorageNum(key: string): number {
    return Number(localStorage.getItem(key));
}

export function getStorageString(key: string): string {
    return localStorage.getItem(key);
}

//Returns a parsed, any type object
export function getJSONStorageString(key: string): any {
    return JSON.parse(localStorage.getItem(key));
}

//Updates the localStorage vaule of a number and returns its new value
export function updateStorageNum(key: string, value: number): number {
    localStorage.setItem(key, String(value));
    return value;
}

//Updates the localStorage value of a string and returns its new value
export function updateStorageString(key: string, value: string): string {
    localStorage.setItem(key, value);
    return value;
}

//Updates the local storage for an object and returns its updated value
export function updateJSONStorageString(key: string, value: any): any {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}