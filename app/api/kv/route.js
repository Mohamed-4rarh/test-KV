
export const runtime = 'edge'

export async function GET() {
    const user = await process.env.domains_structure_KV.get("user-id")
    return new Response("userID: " + user)
}