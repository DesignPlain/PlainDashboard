import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateVpcAccessNetworkInterface,
  Cloudrunv2_getServiceTemplateVpcAccessNetworkInterface_GetTypes,
} from "./Cloudrunv2_getServiceTemplateVpcAccessNetworkInterface";

export interface Cloudrunv2_getServiceTemplateVpcAccess {
  // Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  Egress?: string;

  // Direct VPC egress settings. Currently only single network interface is supported.
  NetworkInterfaces?: Array<Cloudrunv2_getServiceTemplateVpcAccessNetworkInterface>;

  // VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  Connector?: string;
}

export function Cloudrunv2_getServiceTemplateVpcAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Egress",
      'Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkInterfaces",
      "Direct VPC egress settings. Currently only single network interface is supported.",
      Cloudrunv2_getServiceTemplateVpcAccessNetworkInterface_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Connector",
      "VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.",
      [],
      true,
      false,
    ),
  ];
}
