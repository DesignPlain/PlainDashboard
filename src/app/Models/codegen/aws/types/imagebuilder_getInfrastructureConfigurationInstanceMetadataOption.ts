import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getInfrastructureConfigurationInstanceMetadataOption {
  // Whether a signed token is required for instance metadata retrieval requests.
  httpTokens?: string;

  // Number of hops that an instance can traverse to reach its destonation.
  httpPutResponseHopLimit?: number;
}

export function imagebuilder_getInfrastructureConfigurationInstanceMetadataOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "httpPutResponseHopLimit",
      "Number of hops that an instance can traverse to reach its destonation.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "httpTokens",
      "Whether a signed token is required for instance metadata retrieval requests.",
      () => [],
      true,
      false,
    ),
  ];
}
