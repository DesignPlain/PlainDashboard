import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elastictranscoder_PipelineThumbnailConfigPermission {
  // The permission that you want to give to the AWS user that you specified in `thumbnail_config_permissions.grantee`. Valid values are `Read`, `ReadAcp`, `WriteAcp` or `FullControl`.
  accesses?: Array<string>;

  // The AWS user or group that you want to have access to thumbnail files.
  grantee?: string;

  // Specify the type of value that appears in the `thumbnail_config_permissions.grantee` object. Valid values are `Canonical`, `Email` or `Group`.
  granteeType?: string;
}

export function elastictranscoder_PipelineThumbnailConfigPermission_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "accesses",
      "The permission that you want to give to the AWS user that you specified in `thumbnail_config_permissions.grantee`. Valid values are `Read`, `ReadAcp`, `WriteAcp` or `FullControl`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "grantee",
      "The AWS user or group that you want to have access to thumbnail files.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "granteeType",
      "Specify the type of value that appears in the `thumbnail_config_permissions.grantee` object. Valid values are `Canonical`, `Email` or `Group`.",
      [],
      false,
      false,
    ),
  ];
}
