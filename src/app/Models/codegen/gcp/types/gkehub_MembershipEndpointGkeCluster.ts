import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_MembershipEndpointGkeCluster {
  //
  resourceLink?: string;
}

export function gkehub_MembershipEndpointGkeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceLink",
      "",
      () => [],
      true,
      true,
    ),
  ];
}
