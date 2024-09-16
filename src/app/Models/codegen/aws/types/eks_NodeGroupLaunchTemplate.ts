import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_NodeGroupLaunchTemplate {
  // Identifier of the EC2 Launch Template. Conflicts with `name`.
  id?: string;

  // Name of the EC2 Launch Template. Conflicts with `id`.
  name?: string;

  // EC2 Launch Template version number. While the API accepts values like `$Default` and `$Latest`, the API will convert the value to the associated version number (e.g., `1`) on read and the provider will show a difference on next plan. Using the `default_version` or `latest_version` attribute of the `aws.ec2.LaunchTemplate` resource or data source is recommended for this argument.
  version?: string;
}

export function eks_NodeGroupLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the EC2 Launch Template. Conflicts with `id`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'EC2 Launch Template version number. While the API accepts values like `$Default` and `$Latest`, the API will convert the value to the associated version number (e.g., `1`) on read and the provider will show a difference on next plan. Using the `default_version` or `latest_version` attribute of the `aws.ec2.LaunchTemplate` resource or data source is recommended for this argument.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'Identifier of the EC2 Launch Template. Conflicts with `name`.',
      () => [],
      false,
      true,
    ),
  ];
}
