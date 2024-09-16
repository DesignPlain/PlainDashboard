import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_AwsClusterFleet {
  // The number of the Fleet host project where this cluster will be registered.
  project?: string;

  // The name of the managed Hub Membership resource associated to this cluster. Membership names are formatted as projects/<project-number>/locations/global/membership/<cluster-id>.
  membership?: string;
}

export function container_AwsClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'project',
      'The number of the Fleet host project where this cluster will be registered.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'membership',
      'The name of the managed Hub Membership resource associated to this cluster. Membership names are formatted as projects/<project-number>/locations/global/membership/<cluster-id>.',
      () => [],
      false,
      false,
    ),
  ];
}
