
 import { NextRequest, NextResponse, userAgent } from 'next/server'

 export default function middleware(request: NextRequest) {
    const url = request.method
    console.log(
    url
    );
    
    
    return NextResponse.rewrite(url)
  }