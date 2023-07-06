import { dataProviders } from "@group-generators/helpers/data-providers";
import { ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Once,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
    const ensSubdomainProvider = new dataProviders.EnsSubdomainProvider();
    const params = {
      domain: "sismo",
    };

    const groupData = await ensSubdomainProvider.getEnsSubdomains(params);

    return [
      {
        name: "sismo-subdomain-holders",
        timestamp: context.timestamp,
        description: "get all holders of a sismo.eth subdomain",
        specs: "",
        data: groupData,
        valueType: ValueType.Score,
        tags: [],
      },
    ];
  },
};
export default generator;
