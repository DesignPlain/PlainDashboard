import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd {
  // The value of the header to add.
  headerValue?: string;

  /*
If false, headerValue is appended to any values that already exist for the header.
If true, headerValue is set for the header, discarding any values that were set for that header.
*/
  replace?: boolean;

  // The name of the header to add.
  headerName?: string;
}

export function compute_URLMapPathMatcherRouteRuleHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'replace',
      'If false, headerValue is appended to any values that already exist for the header.\nIf true, headerValue is set for the header, discarding any values that were set for that header.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'headerName',
      'The name of the header to add.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'headerValue',
      'The value of the header to add.',
      () => [],
      true,
      false,
    ),
  ];
}
