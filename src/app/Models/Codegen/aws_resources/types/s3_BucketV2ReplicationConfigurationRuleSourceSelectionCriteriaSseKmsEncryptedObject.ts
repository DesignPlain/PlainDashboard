import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject {
  // Boolean which indicates if this criteria is enabled.
  enabled?: boolean;
}

export function s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean which indicates if this criteria is enabled.",
      [],
      true,
      false,
    ),
  ];
}
