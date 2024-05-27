"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { deleteRole } from '@/app/role/actions/rolesActions';
import { toast } from 'sonner';

function DeleteButton(
  {id, children} : 
  {id : number,  children :  React.ReactNode}) {

  const handleDelete = async () =>  {
    if(confirm("Are you sure to delete this item?")){  
      try {
        const  result = await deleteRole(id);
        
        toast.success(result.message,{
          position: "top-right",
          style: {
            backgroundColor: '#D1FFBD',
            color: '#000',
            fontWeight: 'bold',
          },
        });
        
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  return (
    <Button variant="destructive" size="sm"  onClick={() => handleDelete()}>
      {children}
    </Button>
  )
}

export default DeleteButton