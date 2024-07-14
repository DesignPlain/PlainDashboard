import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectSourceBuildStatusConfig {
  // Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.
  context?: string;

  // Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.
  targetUrl?: string;
}

export function codebuild_ProjectSourceBuildStatusConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "context",
      "Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetUrl",
      "Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.",
      [],
      false,
      false,
    ),
  ];
}
