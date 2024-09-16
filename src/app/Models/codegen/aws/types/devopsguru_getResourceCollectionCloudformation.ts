import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface devopsguru_getResourceCollectionCloudformation {
  // Array of the names of the AWS CloudFormation stacks.
  stackNames?: Array<string>;
}

export function devopsguru_getResourceCollectionCloudformation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'stackNames',
      'Array of the names of the AWS CloudFormation stacks.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
