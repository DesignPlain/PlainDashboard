import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface amplify_AppProductionBranch {
  // Branch name for the production branch.
  branchName?: string;

  // Last deploy time of the production branch.
  lastDeployTime?: string;

  // Status code for a URL rewrite or redirect rule. Valid values: `200`, `301`, `302`, `404`, `404-200`.
  status?: string;

  // Thumbnail URL for the production branch.
  thumbnailUrl?: string;
}

export function amplify_AppProductionBranch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lastDeployTime",
      "Last deploy time of the production branch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status code for a URL rewrite or redirect rule. Valid values: `200`, `301`, `302`, `404`, `404-200`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "thumbnailUrl",
      "Thumbnail URL for the production branch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "branchName",
      "Branch name for the production branch.",
      [],
      false,
      false,
    ),
  ];
}
