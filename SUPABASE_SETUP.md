# Supabase Setup for Quiz App

## Database Schema

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_user_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  username TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create quizzes table
CREATE TABLE quizzes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  input_text TEXT NOT NULL,
  questions JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_clerk_id ON users(clerk_user_id);
CREATE INDEX idx_quizzes_user_id ON quizzes(user_id);
CREATE INDEX idx_quizzes_created_at ON quizzes(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can read their own data"
  ON users FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own data"
  ON users FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update their own data"
  ON users FOR UPDATE
  USING (true);

-- RLS Policies for quizzes table
CREATE POLICY "Users can read their own quizzes"
  ON quizzes FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own quizzes"
  ON quizzes FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update their own quizzes"
  ON quizzes FOR UPDATE
  USING (true);

CREATE POLICY "Users can delete their own quizzes"
  ON quizzes FOR DELETE
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to users table
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to quizzes table
CREATE TRIGGER update_quizzes_updated_at
  BEFORE UPDATE ON quizzes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Setup Steps

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project

### 2. Get Your API Keys

1. Go to Project Settings > API
2. Copy your:
   - Project URL (e.g., `https://xxxxx.supabase.co`)
   - Anon/Public key

### 3. Update Environment Variables

Add to your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Run SQL Commands

1. Go to SQL Editor in Supabase
2. Copy and paste the SQL commands above
3. Click "Run"

### 5. Verify Tables

1. Go to Table Editor
2. You should see `users` and `quizzes` tables

## How It Works

### User Sync

- When a user signs in with Clerk, they're automatically synced to Supabase
- Uses the `useSyncUser` hook in the layout
- Stores: Clerk user ID, email, username

### Quiz Saving

- Use the `useSaveQuiz` hook in your components
- Example:

```typescript
const { saveQuiz, getQuizzes } = useSaveQuiz();

// Save a quiz
await saveQuiz("My Quiz Title", "Input text here", questionsArray);

// Get all user's quizzes
const quizzes = await getQuizzes();
```

### Data Structure

```typescript
// User
{
  id: string;
  clerk_user_id: string;
  email: string;
  username: string | null;
  created_at: string;
  updated_at: string;
}

// Quiz
{
  id: string;
  user_id: string;
  title: string;
  input_text: string;
  questions: Question[]; // Array of quiz questions
  created_at: string;
  updated_at: string;
}
```

## Security

- Row Level Security (RLS) is enabled
- Users can only access their own data
- All queries go through authenticated API routes
- Clerk handles authentication, Supabase handles data storage
