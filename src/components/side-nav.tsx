import { useState } from 'react';
import { CollapseIcon, ExpandIcon, PlusIcon } from '../icons';
import Button from './input/icon-button';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const iconSize = 44;

  const sidebarClasses =
    'h-full w-1/4 bg-primary rounded-lg w-[150px]shadow-lg p-1 flex flex-col transition-all ease-in-out';
  const finalSidebarClasses = isOpen
    ? sidebarClasses // if open, show sidebar
    : sidebarClasses + ' w-10 overflow-hidden'; // if closed, hide sidebar

  return (
    <div className={finalSidebarClasses}>
      <div className="flex items-center w-full justify-between">
        <Button onClick={() => setIsOpen(!isOpen)} className="border-none">
          {isOpen ? (
            <CollapseIcon size={iconSize} />
          ) : (
            <ExpandIcon size={iconSize} />
          )}
        </Button>
        <Button onClick={() => {}} className="border-none">
          <div className="flex items-center gap-2 w-8">
            <PlusIcon size={iconSize} />
            <p className="text-sm">Add new</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
