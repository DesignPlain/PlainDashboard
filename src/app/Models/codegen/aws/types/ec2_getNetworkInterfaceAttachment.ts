import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getNetworkInterfaceAttachment {
  //
  attachmentId?: string;

  //
  deviceIndex?: number;

  //
  instanceId?: string;

  //
  instanceOwnerId?: string;
}

export function ec2_getNetworkInterfaceAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'deviceIndex',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceOwnerId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'attachmentId',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
