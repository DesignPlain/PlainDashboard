import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_DomainMappingStatusCondition {
  /*
(Output)
Human readable message indicating details about the current status.
*/
  Message?: string;

  /*
(Output)
One-word CamelCase reason for the condition's current status.
*/
  Reason?: string;

  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  Status?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  Type?: string;
}

export function Cloudrun_DomainMappingStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Status",
      "(Output)\nStatus of the condition, one of True, False, Unknown.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Resource record type. Example: `AAAA`.\nPossible values are: `A`, `AAAA`, `CNAME`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "(Output)\nHuman readable message indicating details about the current status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "(Output)\nOne-word CamelCase reason for the condition's current status.",
      [],
      false,
      false,
    ),
  ];
}
