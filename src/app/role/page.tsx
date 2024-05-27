
import React from 'react'
import { deleteRole, getRoles } from './actions/rolesActions'
import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DeleteButton from '@/components/roles/DeleteButton';
import { db } from '@/db';
import { role } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';


async function Page() {

  const page = '/role';
  const roles = await getRoles();

  return (
    <div className={`flex flex-col w-full justify-end rounded shadow-xl bg-slate-50 p-10`}>
      <h1 className={`text-3xl font-bold underline underline-offset-1 text-center mb-4`}>ROLES</h1>

      <div>
        <Link href={`/role/create`}>
          <Button>Create</Button>
        </Link>

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
          {roles.length > 0 ? (
            roles.map((u, i) => (
              <TableRow key={u.id}>
                <TableCell className="w-15">{i+1}</TableCell>
                <TableCell className="w-15">{u.user_id}</TableCell>
                <TableCell>{u.name}</TableCell>
                <TableCell className="w-10">
                  <div className="flex gap-2">
                    <Link href={`/role/${u.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <DeleteButton id={u.id} >
                      Delete
                    </DeleteButton>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
                <TableCell colSpan={4} className="text-center underline text-gray-600">
                  No data available
                </TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
      </div>
    
    </div>
  );
}

export default Page;