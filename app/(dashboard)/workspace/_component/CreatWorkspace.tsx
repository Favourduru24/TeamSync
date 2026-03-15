'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus } from "lucide-react";
import { useState } from "react";
import {useForm} from "react-hook-form"
import { Input } from "@/components/ui/input";
import {zodResolver} from '@hookform/resolvers/zod'
import { workspaceSchema } from "@/app/schemas/workspace";

export function CreateWorkSpace() {

    const [open, setOpen] = useState(false)

    const form = useForm({
        resolver: zodResolver(workspaceSchema),
        defaultValues: {
            name: '',
        }
    })

    function onSubmit() {
        console.log('data')
    }

    return (
        <Dialog 
        open={open}
        onOpenChange={setOpen}
        >
            <TooltipProvider>
            <Tooltip>
            <TooltipTrigger asChild>
               <DialogTrigger asChild>
                <Button variant='ghost' size='icon' className="size-12 rounded-xl border-2 border-dashed border-muted-foreground/50 text-muted-foreground hover:border-muted-foreground hover:text-foreground hover:rounded-lg transition-all duration-200 cursor-pointer">
                  <Plus className="size-5"/>
                </Button>
               </DialogTrigger>
           </TooltipTrigger>

            <TooltipContent side="right">
                <p>Create Workspace</p>
            </TooltipContent>
            </Tooltip>
            </TooltipProvider>

            <DialogContent className="sm:max-w-106.25 ">
              <DialogHeader>
                <DialogTitle>Create Workspace</DialogTitle>
                    <DialogDescription>Create a new workspace to get started</DialogDescription>
              </DialogHeader>

              <Form {...form}>
                 <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                     control={form.control}
                     name="name"
                     render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="My Workspace" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                     )}
                    />

                    <Button type="submit">
                        Create Workspace
                    </Button>
                 </form>
              </Form>
            </DialogContent>
        </Dialog>
    )
}