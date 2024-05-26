
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


async function Page() {

  const roles = await getRoles();

  return (
    <div className={`flex flex-col w-full justify-end rounded shadow-xl bg-slate-50 p-10`}>
      <h1 className={`text-4xl text-center`}>ROLES</h1>

      <div className={``}>
        <Link href="/role2/create">
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
          {roles.map((u, i) => (
            <TableRow key={u.id}>
              <TableCell className="w-15">{i+1}</TableCell>
              <TableCell className="w-15">{u.user_id}</TableCell>
              <TableCell>{u.name}</TableCell>
              <TableCell className="w-10">
                <div className="flex gap-2">
                  <Link href={`/role2/${u.id}`}>
                    <Button>Edit</Button>
                  </Link>
                  
                  <DeleteButton id={u.id} >
                    Delete
                  </DeleteButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    
    </div>
  );
}

export default Page;