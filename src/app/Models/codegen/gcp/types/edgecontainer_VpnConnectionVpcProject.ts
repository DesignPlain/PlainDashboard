import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface edgecontainer_VpnConnectionVpcProject {
  // The project of the VPC to connect to. If not specified, it is the same as the cluster project.
  projectId?: string;
}

export function edgecontainer_VpnConnectionVpcProject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The project of the VPC to connect to. If not specified, it is the same as the cluster project.",
      () => [],
      false,
      true,
    ),
  ];
}
