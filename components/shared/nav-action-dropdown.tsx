import Link from "next/link";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const actionlinks = [
    {
        id: 1,
        title: 'Start a Campaign',
        href: '/create-donation'
    },
    {
        id: 2,
        title: 'Create a Petiton',
        href:'/create-petition'
    }
]
export const ActionDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='font-bold'>
          Donate or Start Petition
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px]">
        {
            actionlinks.map((action) => (
                <DropdownMenuItem key={action.id} className="py-3" asChild>
                <Link href={action.href}>{action.title}</Link>
              </DropdownMenuItem>                
            ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );