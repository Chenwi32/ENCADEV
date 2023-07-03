import { NextRequest, NextResponse } from "next/server";

const Middleware = (req: NextRequest) => {

    console.log('Request', req.nextUrl.pathname)
    return (
NextResponse.next()
    );
}

export default Middleware;