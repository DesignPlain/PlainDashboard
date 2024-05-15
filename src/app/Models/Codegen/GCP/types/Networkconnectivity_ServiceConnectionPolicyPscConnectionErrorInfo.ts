import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo {
  // Additional structured details about this error.
  Metadata?: Map<string, string>;

  // The reason of the error.
  Reason?: string;

  // The logical grouping to which the "reason" belongs.
  Domain?: string;
}

export function Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "Additional structured details about this error.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "The reason of the error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Domain",
      'The logical grouping to which the "reason" belongs.',
      [],
      false,
      false,
    ),
  ];
}
