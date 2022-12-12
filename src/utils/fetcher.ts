export default function fetcher<T>(...args: any[]): Promise<T> { return fetch(...args as [any, any]).then(res => res.json()) };
