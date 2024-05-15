import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionCommitmentLicenseResource {
  // The number of licenses purchased.
  Amount?: string;

  // Specifies the core range of the instance for which this license applies.
  CoresPerLicense?: string;

  // Any applicable license URI.
  License?: string;
}

export function Compute_RegionCommitmentLicenseResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Amount",
      "The number of licenses purchased.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CoresPerLicense",
      "Specifies the core range of the instance for which this license applies.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "License",
      "Any applicable license URI.",
      [],
      true,
      true,
    ),
  ];
}
