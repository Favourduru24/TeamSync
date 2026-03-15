import { ReactNode } from 'react'
import { WorkspaceList } from './_component/WorkspaceList'
import { CreateWorkSpace } from './_component/CreatWorkspace'
import { UserNav } from './_component/UserNav'

const WorkspaceLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex w-full h-screen'>
       <div className='flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border'>
         <WorkspaceList/>

         <div className='mt-4'>
         <CreateWorkSpace/>
         </div>

         <div className='mt-auto'>
           <UserNav/>
         </div>
       </div>
       {children}
    </div>
  )
}

export default WorkspaceLayout
