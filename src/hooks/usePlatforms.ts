import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default usePlatforms;
