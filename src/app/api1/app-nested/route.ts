export const dynamic = 'force-dynamic';

export async function GET() {
  const data = { test: true };

  return Response.json({ data });
}
