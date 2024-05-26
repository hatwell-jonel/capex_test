import Link from "next/link";
import { Form } from "./_interactive";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="w-100 space-y-4 bg-slate-50 rounded shadow-md p-10">
      <Link href="/role">
        <Button variant="default"> ↩️ Back</Button>
      </Link>
      <Form />
    </div>
  );
}

