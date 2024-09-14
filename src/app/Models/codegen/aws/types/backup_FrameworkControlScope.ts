import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface backup_FrameworkControlScope {
  // The ID of the only AWS resource that you want your control scope to contain. Minimum number of 1 item. Maximum number of 100 items.
  complianceResourceIds?: Array<string>;

  // Describes whether the control scope includes one or more types of resources, such as EFS or RDS.
  complianceResourceTypes?: Array<string>;

  // The tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided.
  tags?: Map<string, string>;
}

export function backup_FrameworkControlScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "complianceResourceIds",
      "The ID of the only AWS resource that you want your control scope to contain. Minimum number of 1 item. Maximum number of 100 items.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "complianceResourceTypes",
      "Describes whether the control scope includes one or more types of resources, such as EFS or RDS.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "The tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
