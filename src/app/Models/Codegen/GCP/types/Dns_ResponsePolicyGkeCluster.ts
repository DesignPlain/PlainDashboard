import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_ResponsePolicyGkeCluster {
  /*
The resource name of the cluster to bind this ManagedZone to.
This should be specified in the format like
`projects/-/locations/-/clusters/-`
*/
  GkeClusterName?: string;
}

export function Dns_ResponsePolicyGkeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GkeClusterName",
      "The resource name of the cluster to bind this ManagedZone to.\nThis should be specified in the format like\n`projects/*/locations/*/clusters/*`",
      [],
      true,
      false,
    ),
  ];
}
