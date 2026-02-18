import GridInventory from './GridInventory';
import { useAppSelector } from '../../store';
import { selectCraftingInventory } from '../../store/inventory';

interface Props {
  onHeaderMouseDown?: (e: React.MouseEvent) => void;
  isLocked?: boolean;
  onToggleLock?: () => void;
}

const CraftingInvPanel: React.FC<Props> = ({ onHeaderMouseDown, isLocked, onToggleLock }) => {
  const craftingInventory = useAppSelector(selectCraftingInventory);

  return (
    <GridInventory
      inventory={craftingInventory}
      onHeaderMouseDown={onHeaderMouseDown}
      isLocked={isLocked}
      onToggleLock={onToggleLock}
      canSort={true}
    />
  );
};

export default CraftingInvPanel;
