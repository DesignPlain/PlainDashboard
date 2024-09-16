import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfunctions_getFunctionSourceRepository {
  // The URL pointing to the hosted repository where the function is defined.
  url?: string;

  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  deployedUrl?: string;
}

export function cloudfunctions_getFunctionSourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'url',
      'The URL pointing to the hosted repository where the function is defined.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'deployedUrl',
      'The URL pointing to the hosted repository where the function was defined at the time of deployment.',
      () => [],
      true,
      false,
    ),
  ];
}
