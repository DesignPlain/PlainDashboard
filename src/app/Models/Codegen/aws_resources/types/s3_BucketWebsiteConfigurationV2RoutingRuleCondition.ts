import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketWebsiteConfigurationV2RoutingRuleCondition {
  // HTTP error code when the redirect is applied. If specified with `key_prefix_equals`, then both must be true for the redirect to be applied.
  httpErrorCodeReturnedEquals?: string;

  // Object key name prefix when the redirect is applied. If specified with `http_error_code_returned_equals`, then both must be true for the redirect to be applied.
  keyPrefixEquals?: string;
}

export function s3_BucketWebsiteConfigurationV2RoutingRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "httpErrorCodeReturnedEquals",
      "HTTP error code when the redirect is applied. If specified with `key_prefix_equals`, then both must be true for the redirect to be applied.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyPrefixEquals",
      "Object key name prefix when the redirect is applied. If specified with `http_error_code_returned_equals`, then both must be true for the redirect to be applied.",
      [],
      false,
      false,
    ),
  ];
}
