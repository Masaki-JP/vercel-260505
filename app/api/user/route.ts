export async function GET() {
    return Response.json({
        http_metchod_name: "GET"
    })
}

export async function POST() {
    return Response.json({
        http_metchod_name: "POST"
    })
}