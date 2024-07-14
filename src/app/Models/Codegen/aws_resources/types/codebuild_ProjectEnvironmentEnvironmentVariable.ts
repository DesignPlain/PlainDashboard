import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectEnvironmentEnvironmentVariable {
  // Build output artifact's type. Valid values: `CODEPIPELINE`, `NO_ARTIFACTS`, `S3`.
  type?: string;

  // Environment variable's value.
  value?: string;

  // Project's name.
  name?: string;
}

export function codebuild_ProjectEnvironmentEnvironmentVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Project's name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Build output artifact's type. Valid values: `CODEPIPELINE`, `NO_ARTIFACTS`, `S3`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Environment variable's value.",
      [],
      true,
      false,
    ),
  ];
}
