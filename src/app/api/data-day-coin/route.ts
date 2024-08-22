import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const symbol = searchParams.get('symbol')
  const market = searchParams.get('market')

  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${market}&apikey=PU1W7JUNDG05R3UG`, {
      method: 'GET',
      headers: {
        'User-Agent': 'request'
      }
    })
    const data = await response.json()
    return NextResponse.json({ message: 'API call of sucess!!', data })
  } catch (error) {
    console.log('Error of server', error)
  }
}