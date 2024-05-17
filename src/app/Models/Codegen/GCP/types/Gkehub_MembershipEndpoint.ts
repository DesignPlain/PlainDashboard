import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_MembershipEndpointGkeCluster,
  Gkehub_MembershipEndpointGkeCluster_GetTypes,
} from "./Gkehub_MembershipEndpointGkeCluster";

export interface Gkehub_MembershipEndpoint {
  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  GkeCluster?: Gkehub_MembershipEndpointGkeCluster;
}

export function Gkehub_MembershipEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GkeCluster",
      "If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.\nStructure is documented below.",
      Gkehub_MembershipEndpointGkeCluster_GetTypes(),
      false,
      true,
    ),
  ];
}
