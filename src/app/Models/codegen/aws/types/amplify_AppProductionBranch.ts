import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface amplify_AppProductionBranch {
  // Branch name for the production branch.
  branchName?: string;

  // Last deploy time of the production branch.
  lastDeployTime?: string;

  // Status of the production branch.
  status?: string;

  // Thumbnail URL for the production branch.
  thumbnailUrl?: string;
}

export function amplify_AppProductionBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'branchName',
      'Branch name for the production branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastDeployTime',
      'Last deploy time of the production branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'Status of the production branch.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'thumbnailUrl',
      'Thumbnail URL for the production branch.',
      () => [],
      false,
      false,
    ),
  ];
}
