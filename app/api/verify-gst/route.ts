import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // For generating unique reference IDs

const verifyGST = async (gst: string) => {
  const apiKey = process.env.BULKPE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing BULKPE API Key");
  }

  // Generate a unique reference ID for each request
  const reference = uuidv4();

  const response = await fetch("https://api.bulkpe.in/client/verifyGstin", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gstin: gst, // GST number
      reference: reference, // Unique reference ID
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Failed to fetch data from Bulkpe. Status: ${response.status}`);
  }

  return response.json();
};

export async function POST(req: NextRequest) {
  try {
    const { gst } = await req.json();

    if (!gst) {
      return NextResponse.json({ verified: false, message: "GST number is required" }, { status: 400 });
    }

    const data = await verifyGST(gst);

    // Check if the GST is valid based on the API response
    if (data.status) {
      return NextResponse.json({
        verified: true,
        message: "GST is valid ✅",
        gstData: {
          gstNumber: data.data.gstin, // Ensure the key matches the API response
          legalName: data.data.legal_name,
          centerJurisdiction: data.data.center_jurisdiction,
          stateJurisdiction: data.data.state_jurisdiction,
          dateOfRegistration: data.data.date_of_registration,
          constitutionOfBusiness: data.data.constitution_of_business,
          taxpayerType: data.data.taxpayer_type,
          gstinStatus: data.data.gstin_status,
          dateOfCancellation: data.data.date_of_cancellation || null,
          fieldVisitConducted: data.data.field_visit_conducted,
          natureBusActivities: data.data.nature_of_business_activities || [],
          coreBusinessActivityCode: data.data.core_business_activity_code,
          coreBusinessActivityDescription: data.data.core_business_activity_description,
          aadhaarValidation: data.data.aadhaar_validation,
          aadhaarValidationDate: data.data.aadhaar_validation_date,
          address: data.data.address,
          hsnInfo: data.data.hsn_info || {},
          filingFrequency: data.data.filing_frequency || [],
          reference: data.data.reference,
          addressDetails: data.data.address_details || {},
          einvoiceStatus: data.data.einvoice_status || false,
          panNumber: data.data.pan_number,
          filingStatus: data.data.filing_status || [],
        },
      });
    } else {
      return NextResponse.json({ verified: false, message: data.message || "Invalid GST number ❌" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying GST:", error);
    return NextResponse.json({ verified: false, message: `Error: ${error}` }, { status: 500 });
  }
}