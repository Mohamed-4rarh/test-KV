// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

export const runtime = 'edge'
export async function GET(request, context) {
  const myKv = process.env.domains_structure_01;

  const data = {
    value: "first value",
    userID: "123",
    storeID: "store123"
  }

  // let jsonString = JSON.stringify(data);
  let jsonString = JSON.stringify(data);
  await myKv.put("data", jsonString)
  const kvValue = await myKv.get("user-name")

  return new Response(kvValue)
}

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = process.env.MY_KV
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix
