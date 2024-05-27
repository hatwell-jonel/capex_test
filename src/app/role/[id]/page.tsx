"use client"

import React, { use, useEffect, useState } from 'react'
import * as F from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type New, createSchema } from "../validations";
import { useTransition } from "react";
import { createRoles, getRole, updateRole } from '../actions/rolesActions';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import RoleForm from '../RoleForm';
import { usePathname } from 'next/navigation'
import { log } from 'console';

type RoleProps = [
  id ?: number,
  name ?: string,
  user_id ?: string,
]

interface FormProps {
  defaultValues?: New;
  roleId?: number;
}

function EditRole({defaultValues}: FormProps) {  
  const pathname = usePathname();
  const parts = pathname.split('/')
  const roleId = parseInt(parts[parts.length - 1]);

  const emptyValues = {
    name: "",
    user_id: "",
  } satisfies New;

  const form = useForm<New>({
    resolver: zodResolver(createSchema),
    mode: "onChange",
    defaultValues: defaultValues || emptyValues,
  });

  const [isPending, startTransition] = useTransition();
  const { setValue } = form;

  useEffect(() => {

    const fetchRole = async () => {
      const result = await getRole(roleId);
      setValue('name', result[0].name);
      setValue('user_id', result[0].user_id);
    }

    fetchRole()
  }, [roleId, setValue])

  const onSubmit = (data: New) => {
    startTransition(async () => {
      const result = await updateRole(roleId, data);
      toast.success(result.message, {
        position: "top-right",
        style: {
          backgroundColor: '#D1FFBD',
          color: '#000',
          fontWeight: 'bold',
        },
      });
    });
  };


  return (
    <div className="w-100 space-y-4 bg-slate-50 rounded shadow-md p-10">

      <h1 className='mb-5'>UPDATE ROLE</h1>

      <Link href="/role">
          <Button variant="default"> ↩️ Back</Button>
      </Link>

  
      <F.Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {roleId}
            <F.FormField
                name="user_id"
                control={form.control}
                render={({ field }) => (
                  <F.FormItem>
                    <F.FormLabel>User ID</F.FormLabel>
                    <F.FormControl>
                      <Input 
                      {...field} 
                      placeholder="Enter User ID" />
                    </F.FormControl>
                    <F.FormMessage />
                  </F.FormItem>
                )}
              />

              <F.FormField
                name="name"
                control={form.control}
                render={({ field }) => ( 
                  <F.FormItem>
                    <F.FormLabel>Role</F.FormLabel>
                    <F.FormControl>
                      <Input 
                      {...field}  
                      placeholder="Enter Role" />
                    </F.FormControl>
                    <F.FormMessage />
                  </F.FormItem> 
                )}
              />

          <Button type="submit" disabled={isPending}>
            Submit{isPending && "ting"}
          </Button>
        </form>
      </F.Form>



  </div>
  )
}

export default EditRole