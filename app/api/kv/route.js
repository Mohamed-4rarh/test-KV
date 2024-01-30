
export const runtime = 'edge'

export async function GET(context) {
    const user = await context.env.domains_structure_01.get("user-name")
    return new Response("userID: " + user)
}