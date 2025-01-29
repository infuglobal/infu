
import { NextRequest, NextResponse } from 'next/server';


const verifyGST = async (gst: string) => {
  const apiKey = process.env.BULKPE_API_KEY; // Make sure you store your API key securely in .env file


  const response = await fetch(`https://api.bulkpe.in/gst/verify/${gst}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from Bulkpe');
  }

  return response.json();  // Assuming Bulkpe API returns JSON
};

// Named export handler for Next.js API route
export async function POST(req: NextRequest) {
  try {
    const { gst } = await req.json();

    if (!gst) {
      return NextResponse.json({ message: 'GST number is required' }, { status: 400 });
    }

    const data = await verifyGST(gst);
    if (data && data.valid) {
      return NextResponse.json({ verified: true });
    } else {
      return NextResponse.json({ verified: false, message: 'Invalid GST number' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: `Error verifying GST number ${error} `}, { status: 500 });
  }
}



