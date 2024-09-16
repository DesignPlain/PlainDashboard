import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_getJobTemplateTemplateContainerPort {
  // Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  containerPort?: number;

  // The name of the Cloud Run v2 Job.
  name?: string;
}

export function cloudrunv2_getJobTemplateTemplateContainerPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'containerPort',
      'Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Cloud Run v2 Job.',
      () => [],
      true,
      false,
    ),
  ];
}
