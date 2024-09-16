import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateVpcAccessNetworkInterface,
  cloudrunv2_getServiceTemplateVpcAccessNetworkInterface_GetTypes,
} from './cloudrunv2_getServiceTemplateVpcAccessNetworkInterface';

export interface cloudrunv2_getServiceTemplateVpcAccess {
  // Direct VPC egress settings. Currently only single network interface is supported.
  networkInterfaces?: Array<cloudrunv2_getServiceTemplateVpcAccessNetworkInterface>;

  // VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  connector?: string;

  // Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  egress?: string;
}

export function cloudrunv2_getServiceTemplateVpcAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'networkInterfaces',
      'Direct VPC egress settings. Currently only single network interface is supported.',
      () => cloudrunv2_getServiceTemplateVpcAccessNetworkInterface_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'connector',
      'VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'egress',
      'Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]',
      () => [],
      true,
      false,
    ),
  ];
}
