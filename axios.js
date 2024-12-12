const XMLHttpRequest = require('xhr2');

const http = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: JSON.parse(xhr.responseText) });
                } else {
                    reject(`Error: ${xhr.status} ${xhr.statusText}`);
                }
            };

            xhr.onerror = () => {
                reject('Network error');
            };

            xhr.send();
        });
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: JSON.parse(xhr.responseText) });
                } else {
                    reject(`Error: ${xhr.status} ${xhr.statusText}`);
                }
            };

            xhr.onerror = () => {
                reject('Network error');
            };

            xhr.send(JSON.stringify(data));
        });
    },
    put: (url, data) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PUT', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: JSON.parse(xhr.responseText) });
                } else {
                    reject(`Error: ${xhr.status} ${xhr.statusText}`);
                }
            };

            xhr.onerror = () => {
                reject('Network error');
            };

            xhr.send(JSON.stringify(data));
        });
    },
    patch: (url, data) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('PATCH', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: JSON.parse(xhr.responseText) });
                } else {
                    reject(`Error: ${xhr.status} ${xhr.statusText}`);
                }
            };

            xhr.onerror = () => {
                reject('Network error');
            };

            xhr.send(JSON.stringify(data));
        });
    },
    delete: (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: 'Resource deleted' });
                } else {
                    reject(`Error: ${xhr.status} ${xhr.statusText}`);
                }
            };

            xhr.onerror = () => {
                reject('Network error');
            };

            xhr.send();
        });
    },
};
