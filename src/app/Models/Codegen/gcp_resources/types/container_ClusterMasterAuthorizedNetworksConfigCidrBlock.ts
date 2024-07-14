import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterMasterAuthorizedNetworksConfigCidrBlock {
  /*
External network that can access Kubernetes master through HTTPS.
Must be specified in CIDR notation.
*/
  cidrBlock?: string;

  // Field for users to identify CIDR blocks.
  displayName?: string;
}

export function container_ClusterMasterAuthorizedNetworksConfigCidrBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidrBlock",
      "External network that can access Kubernetes master through HTTPS.\nMust be specified in CIDR notation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Field for users to identify CIDR blocks.",
      [],
      false,
      false,
    ),
  ];
}
