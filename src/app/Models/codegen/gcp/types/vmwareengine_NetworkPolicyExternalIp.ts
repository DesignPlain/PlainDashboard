import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vmwareengine_NetworkPolicyExternalIp {
  // True if the service is enabled; false otherwise.
  enabled?: boolean;

  /*
(Output)
State of the service. New values may be added to this enum when appropriate.
*/
  state?: string;
}

export function vmwareengine_NetworkPolicyExternalIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nState of the service. New values may be added to this enum when appropriate.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'True if the service is enabled; false otherwise.',
      () => [],
      false,
      false,
    ),
  ];
}
