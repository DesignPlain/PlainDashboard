import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_MembershipEndpointGkeCluster {
  //
  ResourceLink?: string;
}

export function Gkehub_MembershipEndpointGkeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ResourceLink", "", [], true, true),
  ];
}
