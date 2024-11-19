import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ messahe: "Failed to fetch PDF" }, { status: 200 });
// }

// export async function GET(request: NextRequest) {
//   const url = "https://morth.nic.in/sites/default/files/dd12-13_0.pdf";

//   if (!url) {
//     return NextResponse.json(
//       { error: "URL parameter is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const response = await fetch(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const pdfBuffer = await response.arrayBuffer();

//     // return new NextResponse(pdfBuffer, {
//     //   headers: {
//     //     "Content-Type": "application/pdf",
//     //     "Content-Length": pdfBuffer.byteLength.toString(),
//     //     "Access-Control-Allow-Origin": "*",
//     //     "Cache-Control": "no-store", // Disable caching
//     //   },
//     // });
//     return new NextResponse(pdfBuffer);
//   } catch (error) {
//     console.error("Proxy error:", error);
//     return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 });
//   }
// }

export async function GET(request: NextRequest) {
  const url = "https://morth.nic.in/sites/default/files/dd12-13_0.pdf";

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Convert PDF buffer to base64
    const pdfBuffer = await response.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

    return NextResponse.json(
      { data: pdfBase64 },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Optional for CORS
          "Cache-Control": "no-store", // Optional to disable caching
        },
      }
    );
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 });
  }
}
