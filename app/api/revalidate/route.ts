import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Chỉ những người có admin token thì mới có thể thực hiện request revalidatePath này

  const token = request.nextUrl.searchParams.get("token");

  // Nếu không có token, return lỗi
  if (!token || token !== process.env.ADMIN_TOKEN)
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });

  revalidatePath(`/[lang]/post/[slug]`);
  revalidatePath(`/[lang]/[category]`);
  revalidatePath(`/[lang]`);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
