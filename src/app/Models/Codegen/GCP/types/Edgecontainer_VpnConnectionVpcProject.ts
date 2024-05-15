import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_VpnConnectionVpcProject {
  // The project of the VPC to connect to. If not specified, it is the same as the cluster project.
  ProjectId?: string;
}

export function Edgecontainer_VpnConnectionVpcProject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The project of the VPC to connect to. If not specified, it is the same as the cluster project.",
      [],
      false,
      true,
    ),
  ];
}
