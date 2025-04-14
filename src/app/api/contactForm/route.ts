 
// write for user registration 

import { NextResponse , NextRequest } from 'next/server'
import { createClient } from '@/app/utils/supabase/server'


export async function POST(request: NextRequest) {

    const supabase = await createClient()
    const body = await request.json()
    const { name, email, message } = body
    console.log(name, email, message)
    
    const { data, error } = await supabase.from('user_queries').insert([
        {
        name,
        email,
        message,
        },
    ])
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ data }, { status: 200 })
    }