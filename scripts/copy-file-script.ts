// imports from master, this should be avoided
// import { copy } from "https://deno.land/std/fs/copy.ts";

// imports from v0.77.0 of std, never changes
import { copy } from "https://deno.land/std@0.77.0/fs/copy.ts";
copy("text.txt", "text-copy.txt");
