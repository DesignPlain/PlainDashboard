import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ebs_SnapshotImportClientData {
  // The size of the uploaded disk image, in GiB.
  uploadSize?: number;

  // The time that the disk upload starts.
  uploadStart?: string;

  // A user-defined comment about the disk upload.
  comment?: string;

  // The time that the disk upload ends.
  uploadEnd?: string;
}

export function ebs_SnapshotImportClientData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "uploadSize",
      "The size of the uploaded disk image, in GiB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uploadStart",
      "The time that the disk upload starts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "comment",
      "A user-defined comment about the disk upload.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "uploadEnd",
      "The time that the disk upload ends.",
      [],
      false,
      false,
    ),
  ];
}
