import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface secretsmanager_getSecretRotationRotationRule {
  //
  duration?: string;

  //
  scheduleExpression?: string;

  //
  automaticallyAfterDays?: number;
}

export function secretsmanager_getSecretRotationRotationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "duration", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "scheduleExpression",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "automaticallyAfterDays",
      "",
      [],
      true,
      false,
    ),
  ];
}
