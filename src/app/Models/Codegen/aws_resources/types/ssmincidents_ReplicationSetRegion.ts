import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmincidents_ReplicationSetRegion {
  /*
The Amazon Resource name (ARN) of the customer managed key. If omitted, AWS manages the AWS KMS keys for you, using an AWS owned key, as indicated by a default value of `DefaultKey`.

The following arguments are optional:
*/
  kmsKeyArn?: string;

  // The name of the Region, such as `ap-southeast-2`.
  name?: string;

  /*
The current status of the Region.
- Valid Values: `ACTIVE` | `CREATING` | `UPDATING` | `DELETING` | `FAILED`
*/
  status?: string;

  // More information about the status of a Region.
  statusMessage?: string;
}

export function ssmincidents_ReplicationSetRegion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "statusMessage",
      "More information about the status of a Region.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "The Amazon Resource name (ARN) of the customer managed key. If omitted, AWS manages the AWS KMS keys for you, using an AWS owned key, as indicated by a default value of `DefaultKey`.\n\nThe following arguments are optional:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Region, such as `ap-southeast-2`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The current status of the Region.\n* Valid Values: `ACTIVE` | `CREATING` | `UPDATING` | `DELETING` | `FAILED`",
      [],
      false,
      false,
    ),
  ];
}
