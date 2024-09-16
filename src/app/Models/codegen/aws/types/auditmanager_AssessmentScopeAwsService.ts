import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface auditmanager_AssessmentScopeAwsService {
  // Name of the Amazon Web Service.
  serviceName?: string;
}

export function auditmanager_AssessmentScopeAwsService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serviceName',
      'Name of the Amazon Web Service.',
      () => [],
      true,
      false,
    ),
  ];
}
