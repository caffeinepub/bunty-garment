import { useQuery } from "@tanstack/react-query";
import type { BusinessInfo, T } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProductCategories() {
  const { actor, isFetching } = useActor();
  return useQuery<T[]>({
    queryKey: ["productCategories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProductCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBusinessInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<BusinessInfo>({
    queryKey: ["businessInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "Bunty Garment",
          address: "Noida, Uttar Pradesh",
          phone: "8130865401",
        };
      }
      return actor.getBusinessInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
