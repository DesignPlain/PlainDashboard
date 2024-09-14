import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface identitystore_getUserAddress {
  // When `true`, this is the primary phone number associated with the user.
  primary?: boolean;

  // The region of the address.
  region?: string;

  // The street of the address.
  streetAddress?: string;

  // The type of phone number.
  type?: string;

  // The country that this address is in.
  country?: string;

  // The name that is typically displayed when the name is shown for display.
  formatted?: string;

  // The address locality.
  locality?: string;

  // The postal code of the address.
  postalCode?: string;
}

export function identitystore_getUserAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "country",
      "The country that this address is in.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "formatted",
      "The name that is typically displayed when the name is shown for display.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "locality",
      "The address locality.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "postalCode",
      "The postal code of the address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "primary",
      "When `true`, this is the primary phone number associated with the user.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "The region of the address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streetAddress",
      "The street of the address.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of phone number.",
      () => [],
      true,
      false,
    ),
  ];
}
