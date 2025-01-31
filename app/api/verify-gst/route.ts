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

  return response.json(); // Assuming Bulkpe API returns JSON
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
      // Return all GST data as per the schema
      return NextResponse.json({
        verified: true,
        gstData: {
          gstNumber: data.gstNumber,
          legalName: data.legalName,
          centerJurisdiction: data.centerJurisdiction,
          stateJurisdiction: data.stateJurisdiction,
          dateOfRegistration: data.dateOfRegistration,
          constitutionOfBusiness: data.constitutionOfBusiness,
          taxpayerType: data.taxpayerType,
          gstinStatus: data.gstinStatus,
          dateOfCancellation: data.dateOfCancellation || null,
          fieldVisitConducted: data.fieldVisitConducted,
          natureBusActivities: data.natureBusActivities || [],
          coreBusinessActivityCode: data.coreBusinessActivityCode,
          coreBusinessActivityDescription: data.coreBusinessActivityDescription,
          aadhaarValidation: data.aadhaarValidation,
          aadhaarValidationDate: data.aadhaarValidationDate,
          address: data.address,
          hsnInfo: data.hsnInfo || {},
          filingFrequency: data.filingFrequency || [],
          reference: data.reference,
          addressDetails: data.addressDetails || {},
          einvoiceStatus: data.einvoiceStatus || false,
          panNumber: data.panNumber,
          filingStatus: data.filingStatus || [],
        },
      });
    } else {
      return NextResponse.json({ verified: false, message: 'Invalid GST number' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: `Error verifying GST number: ${error}` }, { status: 500 });
  }
}