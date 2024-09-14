import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssmincidents_getReplicationSetRegion {
  // More information about the status of a Region.
  statusMessage?: string;

  // The ARN of the AWS Key Management Service (AWS KMS) encryption key.
  kmsKeyArn?: string;

  // The name of the Region.
  name?: string;

  /*
The current status of the Region.
- Valid Values: `ACTIVE` | `CREATING` | `UPDATING` | `DELETING` | `FAILED`
*/
  status?: string;
}

export function ssmincidents_getReplicationSetRegion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "statusMessage",
      "More information about the status of a Region.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "The ARN of the AWS Key Management Service (AWS KMS) encryption key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Region.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The current status of the Region.\n* Valid Values: `ACTIVE` | `CREATING` | `UPDATING` | `DELETING` | `FAILED`",
      () => [],
      true,
      false,
    ),
  ];
}
