import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mwaa_EnvironmentLastUpdatedError,
  mwaa_EnvironmentLastUpdatedError_GetTypes,
} from './mwaa_EnvironmentLastUpdatedError';

export interface mwaa_EnvironmentLastUpdated {
  // The Created At date of the MWAA Environment
  createdAt?: string;

  //
  errors?: Array<mwaa_EnvironmentLastUpdatedError>;

  // The status of the Amazon MWAA Environment
  status?: string;
}

export function mwaa_EnvironmentLastUpdated_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'createdAt',
      'The Created At date of the MWAA Environment',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'errors',
      '',
      () => mwaa_EnvironmentLastUpdatedError_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'The status of the Amazon MWAA Environment',
      () => [],
      false,
      false,
    ),
  ];
}
