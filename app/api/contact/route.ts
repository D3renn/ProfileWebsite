import { NextRequest, NextResponse } from 'next/server';

// This runs on the server (backend)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // TODO: Here you would:
    // - Save to database
    // - Send email
    // - Call external API
    console.log('Contact form submission:', { name, email, message });
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET request example
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Contact API is running',
    timestamp: new Date().toISOString()
  });
}
