"use client"

import React from 'react'
import * as F from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type New, createSchema } from "../validations";
import { useTransition } from "react";
import { createRoles } from '../actions/rolesActions';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface FormProps {
  defaultValues?: New;
}

function RoleForm({ defaultValues }: FormProps) {

  return (

    <div className="w-100 space-y-4 bg-slate-50 rounded shadow-md p-10">
      <Link href="/role2">
          <Button variant="default"> ↩️ Back</Button>
      </Link>
 
      {/* <RoleForm/> */}
  </div>
  )
}

export default RoleForm