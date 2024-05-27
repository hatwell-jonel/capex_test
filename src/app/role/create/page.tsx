import React from 'react'
import RoleForm from '../RoleForm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


function CreateRole() {
  return (
    <div className="w-100 space-y-4 bg-slate-50 rounded shadow-md p-10">
        <Link href="/role">
            <Button variant="default"> ↩️ Back</Button>
        </Link>
        <RoleForm/>
    </div>
  )
}

export default CreateRole