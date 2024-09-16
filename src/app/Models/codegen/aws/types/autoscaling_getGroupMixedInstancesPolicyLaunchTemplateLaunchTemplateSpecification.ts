import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  // Name of the launch template.
  launchTemplateName?: string;

  // Template version.
  version?: string;

  // ID of the launch template.
  launchTemplateId?: string;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'launchTemplateName',
      'Name of the launch template.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'Template version.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchTemplateId',
      'ID of the launch template.',
      () => [],
      true,
      false,
    ),
  ];
}
