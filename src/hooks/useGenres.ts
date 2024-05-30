import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");
  return { genres, error, isLoading };
};
export default useGenres;

// Action
// Indie
// Adventure
// RPG
// Strategy
// Shooter
// Casual
// Simulation
// Puzzle
// Arcade
// Platformer
// Racing
// Massively Multiplayer
// Sports
// Fighting
// Family
// Board Games
// Educational
// Card
