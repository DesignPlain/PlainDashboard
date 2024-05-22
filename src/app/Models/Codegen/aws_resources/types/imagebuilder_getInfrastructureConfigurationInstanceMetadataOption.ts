import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getInfrastructureConfigurationInstanceMetadataOption {
  // Number of hops that an instance can traverse to reach its destonation.
  httpPutResponseHopLimit?: number;

  // Whether a signed token is required for instance metadata retrieval requests.
  httpTokens?: string;
}

export function imagebuilder_getInfrastructureConfigurationInstanceMetadataOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "Number of hops that an instance can traverse to reach its destonation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "Whether a signed token is required for instance metadata retrieval requests.",
      [],
      true,
      false,
    ),
  ];
}
