import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backup_getFrameworkControlScope {
  // Describes whether the control scope includes one or more types of resources, such as EFS or RDS.
  complianceResourceTypes?: Array<string>;

  // Tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided.
  tags?: Map<string, string>;

  // The ID of the only AWS resource that you want your control scope to contain.
  complianceResourceIds?: Array<string>;
}

export function backup_getFrameworkControlScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "complianceResourceTypes",
      "Describes whether the control scope includes one or more types of resources, such as EFS or RDS.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "complianceResourceIds",
      "The ID of the only AWS resource that you want your control scope to contain.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
