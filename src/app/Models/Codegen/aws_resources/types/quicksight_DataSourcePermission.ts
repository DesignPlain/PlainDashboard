import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSourcePermission {
  // Set of IAM actions to grant or revoke permissions on. Max of 16 items.
  actions?: Array<string>;

  // The Amazon Resource Name (ARN) of the principal.
  principal?: string;
}

export function quicksight_DataSourcePermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "Set of IAM actions to grant or revoke permissions on. Max of 16 items.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "principal",
      "The Amazon Resource Name (ARN) of the principal.",
      [],
      true,
      false,
    ),
  ];
}
