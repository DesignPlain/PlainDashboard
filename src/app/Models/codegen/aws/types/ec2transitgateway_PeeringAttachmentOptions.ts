import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2transitgateway_PeeringAttachmentOptions {
  // Indicates whether dynamic routing is enabled or disabled.. Supports `enable` and `disable`.
  dynamicRouting?: string;
}

export function ec2transitgateway_PeeringAttachmentOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dynamicRouting',
      'Indicates whether dynamic routing is enabled or disabled.. Supports `enable` and `disable`.',
      () => [],
      false,
      true,
    ),
  ];
}
