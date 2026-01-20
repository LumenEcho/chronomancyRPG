export function getStorageNum(key: string): number {
    return Number(localStorage.getItem(key));
}

export function getStorageString(key: string): string {
    return localStorage.getItem(key);
}

//Updates the localStorage vaule of a number and returns its new value
export function updateStorageNum(key: string, value: number): number {
    localStorage.setItem(key, String(value));
    return value;
}

export//Updates the localStorage value of a string and returns its new value
 function updateStorageString(key: string, value: string): string {
    localStorage.setItem(key, value);
    return value;
}