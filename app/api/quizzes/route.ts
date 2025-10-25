import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { clerkUserId, title, inputText, questions } = await req.json();

    if (!clerkUserId || !title || !questions) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get the user from Supabase
    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (!user) {
      return NextResponse.json(
        { error: "User not found. Please sign in again." },
        { status: 404 }
      );
    }

    // Save the quiz
    const { data, error } = await supabase
      .from("quizzes")
      .insert({
        user_id: user.id,
        title,
        input_text: inputText,
        questions,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ quiz: data }, { status: 201 });
  } catch (error: any) {
    console.error("Error saving quiz:", error);
    return NextResponse.json(
      { error: error.message || "Failed to save quiz" },
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

    // Get the user from Supabase
    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (!user) {
      return NextResponse.json({ quizzes: [] });
    }

    // Get all quizzes for this user
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ quizzes: data });
  } catch (error: any) {
    console.error("Error fetching quizzes:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch quizzes" },
      { status: 500 }
    );
  }
}
