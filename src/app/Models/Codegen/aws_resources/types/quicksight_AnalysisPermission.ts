import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_AnalysisPermission {
  // ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values.
  principal?: string;

  // List of IAM actions to grant or revoke permissions on.
  actions?: Array<string>;
}

export function quicksight_AnalysisPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "principal",
      "ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "List of IAM actions to grant or revoke permissions on.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
