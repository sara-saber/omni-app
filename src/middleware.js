import { NextResponse } from 'next/server'

export function middleware(request) {
    // const token = request.cookies.get('token')
    // if (request.nextUrl.pathname.startsWith('/my-account') && !token) {
    //     console.log(token);
    //     return NextResponse.redirect(new URL('/account/login', request.url))
    // }
    // else if (request.nextUrl.pathname.startsWith('/account') && token) {
    //     return NextResponse.redirect(new URL('/my-account/dashboard', request.url))
    // }
}

