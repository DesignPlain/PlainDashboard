import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssm_AssociationTarget {
  // Either `InstanceIds` or `tag:Tag Name` to specify an EC2 tag.
  key?: string;

  // A list of instance IDs or tag values. AWS currently limits this list size to one value.
  values?: Array<string>;
}

export function ssm_AssociationTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Either `InstanceIds` or `tag:Tag Name` to specify an EC2 tag.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "A list of instance IDs or tag values. AWS currently limits this list size to one value.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
