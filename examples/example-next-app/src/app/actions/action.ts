export async function getPageData<T = any>(data: any): Promise<T> {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const res = await fetch(process.env.NEXT_PUBLIC_TRIDION_SITES_GRAPHQL_URL as string, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error(`Server error: ${res.statusText}`);
    }

    return res.json();
}
