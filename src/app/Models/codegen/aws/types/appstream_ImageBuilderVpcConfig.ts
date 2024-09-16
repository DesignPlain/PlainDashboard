import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appstream_ImageBuilderVpcConfig {
  // Identifiers of the security groups for the image builder or image builder.
  securityGroupIds?: Array<string>;

  // Identifier of the subnet to which a network interface is attached from the image builder instance.
  subnetIds?: Array<string>;
}

export function appstream_ImageBuilderVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'Identifiers of the security groups for the image builder or image builder.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'Identifier of the subnet to which a network interface is attached from the image builder instance.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
