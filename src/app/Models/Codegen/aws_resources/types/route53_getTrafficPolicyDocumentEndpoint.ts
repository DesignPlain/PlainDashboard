import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface route53_getTrafficPolicyDocumentEndpoint {
  // Type of the endpoint. Valid values are `value` , `cloudfront` , `elastic-load-balancer`, `s3-website`
  type?: string;

  // Value of the `type`.
  value?: string;

  // ID of an endpoint you want to assign.
  id?: string;

  // To route traffic to an Amazon S3 bucket that is configured as a website endpoint, specify the region in which you created the bucket for `region`.
  region?: string;
}

export function route53_getTrafficPolicyDocumentEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the `type`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of an endpoint you want to assign.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "To route traffic to an Amazon S3 bucket that is configured as a website endpoint, specify the region in which you created the bucket for `region`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of the endpoint. Valid values are `value` , `cloudfront` , `elastic-load-balancer`, `s3-website`",
      [],
      false,
      false,
    ),
  ];
}
