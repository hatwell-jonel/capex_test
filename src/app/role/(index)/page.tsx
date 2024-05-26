import { db } from "@/db";
import { searchParamsCache } from "./_searchParams";
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { role } from "@/db/schema";
import { revalidatePath } from "next/cache";

type PageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const { limit } = searchParamsCache.parse(searchParams);
  const list = await db.query.role.findMany({
    limit,
  });

  return (
    <div className={`flex flex-col w-full justify-end rounded shadow-xl bg-slate-50 p-10`}>

      <h1 className={`text-4xl text-center`}>ROLES</h1>

      <div className={``}>
        <Link href="/role/create">
          <Button>Create</Button>
        </Link>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((u, i) => (
            <TableRow key={u.id}>
              <TableCell className="w-15">{i+1}</TableCell>
              <TableCell className="w-15">{u.user_id}</TableCell>
              <TableCell>{u.name}</TableCell>
              <TableCell className="w-10">
                <div className="flex gap-2">

                  <form
                    action={async () => {
                      "use server";
                      await db
                        .update(role)
                        .set({ name: "some name" })
                        .where(eq(role.id, u.id));
                      revalidatePath("/role");
                    }}
                  >
                    <Button variant="default" size="sm" type="submit">
                      Edit
                    </Button>
                  </form>

                  <Link href={`/role/${u.id}`}>
                    <Button>Edit</Button>
                  </Link>

                  <form
                    action={async () => {
                      "use server";
                      await db.delete(role).where(eq(role.id, u.id));
                      revalidatePath("/role");
                    }}
                  >
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </form>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
