import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion {
  /*
A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.
If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
*/
  configOverrides?: Map<string, string>;

  // The identifier for this object. Format specified above.
  key?: string;

  // The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
  version?: string;
}

export function dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "configOverrides",
      "A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.\nIf keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The identifier for this object. Format specified above.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.",
      () => [],
      true,
      false,
    ),
  ];
}
