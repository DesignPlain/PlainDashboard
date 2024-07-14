import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dns_ManagedZonePrivateVisibilityConfigGkeCluster {
  /*
The resource name of the cluster to bind this ManagedZone to.
This should be specified in the format like
`projects/-/locations/-/clusters/-`
*/
  gkeClusterName?: string;
}

export function dns_ManagedZonePrivateVisibilityConfigGkeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "gkeClusterName",
      "The resource name of the cluster to bind this ManagedZone to.\nThis should be specified in the format like\n`projects/*/locations/*/clusters/*`",
      [],
      true,
      false,
    ),
  ];
}
