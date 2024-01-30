/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/dario-piotrowicz/next-on-pages/blob/8e93067/internal-packages/next-dev/README.md
// if (process.env.NODE_ENV === 'development') {
//   import('@cloudflare/next-on-pages/next-dev').then(({ setupDevBindings }) => {
//       setupDevBindings({
//           bindings: {
                
//                 next_kv: {
//                     type: "kv",
//                     id: "a2779a5f97cc441a8c3a4d3eb70dc49a"
//                 },
//                 domains_structure_01: {
//                     type: "kv",
//                     id: "fb147242d55e497e8c810391b9373443"
//                 },
//                 test_kv: {
//                     type: "kv",
//                     id: "3aa9b9b123734d1eb64b06dfe1960efb"
//                 }
//           }
//       })
//   })
// }

// if (process.env.NODE_ENV === 'production') {
//     import('@cloudflare/next-on-pages/next-dev').then(({ setupProductionBindings }) => {
//         setupProductionBindings({
//             bindings: {
//                 omains_structure_01: {
//                     type: "kv",
//                     id: "fb147242d55e497e8c810391b9373443"
//                 },
//             }
//         })
//     })
// }