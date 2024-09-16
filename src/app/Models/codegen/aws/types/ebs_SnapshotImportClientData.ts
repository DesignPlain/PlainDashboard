import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ebs_SnapshotImportClientData {
  // A user-defined comment about the disk upload.
  comment?: string;

  // The time that the disk upload ends.
  uploadEnd?: string;

  // The size of the uploaded disk image, in GiB.
  uploadSize?: number;

  // The time that the disk upload starts.
  uploadStart?: string;
}

export function ebs_SnapshotImportClientData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'comment',
      'A user-defined comment about the disk upload.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'uploadEnd',
      'The time that the disk upload ends.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'uploadSize',
      'The size of the uploaded disk image, in GiB.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'uploadStart',
      'The time that the disk upload starts.',
      () => [],
      false,
      false,
    ),
  ];
}
