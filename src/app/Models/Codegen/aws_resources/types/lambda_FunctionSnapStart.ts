import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_FunctionSnapStart {
  // Conditions where snap start is enabled. Valid values are `PublishedVersions`.
  applyOn?: string;

  //
  optimizationStatus?: string;
}

export function lambda_FunctionSnapStart_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applyOn",
      "Conditions where snap start is enabled. Valid values are `PublishedVersions`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "optimizationStatus",
      "",
      [],
      false,
      false,
    ),
  ];
}
