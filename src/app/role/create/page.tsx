import React from 'react'
import RoleForm from '../RoleForm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


function CreateRole() {
  return (
    <div className="flex justify-center">
      <div className="w-96 space-y-4 bg-slate-50 rounded shadow-md p-10">
          <h1 className='text-3xl font-bold underline underline-offset-1 text-center mb-4'>CREATE ROLE</h1>
          <Link href="/role">
              <Button variant="default"> ↩️ Back</Button>
          </Link>
          <RoleForm/>
      </div>
    </div>
  )
}

export default CreateRole