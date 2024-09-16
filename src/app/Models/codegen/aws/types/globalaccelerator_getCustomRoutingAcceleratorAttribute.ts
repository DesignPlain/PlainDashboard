import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface globalaccelerator_getCustomRoutingAcceleratorAttribute {
  //
  flowLogsEnabled?: boolean;

  //
  flowLogsS3Bucket?: string;

  //
  flowLogsS3Prefix?: string;
}

export function globalaccelerator_getCustomRoutingAcceleratorAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'flowLogsS3Prefix',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'flowLogsEnabled',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'flowLogsS3Bucket',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
