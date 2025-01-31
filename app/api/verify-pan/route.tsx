import { NextRequest, NextResponse } from "next/server";

const verifyPAN = async (pan: string) => {
  const apiKey = process.env.BULKPE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing BULKPE API Key");
  }

  const response = await fetch("https://api.bulkpe.in/client/verifyPanLite", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pan }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Failed to fetch data from Bulkpe. Status: ${response.status}`);
  }

  return response.json();
};

export async function POST(req: NextRequest) {
  try {
    const { pan } = await req.json();

    if (!pan) {
      return NextResponse.json({ verified: false, message: "PAN number is required" }, { status: 400 });
    }

    const data = await verifyPAN(pan);
    console.log("Bulkpe API Response:", data); // Debugging log

    // ✅ Corrected Check: Use `data.data.valid` instead of `data.data?.isPanValid`
    if (data.status && data.data?.valid) {
      return NextResponse.json({
        verified: true,
        message: "PAN is valid ✅",
        panDetails: {
          pan: data.data.pan,
          type: data.data.type,
          registeredName: data.data.registered_name,
          panStatus: data.data.pan_status,
          aadhaarSeedingStatus: data.data.aadhaar_seeding_status_desc,
        },
      });
    } else {
      return NextResponse.json({ verified: false, message: "Invalid PAN number ❌" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying PAN:", error);
    return NextResponse.json({ verified: false, message: `Error: ${error}` }, { status: 500 });
  }
}
