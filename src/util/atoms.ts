import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const club = atom({
  key: "club",
  default: [] as any,
});

export interface IClub {
  id: number;
  name: string;
  description: string;
  img: string;
  status: "PUBLIC" | "PRIVATE";
}
export interface IManager {
  name: string;
  clubs: IClub[];
}

const { persistAtom } = recoilPersist({
  key: "manager",
  storage: localStorage,
});

export const manager = atom<IManager>({
  key: "manager",
  default: undefined,
  effects: [persistAtom],
});
