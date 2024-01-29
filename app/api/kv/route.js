
export const runtime = 'edge'

export async function GET() {
    const user = await process.env.domains_structure_01.get("user-id")
    return new Response("userID: " + user)
}