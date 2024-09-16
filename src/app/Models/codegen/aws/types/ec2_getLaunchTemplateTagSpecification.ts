import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchTemplateTagSpecification {
  //
  resourceType?: string;

  // Map of tags, each pair of which must exactly match a pair on the desired Launch Template.
  tags?: Map<string, string>;
}

export function ec2_getLaunchTemplateTagSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'resourceType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'tags',
      'Map of tags, each pair of which must exactly match a pair on the desired Launch Template.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
