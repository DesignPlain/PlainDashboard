import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codebuild_ProjectBuildBatchConfigRestrictions,
  codebuild_ProjectBuildBatchConfigRestrictions_GetTypes,
} from "./codebuild_ProjectBuildBatchConfigRestrictions";

export interface codebuild_ProjectBuildBatchConfig {
  // Specifies if the build artifacts for the batch build should be combined into a single artifact location.
  combineArtifacts?: boolean;

  // Configuration block specifying the restrictions for the batch build. Detailed below.
  restrictions?: codebuild_ProjectBuildBatchConfigRestrictions;

  // Specifies the service role ARN for the batch build project.
  serviceRole?: string;

  // Specifies the maximum amount of time, in minutes, that the batch build must be completed in.
  timeoutInMins?: number;
}

export function codebuild_ProjectBuildBatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timeoutInMins",
      "Specifies the maximum amount of time, in minutes, that the batch build must be completed in.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "combineArtifacts",
      "Specifies if the build artifacts for the batch build should be combined into a single artifact location.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "restrictions",
      "Configuration block specifying the restrictions for the batch build. Detailed below.",
      codebuild_ProjectBuildBatchConfigRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceRole",
      "Specifies the service role ARN for the batch build project.",
      [],
      true,
      false,
    ),
  ];
}
