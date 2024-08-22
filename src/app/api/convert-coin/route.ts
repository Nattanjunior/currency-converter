import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const amount = searchParams.get('amount')


  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/5690198e76fb65359227a7be/pair/${from}/${to}/${amount}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    return NextResponse.json({message:"API response", data})
  } catch (e) {
    console.log('Error call API', e)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}