import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo {
  // The logical grouping to which the "reason" belongs.
  domain?: string;

  // Additional structured details about this error.
  metadata?: Map<string, string>;

  // The reason of the error.
  reason?: string;
}

export function networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      'The logical grouping to which the "reason" belongs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "Additional structured details about this error.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "The reason of the error.",
      () => [],
      false,
      false,
    ),
  ];
}
