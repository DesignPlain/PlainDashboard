import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd {
  // The name of the header to add.
  headerName?: string;

  // The value of the header to add.
  headerValue?: string;

  // Whether to replace all existing headers with the same name.
  replace?: boolean;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.Bool,
      'replace',
      'Whether to replace all existing headers with the same name.',
      () => [],
      false,
      false,
    ),
  ];
}
