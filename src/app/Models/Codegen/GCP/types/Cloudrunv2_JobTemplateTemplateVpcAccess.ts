import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface,
  Cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface";

export interface Cloudrunv2_JobTemplateTemplateVpcAccess {
  /*
Traffic VPC egress settings.
Possible values are: `ALL_TRAFFIC`, `PRIVATE_RANGES_ONLY`.
*/
  Egress?: string;

  /*
Direct VPC egress settings. Currently only single network interface is supported.
Structure is documented below.
*/
  NetworkInterfaces?: Array<Cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface>;

  // VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  Connector?: string;
}

export function Cloudrunv2_JobTemplateTemplateVpcAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Egress",
      "Traffic VPC egress settings.\nPossible values are: `ALL_TRAFFIC`, `PRIVATE_RANGES_ONLY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkInterfaces",
      "Direct VPC egress settings. Currently only single network interface is supported.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateVpcAccessNetworkInterface_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Connector",
      "VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.",
      [],
      false,
      false,
    ),
  ];
}
