"use client"

import React, { useEffect } from 'react'
import * as F from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type New, createSchema } from "./validations";
import { useTransition } from "react";
import { createRoles, updateRole, getRole } from './actions/rolesActions';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormProps {
  defaultValues?: New;
  roleId?: number;
}

function RoleForm({ defaultValues, roleId }: FormProps) {
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

  const onSubmit = (data: New) => {
    startTransition(async () => {
      let result : any;

      if (roleId) {    
        result = await updateRole(roleId, data);
      } else {
        result = await createRoles(data);
      }

      if (result.success) {
        form.reset();
      }

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
    <F.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {roleId}

           {/* USER ID */}
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

            {/* ROLE */}
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

        <Button type="submit" disabled={isPending} className="w-full">
          Submit{isPending && "ting"}
        </Button>
      </form>
    </F.Form>

  )
}

export default RoleForm