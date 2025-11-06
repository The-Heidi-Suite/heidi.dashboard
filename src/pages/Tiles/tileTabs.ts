import { TranslationKey } from '@/translation/translation';

interface TabItem {
  id: number;
  name: TranslationKey;
}

export const TILE_TABS: TabItem[] = [
  {
    id: 0,
    name: 'tile.tabs.allTiles',
  },
  {
    id: 1,
    name: 'tile.tabs.pendingTiles',
  },
  {
    id: 2,
    name: 'tile.tabs.inactiveTiles',
  },
  {
    id: 3,
    name: 'tile.tabs.hiddenTiles',
  },
];
