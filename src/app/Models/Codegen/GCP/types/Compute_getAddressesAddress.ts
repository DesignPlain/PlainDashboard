import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getAddressesAddress {
  // Indicates if the address is used. Possible values are: RESERVED or IN_USE.
  Status?: string;

  // The IP address (for example `1.2.3.4`).
  Address?: string;

  // The IP address type, can be `EXTERNAL` or `INTERNAL`.
  AddressType?: string;

  // The IP address description.
  Description?: string;

  // A map containing IP labels.
  Labels?: Map<string, string>;

  // The IP address name.
  Name?: string;

  /*
Region that should be considered to search addresses.
All regions are considered if missing.
*/
  Region?: string;

  // The URI of the created resource.
  SelfLink?: string;
}

export function Compute_getAddressesAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The IP address name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Region",
      "Region that should be considered to search addresses.\nAll regions are considered if missing.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SelfLink",
      "The URI of the created resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Status",
      "Indicates if the address is used. Possible values are: RESERVED or IN_USE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Address",
      "The IP address (for example `1.2.3.4`).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AddressType",
      "The IP address type, can be `EXTERNAL` or `INTERNAL`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The IP address description.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "A map containing IP labels.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
