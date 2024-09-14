import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_RecordGeolocationRoutingPolicy {
  // A two-letter continent code. See http://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html for code details. Either `continent` or `country` must be specified.
  continent?: string;

  // A two-character country code or `-` to indicate a default resource record set.
  country?: string;

  // A subdivision code for a country.
  subdivision?: string;
}

export function route53_RecordGeolocationRoutingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "continent",
      "A two-letter continent code. See http://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html for code details. Either `continent` or `country` must be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "country",
      "A two-character country code or `*` to indicate a default resource record set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subdivision",
      "A subdivision code for a country.",
      () => [],
      false,
      false,
    ),
  ];
}
