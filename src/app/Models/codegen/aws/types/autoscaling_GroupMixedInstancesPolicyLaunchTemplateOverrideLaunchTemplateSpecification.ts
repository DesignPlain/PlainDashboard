import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
  //
  version?: string;

  // ID of the launch template. Conflicts with `launch_template_name`.
  launchTemplateId?: string;

  // Name of the launch template. Conflicts with `launch_template_id`.
  launchTemplateName?: string;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'launchTemplateId',
      'ID of the launch template. Conflicts with `launch_template_name`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchTemplateName',
      'Name of the launch template. Conflicts with `launch_template_id`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'version', '', () => [], false, false),
  ];
}
