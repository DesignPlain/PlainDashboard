import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codecatalyst_getDevEnvironmentRepository {
  //
  repositoryName?: string;

  //
  branchName?: string;
}

export function codecatalyst_getDevEnvironmentRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "branchName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
