import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface looker_InstanceCustomDomain {
  // Domain name
  domain?: string;

  /*
(Output)
Status of the custom domain.
*/
  state?: string;
}

export function looker_InstanceCustomDomain_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'domain',
      'Domain name',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nStatus of the custom domain.',
      () => [],
      false,
      false,
    ),
  ];
}
