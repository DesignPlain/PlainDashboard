import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codecatalyst_getDevEnvironmentRepository {
  //
  branchName?: string;

  //
  repositoryName?: string;
}

export function codecatalyst_getDevEnvironmentRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "branchName", "", [], true, false),
    new DynamicUIProps(InputType.String, "repositoryName", "", [], true, false),
  ];
}
