import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kwmxfcxdzvmcpzpophzs.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3bXhmY3hkenZtY3B6cG9waHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzQ5OTAsImV4cCI6MjA1MTkxMDk5MH0.UxrHblOIZuvNPXXi2dEf5QEVmq1LLe5uBHhV7Jbr9L4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
