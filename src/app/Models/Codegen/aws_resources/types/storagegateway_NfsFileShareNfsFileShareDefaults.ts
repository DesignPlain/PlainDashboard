import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface storagegateway_NfsFileShareNfsFileShareDefaults {
  // The Unix directory mode in the string form "nnnn". Defaults to `"0777"`.
  directoryMode?: string;

  // The Unix file mode in the string form "nnnn". Defaults to `"0666"`.
  fileMode?: string;

  // The default group ID for the file share (unless the files have another group ID specified). Defaults to `65534` (`nfsnobody`). Valid values: `0` through `4294967294`.
  groupId?: string;

  // The default owner ID for the file share (unless the files have another owner ID specified). Defaults to `65534` (`nfsnobody`). Valid values: `0` through `4294967294`.
  ownerId?: string;
}

export function storagegateway_NfsFileShareNfsFileShareDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileMode",
      'The Unix file mode in the string form "nnnn". Defaults to `"0666"`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupId",
      "The default group ID for the file share (unless the files have another group ID specified). Defaults to `65534` (`nfsnobody`). Valid values: `0` through `4294967294`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ownerId",
      "The default owner ID for the file share (unless the files have another owner ID specified). Defaults to `65534` (`nfsnobody`). Valid values: `0` through `4294967294`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "directoryMode",
      'The Unix directory mode in the string form "nnnn". Defaults to `"0777"`.',
      [],
      false,
      false,
    ),
  ];
}
