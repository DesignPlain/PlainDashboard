import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo {
  // Name of the host where requests are redirected.
  hostName?: string;

  // Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Valid values: `http`, `https`.
  protocol?: string;
}

export function s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostName",
      "Name of the host where requests are redirected.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Valid values: `http`, `https`.",
      [],
      false,
      false,
    ),
  ];
}
