import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedaccess_EndpointNetworkInterfaceOptions {
  //
  networkInterfaceId?: string;

  //
  port?: number;

  //
  protocol?: string;
}

export function verifiedaccess_EndpointNetworkInterfaceOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'networkInterfaceId',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.Number, 'port', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'protocol',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
