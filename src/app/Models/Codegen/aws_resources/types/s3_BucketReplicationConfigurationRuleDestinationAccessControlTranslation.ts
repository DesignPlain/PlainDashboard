import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation {
  // The override value for the owner on replicated objects. Currently only `Destination` is supported.
  owner?: string;
}

export function s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "owner",
      "The override value for the owner on replicated objects. Currently only `Destination` is supported.",
      [],
      true,
      false,
    ),
  ];
}
