import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterMasterAuthorizedNetworksConfigCidrBlock {
  /*
External network that can access Kubernetes master through HTTPS.
Must be specified in CIDR notation.
*/
  CidrBlock?: string;

  // Field for users to identify CIDR blocks.
  DisplayName?: string;
}

export function Container_ClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CidrBlock",
      "External network that can access Kubernetes master through HTTPS.\nMust be specified in CIDR notation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "Field for users to identify CIDR blocks.",
      [],
      false,
      false,
    ),
  ];
}
