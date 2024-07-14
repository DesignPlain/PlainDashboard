import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codepipeline_PipelineArtifactStoreEncryptionKey {
  // The KMS key ARN or ID
  id?: string;

  // The type of key; currently only `KMS` is supported
  type?: string;
}

export function codepipeline_PipelineArtifactStoreEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The KMS key ARN or ID",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of key; currently only `KMS` is supported",
      [],
      true,
      false,
    ),
  ];
}
