import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface edgecontainer_ClusterControlPlaneRemote {
  /*
Name of the Google Distributed Cloud Edge zones where this node pool
will be created. For example: `us-central1-edge-customer-a`.
*/
  nodeLocation?: string;
}

export function edgecontainer_ClusterControlPlaneRemote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "nodeLocation",
      "Name of the Google Distributed Cloud Edge zones where this node pool\nwill be created. For example: `us-central1-edge-customer-a`.",
      [],
      false,
      true,
    ),
  ];
}
