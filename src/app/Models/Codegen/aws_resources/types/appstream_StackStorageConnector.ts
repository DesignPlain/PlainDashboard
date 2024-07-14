import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appstream_StackStorageConnector {
  /*
Type of storage connector.
Valid values are `HOMEFOLDERS`, `GOOGLE_DRIVE`, or `ONE_DRIVE`.
*/
  connectorType?: string;

  // Names of the domains for the account.
  domains?: Array<string>;

  // ARN of the storage connector.
  resourceIdentifier?: string;
}

export function appstream_StackStorageConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectorType",
      "Type of storage connector.\nValid values are `HOMEFOLDERS`, `GOOGLE_DRIVE`, or `ONE_DRIVE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "domains",
      "Names of the domains for the account.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceIdentifier",
      "ARN of the storage connector.",
      [],
      false,
      false,
    ),
  ];
}
