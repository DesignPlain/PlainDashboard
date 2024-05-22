import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getAddressesAddress {
  // The IP address description.
  description?: string;

  // A map containing IP labels.
  labels?: Map<string, string>;

  // The IP address name.
  name?: string;

  /*
Region that should be considered to search addresses.
All regions are considered if missing.
*/
  region?: string;

  // The URI of the created resource.
  selfLink?: string;

  // Indicates if the address is used. Possible values are: RESERVED or IN_USE.
  status?: string;

  // The IP address (for example `1.2.3.4`).
  address?: string;

  // The IP address type, can be `EXTERNAL` or `INTERNAL`.
  addressType?: string;
}

export function compute_getAddressesAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The IP address (for example `1.2.3.4`).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "addressType",
      "The IP address type, can be `EXTERNAL` or `INTERNAL`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The IP address description.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A map containing IP labels.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The IP address name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region that should be considered to search addresses.\nAll regions are considered if missing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "selfLink",
      "The URI of the created resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Indicates if the address is used. Possible values are: RESERVED or IN_USE.",
      [],
      true,
      false,
    ),
  ];
}
