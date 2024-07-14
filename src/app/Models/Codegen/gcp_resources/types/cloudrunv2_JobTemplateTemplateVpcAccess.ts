import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface,
  cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface";

export interface cloudrunv2_JobTemplateTemplateVpcAccess {
  // VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  connector?: string;

  /*
Traffic VPC egress settings.
Possible values are: `ALL_TRAFFIC`, `PRIVATE_RANGES_ONLY`.
*/
  egress?: string;

  /*
Direct VPC egress settings. Currently only single network interface is supported.
Structure is documented below.
*/
  networkInterfaces?: Array<cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface>;
}

export function cloudrunv2_JobTemplateTemplateVpcAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connector",
      "VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "egress",
      "Traffic VPC egress settings.\nPossible values are: `ALL_TRAFFIC`, `PRIVATE_RANGES_ONLY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "Direct VPC egress settings. Currently only single network interface is supported.\nStructure is documented below.",
      cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface_GetTypes(),
      false,
      false,
    ),
  ];
}
