import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionCommitmentLicenseResource {
  // Specifies the core range of the instance for which this license applies.
  coresPerLicense?: string;

  // Any applicable license URI.
  license?: string;

  // The number of licenses purchased.
  amount?: string;
}

export function compute_RegionCommitmentLicenseResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "amount",
      "The number of licenses purchased.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "coresPerLicense",
      "Specifies the core range of the instance for which this license applies.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "license",
      "Any applicable license URI.",
      [],
      true,
      true,
    ),
  ];
}
