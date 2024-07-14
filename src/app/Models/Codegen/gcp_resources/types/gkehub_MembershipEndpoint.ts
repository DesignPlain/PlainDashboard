import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkehub_MembershipEndpointGkeCluster,
  gkehub_MembershipEndpointGkeCluster_GetTypes,
} from "./gkehub_MembershipEndpointGkeCluster";

export interface gkehub_MembershipEndpoint {
  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  gkeCluster?: gkehub_MembershipEndpointGkeCluster;
}

export function gkehub_MembershipEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "gkeCluster",
      "If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.\nStructure is documented below.",
      gkehub_MembershipEndpointGkeCluster_GetTypes(),
      false,
      true,
    ),
  ];
}
