import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codebuild_ProjectSecondarySourceBuildStatusConfig {
  // Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.
  targetUrl?: string;

  // Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.
  context?: string;
}

export function codebuild_ProjectSecondarySourceBuildStatusConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'targetUrl',
      'Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'context',
      'Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.',
      () => [],
      false,
      false,
    ),
  ];
}
