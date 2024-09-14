import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_getDomainNodeToNodeEncryption {
  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;
}

export function opensearch_getDomainNodeToNodeEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      () => [],
      true,
      false,
    ),
  ];
}
