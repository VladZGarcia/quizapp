import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { clerkUserId, email, username } = await req.json();

    if (!clerkUserId || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (existingUser) {
      // Update existing user
      const { data, error } = await supabase
        .from("users")
        .update({
          email,
          username,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_user_id", clerkUserId)
        .select()
        .single();

      if (error) throw error;
      return NextResponse.json({ user: data });
    }

    // Create new user
    const { data, error } = await supabase
      .from("users")
      .insert({
        clerk_user_id: clerkUserId,
        email,
        username,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ user: data }, { status: 201 });
  } catch (error: any) {
    console.error("Error saving user:", error);
    return NextResponse.json(
      { error: error.message || "Failed to save user" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const clerkUserId = searchParams.get("clerkUserId");

    if (!clerkUserId) {
      return NextResponse.json(
        { error: "Missing clerkUserId" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json({ user: null });
      }
      throw error;
    }

    return NextResponse.json({ user: data });
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch user" },
      { status: 500 }
    );
  }
}
